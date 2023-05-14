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

  return (
    <>
      <Head>
        <title>{t("title")} - {t("subtitle")}</title>
      </Head>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
