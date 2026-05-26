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

const renderMarkdown = async (value: string) => {
  const html = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(value);

  return String(html);
};

export const getContentHtml = createServerFn({ method: "GET" })
  .inputValidator((data: ContentRequest) => data)
  .handler(({ data }) => renderMarkdown(markdown[data.lng][data.page]));
