import { Meta } from "@/components/_head/Meta";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <Script id="localStorageTheme">
          {`const preferredTheme = window.localStorage.getItem("theme");
        if(preferredTheme) document.body.className = preferredTheme;`}
        </Script>

        <Meta />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
