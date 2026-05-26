import { createFileRoute, notFound } from "@tanstack/react-router";

import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { Sidebar } from "@/components/Sidebar";
import { getResumeVariantHtml } from "@/locales/content";

export const Route = createFileRoute("/resume/$company")({
  loader: async ({ params }) => {
    const html = await getResumeVariantHtml({ data: { company: params.company } });

    if (!html) {
      throw notFound();
    }

    return html;
  },
  component: RouteComponent,
});

function RouteComponent() {
  const html = Route.useLoaderData();

  return (
    <Layout sidebar={<Sidebar lng="en" />} header={<Header lng="en" />}>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}
