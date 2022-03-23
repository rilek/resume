import { useTranslation } from "react-i18next";
import { Layout } from "../components/Layout/Layout";

import Experience from "../partials/Experience";
import Education from "../partials/Education";
import Skills from "../partials/Skills";
import Sidebar from "../partials/Sidebar";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t("title")} subtitle={t("subtitle")} sidebar={<Sidebar />}>
      <Experience />
      <Education />
      <Skills />
    </Layout>
  );
};

export default IndexPage;
