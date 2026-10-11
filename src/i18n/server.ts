import "server-only";
import { lang } from "next/root-params";
import { defaultLocale, isLocale, type Locale } from "./config";
import { dictionaries } from "./dictionaries";
import { localize, type Localized } from "./localize";

export async function getLocale(): Promise<Locale> {
  const value = await lang();
  return isLocale(value) ? value : defaultLocale;
}

/**
 * Everything a Server Component needs to render in the current language:
 * the locale, the interface strings and a `t()` that picks a content value.
 */
export async function getI18n() {
  const locale = await getLocale();
  return {
    locale,
    dict: dictionaries[locale],
    t: <T,>(value: T | Localized<T>): T => localize(value, locale),
  };
}
