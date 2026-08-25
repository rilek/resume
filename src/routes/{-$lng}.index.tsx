import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { Sidebar } from "@/components/Sidebar";
import { getContentHtml } from "@/locales/content";
import { getRouteLanguage } from "@/locales/language";

export const Route = createFileRoute("/{-$lng}/")({
  loader: ({ params }) =>
    getContentHtml({ data: { lng: getRouteLanguage(params.lng), page: "resume" } }),
  component: RouteComponent,
});

function RouteComponent() {
  const { lng: routeLng } = Route.useParams();
  const lng = getRouteLanguage(routeLng);
  const html = Route.useLoaderData();

  return (
    <div className="resume-homepage">
      <Layout sidebar={<Sidebar lng={lng} />} header={<Header lng={lng} />}>
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    </div>
  );
}
