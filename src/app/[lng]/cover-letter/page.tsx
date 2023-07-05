import fs from "fs";
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
  const content = await fs.readFileSync(
    `${process.cwd()}/src/locales/content/${lng}/cover_letter.md`,
    "utf-8"
  );

  return (
    <>
      <Layout sidebar={<Sidebar className="print:hidden" />} header={<Header />}>
        <ReactMarkdown className="markdown">{content}</ReactMarkdown>
      </Layout>
    </>
  );
}
