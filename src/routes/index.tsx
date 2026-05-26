import { createFileRoute, redirect } from "@tanstack/react-router";

import { fallbackLng } from "@/utils/constants";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/$lng", params: { lng: fallbackLng } });
  },
});
