import { Inter, Source_Serif_Pro } from "next/font/google";

import "../locales/i18n";
import "../styles/global.css";
import { AppProps } from "next/app";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter-font",
});

const source = Source_Serif_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--source-font",
  weight: ["400", "600", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={`${inter.variable} ${source.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
