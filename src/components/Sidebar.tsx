import { SidebarData } from "@/types/utils";
import { map } from "lodash";
import { Github, Linkedin } from "lucide-react";
import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { useTranslation } from "react-i18next";

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

type SidebarSectionProps = {
  sectionKey: keyof SidebarData;
  props: SidebarData[keyof SidebarData];
};

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
};

const Link = ({ ...props }: LinkProps) => (
  <a className="text-blue-700 hover:underline print:text-inherit" {...props} />
);

const SidebarSectionRenderer = ({ title, children }: any) => (
  <div className="flex flex-col gap-1">
    <header>
      <h3 className="font-medium text-lg">{title}</h3>
    </header>
    <div>{children}</div>
  </div>
);

const EmailSection = ({ title, value }: SidebarData["email"]) => (
  <SidebarSectionRenderer title={title}>
    <Link href={`mailto:${value}`}>{value}</Link>
  </SidebarSectionRenderer>
);

const WebsiteSection = ({ title, value }: SidebarData["webpage"]) => (
  <SidebarSectionRenderer title={title}>
    <Link href={`https://${value}`}>{value}</Link>
  </SidebarSectionRenderer>
);

const LanguagesSection = ({ title, data }: SidebarData["languages"]) => (
  <SidebarSectionRenderer title={title}>
    {map(data, (language, i) => {
      return <p key={i}>{language}</p>;
    })}
  </SidebarSectionRenderer>
);

const LinksSection = ({ title, data }: SidebarData["links"]) => (
  <SidebarSectionRenderer title={title}>
    <div className="flex flex-col">
      {map(data, ({ href, icon, title, shortUrl }, i) => {
        const Icon = socialIcons[icon as "github" | "linkedin"];

        return (
          <a
            className="flex gap-2 text-blue-700 hover:underline print:text-inherit"
            href={href}
            key={i}
          >
            <Icon className="text-slate-500" size={20} />
            <span className="print:hidden">{title}</span>
            <span className="hidden print:block">{shortUrl}</span>
          </a>
        );
      })}
    </div>
  </SidebarSectionRenderer>
);

const renderers = {
  email: EmailSection,
  languages: LanguagesSection,
  links: LinksSection,
  webpage: WebsiteSection,
} as Record<keyof SidebarData, FC>;

const SidebarSection = ({ sectionKey, props }: SidebarSectionProps) => {
  const Renderer = renderers[sectionKey];

  return <Renderer {...(props as any)} />;
};

export const Sidebar = () => {
  const { t } = useTranslation();
  const data = t("sidebar") as unknown as SidebarData;

  return (
    <div className="flex flex-col gap-6 print:flex-row print:[&>*]:flex-1 print:gap-6 print:text-sm">
      {Object.entries(data).map(([key, props]: any) => (
        <SidebarSection key={key} sectionKey={key} props={props} />
      ))}
    </div>
  );
};
