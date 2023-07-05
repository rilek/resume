import fs from "fs/promises";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { Header } from "@/app/components/Header";
import { Layout } from "@/app/components/Layout";
import { Sidebar } from "@/app/components/Sidebar";
import { languages } from "@/utils/constants";

interface Props {
  params: {
    lng: (typeof languages)[number];
  };
}

export default async function Page({ params: { lng } }: Props) {
  const content = await fs.readFile(
    `${process.cwd()}/src/locales/content/${lng}/resume.md`,
    "utf-8"
  );

  return (
    <>
      <Layout sidebar={<Sidebar />} header={<Header />}>
        <ReactMarkdown className="markdown">{content}</ReactMarkdown>
      </Layout>
    </>
  );
}
