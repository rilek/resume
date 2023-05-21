import { Sidebar } from "@/components/Sidebar";
import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import { ContentSection } from "@/components/ContentSection";
import { useTranslation } from "react-i18next";
import Head from "next/head";

const IndexPage = () => {
  const { t } = useTranslation();

  const title = `${t("title") || "Rafał Ileczko"} - ${
    t("subtitle") || "Senior Developer"
  }`;

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta property="og:title" content="Rafał Ileczko" />
        <meta property="og:description" content="Senior Software Developer" />
        <meta property="og:image" content={`https://rileczko.com/api/og`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rileczko.com" />
        <meta property="twitter:url" content="https://rileczko.com" />
        <meta name="twitter:title" content="Rafał Ileczko" />
        <meta name="twitter:description" content="Senior Software Developer" />
        <meta name="twitter:image" content="https://rileczko.com/api/og" />
      </Head>

      <Layout sidebar={<Sidebar />} header={<Header />}>
        <div className="flex flex-col gap-8">
          <ContentSection i18nKey="experience" />
          <ContentSection i18nKey="education" />
          <ContentSection i18nKey="skills" />
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
