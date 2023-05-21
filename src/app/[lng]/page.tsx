import { ContentSection } from "@/app/components/ContentSection";
import { Header } from "@/app/components/Header";
import { Layout } from "@/components/Layout";
import { Sidebar } from "@/app/components/Sidebar";

export default async function Page() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Layout sidebar={<Sidebar />} header={<Header />}>
        <div className="flex flex-col gap-8">
          {/* @ts-expect-error Server Component */}
          <ContentSection i18nKey="experience" />
          {/* @ts-expect-error Server Component */}
          <ContentSection i18nKey="education" />
          {/* @ts-expect-error Server Component */}
          <ContentSection i18nKey="skills" />
        </div>
      </Layout>
    </>
  );
}
