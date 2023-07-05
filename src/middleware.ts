import { NextMiddleware, NextRequest, NextResponse } from "next/server";
import { fallbackLng, headerName } from "./utils/constants";
import { getLanguage } from "./utils";

export const config = {
  matcher: ["/((?!api|_next|sw.js|robots.txt|favicon.ico|.*\\..*).*)"],
};

const getPathname = (req: NextRequest) => new URL(req.url).pathname;

export const middleware: NextMiddleware = (req) => {
  const pathname = getPathname(req);
  const pathLang = getLanguage(pathname);

  if (pathname === "/" || !pathLang)
    return NextResponse.redirect(
      new URL(`/${fallbackLng}/${pathname}`, req.url)
    );

  const headers = new Headers(req.headers);

  headers.set(headerName, pathLang);

  return NextResponse.next({
    request: {
      headers,
    },
  });
};
