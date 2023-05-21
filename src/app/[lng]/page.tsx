import { ContentSection } from "@/app/components/ContentSection";
import { Header } from "@/app/components/Header";
import { Layout } from "@/components/Layout";
import { Sidebar } from "@/app/components/Sidebar";

export default async function Page() {
  return (
    <>
      <Layout sidebar={<Sidebar />} header={<Header />}>
        <div className="flex flex-col gap-8">
          <ContentSection i18nKey="experience" />
          <ContentSection i18nKey="education" />
          <ContentSection i18nKey="skills" />
        </div>
      </Layout>
    </>
  );
}
