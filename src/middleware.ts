import { NextMiddleware, NextRequest, NextResponse } from "next/server";
import { fallbackLng, headerName } from "./utils/constants";

export const config = {
  matcher: ["/((?!api|_next|sw.js|.*\\..*).*)"],
};

const getLanguage = (req: NextRequest) => {
  const regex = new RegExp("^\/([a-zA-Z]{2})\/?");
  const matches = new URL(req.url).pathname.match(regex);

  return matches?.[1] || fallbackLng;
};

export const middleware: NextMiddleware = (req) => {
  const pathLang = getLanguage(req);
  const headers = new Headers(req.headers);

  headers.set(headerName, pathLang);

  return NextResponse.next({
    request: {
      headers,
    },
  });
};
