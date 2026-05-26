import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

import { getDocumentHead, getRouteLanguage, setDocumentLanguage } from "@/locales/language";
import { fallbackLng } from "@/utils/constants";

export const Route = createFileRoute("/$lng")({
  beforeLoad: ({ params }) => {
    const lng = getRouteLanguage(params.lng);

    if (lng !== params.lng) {
      throw redirect({ to: "/$lng", params: { lng: fallbackLng } });
    }

    setDocumentLanguage(lng);
  },
  head: ({ params }) => getDocumentHead(getRouteLanguage(params.lng)),
  component: Outlet,
});
