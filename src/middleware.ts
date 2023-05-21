import { NextMiddleware, NextRequest, NextResponse } from "next/server";
import { fallbackLng, headerName } from "./utils/constants";
import { getLanguage } from "./utils";

export const config = {
  matcher: ["/((?!api|_next|sw.js|robots.txt|favicon.ico|.*\\..*).*)"],
};

const getPathname = (req: NextRequest) => new URL(req.url).pathname;

export const middleware: NextMiddleware = (req) => {
  const pathname = getPathname(req);

  if (pathname === "/")
    return NextResponse.rewrite(new URL(`/${fallbackLng}`, req.url));

  const pathLang = getLanguage(pathname);
  const headers = new Headers(req.headers);

  headers.set(headerName, pathLang);

  return NextResponse.next({
    request: {
      headers,
    },
  });
};
