import fs from "fs";
import ReactMarkdown from "react-markdown";

import { Header } from "@/app/components/Header";
import { Layout } from "@/app/components/Layout";
import { Sidebar } from "@/app/components/Sidebar";
import { languages } from "@/utils/constants";
import rehypeRaw from "rehype-raw";

interface Props {
  params: {
    lng: (typeof languages)[number];
  };
}

export default async function Page({ params: { lng } }: Props) {
  const content = fs.readFileSync(
    `${process.cwd()}/src/locales/content/${lng}/resume.md`,
    "utf-8"
  );

  return (
    <Layout sidebar={<Sidebar />} header={<Header />}>
      <ReactMarkdown className="markdown" rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </Layout>
  );
}
