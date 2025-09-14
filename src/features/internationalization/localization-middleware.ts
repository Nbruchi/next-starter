import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { type NextRequest, NextResponse } from "next/server";

import { i18n, localeUrlCodes, urlCodeToLocale } from "./i18n-config";

const getLocale = (request: NextRequest) => {
  const headers = {
    "accept-language": request.headers.get("accept-language") ?? "",
  };

  const languages = new Negotiator({ headers }).languages();

  return match(languages, i18n.locales, i18n.defaultLocale);
};

export const localizationMiddleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale URL code
  const pathnameHasLocale = Object.keys(urlCodeToLocale).some(
    urlCode =>
      pathname.startsWith(`/${urlCode}/`) ||
      pathname === `/${urlCode}/` ||
      pathname === `/${urlCode}`,
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  const urlCode = localeUrlCodes[locale as keyof typeof localeUrlCodes];
  request.nextUrl.pathname = `/${urlCode}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
};
