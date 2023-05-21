import { getTranslation } from "@/locales/i18n";
import { Locales } from "@/types/utils";
import { isArray, map } from "lodash";

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
  <div className="flex flex-col break-inside-avoid">
    <header>
      <h4 className="font-bold print:text-lg">{title}</h4>
      <p className="text-[max(0.75em,_16px)]">{subtitle}</p>
    </header>

    {content && (
      <div className="prose prose-lg text-gray-900 leading-relaxed">
        {isArray(content) ? (
          <ContentList content={content} />
        ) : (
          <p>{content}</p>
        )}
      </div>
    )}
  </div>
);

export const ContentSection = async ({ i18nKey }: ContentSectionProps) => {
  const { t } = await getTranslation();
  const data = t(i18nKey, { returnObjects: true }) as
    | ContentSectionData
    | undefined;

  if (!data) return <></>;

  const { title, sections } = data;

  return (
    <section className="border-t-2 border-slate-400 text-xl print:text-sm">
      <header className="py-4 mb-4 font-sans">
        <h3 className="font-bold text-base uppercase print:text-xs">{title}</h3>
      </header>

      <div className="flex flex-col gap-6">
        {map(sections, (section, i) => (
          <SingleSection {...section} key={i} />
        ))}
      </div>
    </section>
  );
};
