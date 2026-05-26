import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

import {
  getDocumentHead,
  getRouteLanguage,
  isRouteLanguage,
  setDocumentLanguage,
} from "@/locales/language";

export const Route = createFileRoute("/{-$lng}")({
  beforeLoad: ({ params }) => {
    if (params.lng !== undefined && !isRouteLanguage(params.lng)) {
      throw redirect({ to: "/{-$lng}", params: { lng: undefined } });
    }

    const lng = getRouteLanguage(params.lng);
    setDocumentLanguage(lng);

    return { lng };
  },
  head: ({ params }) => getDocumentHead(getRouteLanguage(params.lng)),
  component: Outlet,
});
