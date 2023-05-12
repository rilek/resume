import { useTranslation } from "react-i18next";
import { Sidebar } from "@/components/Sidebar";
import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import { isArray, map } from "lodash";

const ContentSection = ({ i18nKey }: { i18nKey: string }) => {
  const { t } = useTranslation();
  const data = t(i18nKey, { returnObjects: true }) as {
    title: string;
    sections: { title: string, subtitle?: string, content?: string[] }[]
  } | undefined;

  if (!data) return <></>;

  const { title, sections } = data;

  return <section className="border-t-4 border-slate-200">
    <header className="py-4">
      <h3 className="text-2xl font-bold print:text-xl">{title}</h3>
    </header>
    <div className="flex flex-col gap-4">
      {map(sections, ({ title, subtitle, content }, i) => (
        <div key={i} className="border-t-2 border-slate-200 pt-4 flex flex-col gap-2 break-inside-avoid">
          <header>
            <h4 className="text-xl font-medium print:text-lg">{title}</h4>
            <p className="text-sm text-slate-500">{subtitle}</p>
          </header>
          {content && (
            <div className="prose">
              {isArray(content) ? <ul className="list">
                {map(content, (text, i) => (
                  <li className="print:my-0 print:text-sm" key={i}>{text}</li>
                ))}
              </ul> : <p>{content}</p>}
            </div>
          )}
        </div>
      ))}
    </div>
  </section>

}

const IndexPage = () => {
  const { t } = useTranslation();

  return <Layout
    sidebar={<Sidebar />}
    header={<Header />}
  >
    <div className="flex flex-col gap-8">
      <ContentSection i18nKey="experience" />
      <ContentSection i18nKey="education" />
      <ContentSection i18nKey="skills" />
    </div>
  </Layout>;
};

export default IndexPage;
