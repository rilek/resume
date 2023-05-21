import { Sidebar } from "@/components/Sidebar";
import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import { ContentSection } from "@/components/ContentSection";
import { NextPageContext } from "next";
import { useTranslation } from "react-i18next";
import Head from "next/head";

export const getServerSideProps = (context: NextPageContext) => {
  const headers = context.req?.headers || {};
  console.log("origin", headers);

  const protocol =
    headers["x-forwarded-proto"] || headers.host?.startsWith("localhost")
      ? "http"
      : "https";

  return { props: { origin: `${protocol}//${headers.host}` } };
};

const IndexPage = ({ origin }: { origin: string }) => {
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
        <meta property="og:image" content={`${origin}/api/og`} />
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
