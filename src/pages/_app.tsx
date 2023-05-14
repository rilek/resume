import { Inter } from "next/font/google";

import "../locales/i18n";
import "../styles/global.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter-font",
});

export default function MyApp({ Component, pageProps }: any) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
