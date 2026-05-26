import { getTranslation } from "@/locales/i18n";
import { SidebarData } from "@/types/utils";
import type { Language } from "@/utils/constants";
import clsx from "clsx";
import type { AnchorHTMLAttributes, DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { GithubIcon } from "./icons/il-github";
import { LinkedinIcon } from "./icons/il-linkedin";

type LinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

type SidebarSectionProps = {
  sectionKey: keyof SidebarData;
  props: SidebarData[keyof SidebarData];
};

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

const TextLink = ({ children, ...props }: LinkProps) => (
  <a className="text-blue-700 transition-colors hover:text-blue-500" {...props}>
    {children}
  </a>
);

const SidebarSectionRenderer = ({
  title,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & { title: string }) => (
  <div className={clsx("flex flex-col gap-1", props.className)}>
    <header>
      <h3 className="font-semibold">{title}</h3>
    </header>
    <div>{children}</div>
  </div>
);

const EmailSection = ({ title, value }: SidebarData["email"]) => (
  <SidebarSectionRenderer title={title}>
    <TextLink href={`mailto:${value}`}>{value}</TextLink>
  </SidebarSectionRenderer>
);

const WebsiteSection = ({ title, value }: SidebarData["webpage"]) => (
  <SidebarSectionRenderer title={title}>
    <TextLink href={`https://${value}`}>{value}</TextLink>
  </SidebarSectionRenderer>
);

const LanguagesSection = ({ title, data }: SidebarData["languages"]) => (
  <SidebarSectionRenderer title={title} className="print:hidden">
    {data.map((language, i) => {
      return <p key={i}>{language}</p>;
    })}
  </SidebarSectionRenderer>
);

const LinksSection = ({ title, data }: SidebarData["links"]) => (
  <SidebarSectionRenderer title={title}>
    <div className="flex flex-col">
      {data.map(({ href, icon, title: linkTitle }, i) => {
        const Icon = socialIcons[icon as keyof typeof socialIcons];

        return (
          <a className="flex items-center gap-2 text-blue-700 hover:underline" href={href} key={i}>
            <Icon size={16} />
            <span className="_print:hidden">{linkTitle}</span>
            {/* <span className="hidden print:block">{shortUrl}</span> */}
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

const EmptyRenderer = () => <></>;

const SidebarSection = ({ sectionKey, props }: SidebarSectionProps) => {
  const Renderer = renderers[sectionKey] || EmptyRenderer;

  return <Renderer {...(props as any)} />;
};

export const Sidebar = ({ lng, ...props }: HTMLAttributes<HTMLElement> & { lng: Language }) => {
  const { t } = getTranslation(lng, "common");
  const data = t("sidebar") as unknown as SidebarData;

  return (
    <div
      {...props}
      className={clsx(
        "grid grid-cols-2 lg:text-lg md:grid-cols-1 print:grid-cols-4 gap-6 print:text-xs print:flex  print:gap-6",
        props.className,
      )}
    >
      {Object.entries(data).map(([key, sectionProps]: any) => (
        <SidebarSection key={key} sectionKey={key} props={sectionProps} />
      ))}
    </div>
  );
};
