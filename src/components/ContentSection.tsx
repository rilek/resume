import { Locales } from "@/types/utils";
import { isArray, map } from "lodash";
import { useTranslation } from "react-i18next";

type ContentSectionProps = {
  i18nKey: string;
};

type ContentSectionData = Locales["common"]["experience"];
type ContentListProps = Pick<ContentSectionData["sections"][number], "content">;
type SingleSectionProps = ContentSectionData["sections"][number];

const ContentList = ({ content }: ContentListProps) => (
  <ul className="list">
    {map(content, (text, i) => (
      <li className="print:my-0 print:text-sm" key={i}>
        {text}
      </li>
    ))}
  </ul>
);

const SingleSection = ({ title, subtitle, content }: SingleSectionProps) => (
  <div className="border-t-2 border-slate-200 pt-4 flex flex-col gap-2 break-inside-avoid">
    <header>
      <h4 className="text-xl font-medium print:text-lg">{title}</h4>
      <p className="text-sm text-slate-500">{subtitle}</p>
    </header>

    {content && (
      <div className="prose">
        {isArray(content) ? (
          <ContentList content={content} />
        ) : (
          <p>{content}</p>
        )}
      </div>
    )}
  </div>
);

export const ContentSection = ({ i18nKey }: ContentSectionProps) => {
  const { t } = useTranslation();
  const data = t(i18nKey, { returnObjects: true }) as
    | ContentSectionData
    | undefined;

  if (!data) return <></>;

  const { title, sections } = data;

  return (
    <section className="border-t-4 border-slate-200">
      <header className="py-4">
        <h3 className="text-2xl font-bold print:text-xl">{title}</h3>
      </header>

      <div className="flex flex-col gap-4">
        {map(sections, (section, i) => (
          <SingleSection {...section} key={i} />
        ))}
      </div>
    </section>
  );
};
