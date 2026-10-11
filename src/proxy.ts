import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE } from "@/i18n/config";

/**
 * The language never shows in the URL. "/" is rewritten internally to the
 * prerendered /en or /es page, depending on the cookie set by the language switcher.
 * Typing /en or /es directly saves that choice and goes back to "/".
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
    const locale = isLocale(cookie) ? cookie : defaultLocale;
    return NextResponse.rewrite(new URL(`/${locale}`, request.url));
  }

  const locale = pathname.slice(1);
  const response = NextResponse.redirect(new URL("/", request.url));
  if (isLocale(locale)) {
    response.cookies.set(LOCALE_COOKIE, locale, { path: "/", maxAge: LOCALE_COOKIE_MAX_AGE, sameSite: "lax" });
  }
  return response;
}

export const config = {
  // Only the page itself. /en/opengraph-image, /en/icon.svg, /_next… pass through untouched.
  matcher: ["/", "/en", "/es"],
};
