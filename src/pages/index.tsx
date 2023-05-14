import { Sidebar } from "@/components/Sidebar";
import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import { ContentSection } from "@/components/ContentSection";

const IndexPage = () => {
  return (
    <Layout sidebar={<Sidebar />} header={<Header />}>
      <div className="flex flex-col gap-8">
        <ContentSection i18nKey="experience" />
        <ContentSection i18nKey="education" />
        <ContentSection i18nKey="skills" />
      </div>
    </Layout>
  );
};

export default IndexPage;
