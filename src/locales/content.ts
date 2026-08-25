import { createServerFn } from "@tanstack/react-start";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

import coverLetterEn from "@/locales/content/en/cover_letter.md?raw";
import resumeEn from "@/locales/content/en/resume.md?raw";
import coverLetterPl from "@/locales/content/pl/cover_letter.md?raw";
import resumePl from "@/locales/content/pl/resume.md?raw";
import type { Language } from "@/utils/constants";

type ContentPage = "coverLetter" | "resume";
type ContentRequest = {
  lng: Language;
  page: ContentPage;
};

const markdown = {
  en: {
    coverLetter: coverLetterEn,
    resume: resumeEn,
  },
  pl: {
    coverLetter: coverLetterPl,
    resume: resumePl,
  },
} satisfies Record<Language, Record<ContentPage, string>>;

const resumeVariants = import.meta.glob<string>("/src/locales/content/en/resume-*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

type HastNode = {
  children?: HastNode[];
  properties?: Record<string, unknown>;
  tagName?: string;
  type?: string;
  value?: string;
};

type ResumeMetadata = {
  title?: HastNode[];
  period?: HastNode[];
  tags?: string[];
};

const element = (
  tagName: string,
  properties: Record<string, unknown>,
  children: HastNode[],
): HastNode => ({
  type: "element",
  tagName,
  properties,
  children,
});

const text = (value: string): HastNode => ({ type: "text", value });

const textContent = (node: HastNode): string =>
  node.type === "text" ? (node.value ?? "") : (node.children ?? []).map(textContent).join("");

const splitInlineLines = (nodes: HastNode[]) =>
  nodes.reduce<HastNode[][]>(
    (lines, node) => {
      if (node.type !== "text" || !node.value?.includes("\n")) {
        lines[lines.length - 1]?.push(node);
        return lines;
      }

      const parts = node.value.split("\n");

      parts.forEach((part, index) => {
        if (index > 0) {
          lines.push([]);
        }

        if (part) {
          lines[lines.length - 1]?.push({ ...node, value: part });
        }
      });

      return lines;
    },
    [[]],
  );

const stripLineLabel = (line: HastNode[], label: string) => {
  let stripped = false;

  return line
    .map((node) => {
      if (stripped || node.type !== "text") {
        return node;
      }

      stripped = true;
      return { ...node, value: node.value?.replace(new RegExp(`^${label}:\\s*`), "") };
    })
    .filter((node) => node.type !== "text" || node.value);
};

const parseMetadataParagraph = (node: HastNode): ResumeMetadata | undefined => {
  if (node.type !== "element" || node.tagName !== "p" || !node.children) {
    return undefined;
  }

  const metadata = splitInlineLines(node.children).reduce<ResumeMetadata>((result, line) => {
    const value = textContent({ children: line }).trim();

    if (!value) {
      return result;
    }

    if (/^(company|institution):\s*/.test(value)) {
      return { ...result, title: stripLineLabel(line, value.split(":")[0] ?? "") };
    }

    if (/^period:\s*/.test(value)) {
      return { ...result, period: stripLineLabel(line, value.split(":")[0] ?? "") };
    }

    if (/^tags:\s*/.test(value)) {
      return {
        ...result,
        tags: value
          .replace(/^tags:\s*/, "")
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
      };
    }

    return result;
  }, {});

  return metadata.title || metadata.period || metadata.tags ? metadata : undefined;
};

const metadataToNode = ({ title, period, tags }: ResumeMetadata): HastNode =>
  element("div", { className: ["markdown-meta-block"] }, [
    ...(title || period
      ? [
          element(
            "p",
            { className: ["markdown-meta"] },
            [
              ...(title
                ? [element("span", { className: ["markdown-meta-title"] }, title)]
                : []),
              ...(title && period ? [text(" · ")] : []),
              ...(period
                ? [element("span", { className: ["markdown-meta-period"] }, period)]
                : []),
            ],
          ),
        ]
      : []),
    ...(tags?.length
      ? [
          element(
            "ul",
            { className: ["markdown-tags"] },
            tags.map((tag) => element("li", {}, [text(tag)])),
          ),
        ]
      : []),
  ]);

const hasClass = (node: HastNode, className: string) =>
  node.type === "element" &&
  node.tagName === "div" &&
  Array.isArray(node.properties?.className) &&
  node.properties.className.includes(className);

const isMetadataBlock = (node: HastNode) => hasClass(node, "markdown-meta-block");

const isHeadingMetadataRow = (node: HastNode) => hasClass(node, "markdown-heading-row");

const isWhitespace = (node: HastNode | undefined) =>
  node?.type === "text" && !node.value?.trim();

const groupHeadingMetadata = (node: HastNode) => {
  if (!node.children) {
    return;
  }

  const children: HastNode[] = [];

  for (let index = 0; index < node.children.length; index += 1) {
    const child = node.children[index];
    let metadataIndex = index + 1;

    while (isWhitespace(node.children[metadataIndex])) {
      metadataIndex += 1;
    }

    const metadata = node.children[metadataIndex];

    if (child?.type === "element" && child.tagName === "h3" && metadata && isMetadataBlock(metadata)) {
      children.push(element("div", { className: ["markdown-heading-row"] }, [child, metadata]));
      index = metadataIndex;
      continue;
    }

    if (child) {
      children.push(child);
    }
  }

  node.children = children;
  node.children.filter((child) => !isHeadingMetadataRow(child)).forEach(groupHeadingMetadata);
};

const enhanceResumeMetadata = () => (tree: HastNode) => {
  const transformChildren = (node: HastNode) => {
    if (!node.children) {
      return;
    }

    node.children = node.children.map((child) => {
      const metadata = parseMetadataParagraph(child);
      return metadata ? metadataToNode(metadata) : child;
    });

    node.children.forEach(transformChildren);
  };

  transformChildren(tree);
  groupHeadingMetadata(tree);
};

const renderMarkdown = async (value: string) => {
  const html = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(enhanceResumeMetadata)
    .use(rehypeStringify)
    .process(value);

  return String(html);
};

export const getContentHtml = createServerFn({ method: "GET" })
  .validator((data: ContentRequest) => data)
  .handler(({ data }) => renderMarkdown(markdown[data.lng][data.page]));

export const getResumeVariantHtml = createServerFn({ method: "GET" })
  .validator((data: { company: string }) => data)
  .handler(({ data }) => {
    const company = data.company.toLowerCase().replace(/[^a-z0-9-]/g, "");
    const variantMarkdown = resumeVariants[`/src/locales/content/en/resume-${company}.md`];

    return variantMarkdown ? renderMarkdown(variantMarkdown) : null;
  });
