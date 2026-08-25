import type { ReactNode } from "react";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";

import { ThemeToggle } from "@/components/ThemeToggle";
import { getTranslation } from "@/locales/i18n";
import { getRouteLanguage } from "@/locales/language";
import "@/styles/global.css";
import { getLanguage } from "@/utils";

import "@fontsource-variable/source-serif-4/wght.css";
import "@fontsource-variable/geist/wght.css";

const themeScript = `
(() => {
  const storageKey = "resume-theme";
  const root = document.documentElement;
  let theme;

  try {
    theme = window.localStorage.getItem(storageKey);
  } catch {
    // Use the system preference when storage is unavailable.
  }

  if (theme !== "dark" && theme !== "light") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  root.classList.toggle("dark", theme === "dark");
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#171717" : "#ffffff");
})();
`.trim();

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "theme-color", content: "#ffffff" },
    ],
    links: [
      { rel: "apple-touch-icon-precomposed", sizes: "57x57", href: "/apple-touch-icon-57x57.png" },
      {
        rel: "apple-touch-icon-precomposed",
        sizes: "114x114",
        href: "/apple-touch-icon-114x114.png",
      },
      { rel: "apple-touch-icon-precomposed", sizes: "72x72", href: "/apple-touch-icon-72x72.png" },
      {
        rel: "apple-touch-icon-precomposed",
        sizes: "144x144",
        href: "/apple-touch-icon-144x144.png",
      },
      { rel: "apple-touch-icon-precomposed", sizes: "60x60", href: "/apple-touch-icon-60x60.png" },
      {
        rel: "apple-touch-icon-precomposed",
        sizes: "120x120",
        href: "/apple-touch-icon-120x120.png",
      },
      { rel: "apple-touch-icon-precomposed", sizes: "76x76", href: "/apple-touch-icon-76x76.png" },
      {
        rel: "apple-touch-icon-precomposed",
        sizes: "152x152",
        href: "/apple-touch-icon-152x152.png",
      },
      { rel: "icon", type: "image/png", sizes: "196x196", href: "/favicon-196x196.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "128x128", href: "/favicon-128x128.png" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => "Resume not found",
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const lng = getRouteLanguage(getLanguage(pathname));
  const { t } = getTranslation(lng, "common");

  return (
    <html lang={lng} dir="ltr" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XLQH7JW38B" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-XLQH7JW38B");
`.trim(),
          }}
        />
      </head>
      <body>
        {children}
        <ThemeToggle label={t("themeToggle")} />
        <Scripts />
      </body>
    </html>
  );
}
