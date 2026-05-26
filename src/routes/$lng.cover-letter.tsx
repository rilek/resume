import { createFileRoute } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";

import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { Sidebar } from "@/components/Sidebar";
import { content } from "@/locales/content";
import { getRouteLanguage } from "@/locales/language";

export const Route = createFileRoute("/$lng/cover-letter")({
  component: RouteComponent,
});

function RouteComponent() {
  const { lng: routeLng } = Route.useParams();
  const lng = getRouteLanguage(routeLng);

  return (
    <Layout sidebar={<Sidebar lng={lng} className="print:hidden" />} header={<Header lng={lng} />}>
      <ReactMarkdown className="markdown">{content[lng].coverLetter}</ReactMarkdown>
    </Layout>
  );
}
