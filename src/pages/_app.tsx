import { Inter } from "next/font/google";

import "../locales/i18n";
import "../styles/global.css";
import Head from "next/head";
import { useTransition } from "react";
import { useTranslation } from "react-i18next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter-font",
});

export default function MyApp({ Component, pageProps }: any) {
  const { t } = useTranslation();

  const title = `${t("title") || "Rafał Ileczko"} - ${t("subtitle") || "Senior Developer"}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
