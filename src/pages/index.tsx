import { useTranslation } from "react-i18next";
import { Layout } from "../components/Layout/Layout";
import { default as Experience } from "../partials/Experience.mdx";
import { default as Education } from "../partials/Education.mdx";
import { default as Skills } from "../partials/Skills.mdx";
import { default as SidebarContent } from "../partials/Sidebar.mdx";
import { Sidebar as SidebarWrapper } from "../components/Layout/Sidebar";

const personalData: Record<"title" | "content", string | JSX.Element>[] = [
  {
    title: "Email address",
    content: <a href="mailto:rileczko@gmail.com">rileczko@gmail.com</a>,
  },
  {
    title: "Webpage",
    content: <a href="https://rileczko.com">rileczko.com</a>,
  },
  {
    title: "Links",
    content: (
      <div>
        <a
          href="https://www.linkedin.com/in/rafa%C5%82-ileczko-1a7727114/"
          data-short-url="bit.ly/3JiTv61"
        >
          LinkedIn
        </a>
        <br />
        <a href="https://github.com/rilek" data-short-url="bit.ly/3q7b2Xd">
          Github
        </a>
      </div>
    ),
  },
  {
    title: "Languages",
    content: (
      <div>
        Polish <br />
        English - C1 <br />
        French - A1
      </div>
    ),
  },
];

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarContent />
    </SidebarWrapper>
  );
};

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
