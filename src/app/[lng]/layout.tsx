import Script from "next/script";
import { Metadata } from "next";
import { headers } from "next/headers";
import { PropsWithChildren } from "react";
import { Inter, Source_Serif_4 } from "next/font/google";
import { dir } from "i18next";

import "../../styles/global.css";
import { getTranslation } from "@/locales/i18n";
import { getLanguage } from "@/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter-font",
  weight: ["700"],
});

const source = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--source-font",
  weight: ["400", "700", "900"],
});

const defaultMeta = {
  icons: [
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "57x57",
      url: "/apple-touch-icon-57x57.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "114x114",
      url: "/apple-touch-icon-114x114.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "72x72",
      url: "/apple-touch-icon-72x72.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "144x144",
      url: "/apple-touch-icon-144x144.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "60x60",
      url: "/apple-touch-icon-60x60.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "120x120",
      url: "/apple-touch-icon-120x120.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "76x76",
      url: "/apple-touch-icon-76x76.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      sizes: "152x152",
      url: "/apple-touch-icon-152x152.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-196x196.png",
      sizes: "196x196",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-96x96.png",
      sizes: "96x96",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-128.png",
      sizes: "128x128",
    },
  ],
};

interface RootLayoutProps {
  params: { lng: string };
}

export const generateMetadata = async (
  _props: RootLayoutProps
): Promise<Metadata> => {
  const { t } = await getTranslation();
  const headersInstance = headers();

  const host =
    headersInstance.get("host") || headersInstance.get("x-forwarded-host");
  const proto = headersInstance.get("x-forwarded-proto") || "http";

  if (!host) throw new Error("Missing host name");

  const title = t("title");
  const description = t("subtitle");
  const img = `/api/og`;

  return {
    ...defaultMeta,
    metadataBase: new URL(`${proto}://${host}`),
    title,
    description,
    twitter: {
      title,
      card: "summary_large_image",
      site: "@site",
      creator: "@creator",
      images: [{ url: img }],
    },
    openGraph: {
      title,
      type: "website",
      images: [{ url: img }],
    },
  };
};

export const viewport = {
  themeColor: "#FFFFFF",
};

export default async function RootLayout({
  children,
  params: { lng },
}: PropsWithChildren<RootLayoutProps>) {
  const lang = getLanguage(lng);

  return (
    <html
      lang={lang}
      dir={dir(lang)}
      className={`${inter.variable} ${source.variable}`}
    >
      <head>
        {/* <Script id="localStorageTheme">
          {`const preferredTheme = window.localStorage.getItem("theme");
        if(preferredTheme) document.body.classList.add(preferredTheme);`}
        </Script> */}
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XLQH7JW38B"
        ></Script>
        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XLQH7JW38B');`,
          }}
        />
      </head>
      <body>
        {children}

        {/* <Navigation /> */}
      </body>
    </html>
  );
}
