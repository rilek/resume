import { createFileRoute } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { Sidebar } from "@/components/Sidebar";
import { content } from "@/locales/content";
import { getRouteLanguage } from "@/locales/language";

export const Route = createFileRoute("/{-$lng}/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { lng: routeLng } = Route.useParams();
  const lng = getRouteLanguage(routeLng);

  return (
    <Layout sidebar={<Sidebar lng={lng} />} header={<Header lng={lng} />}>
      <ReactMarkdown className="markdown" rehypePlugins={[rehypeRaw]}>
        {content[lng].resume}
      </ReactMarkdown>
    </Layout>
  );
}
