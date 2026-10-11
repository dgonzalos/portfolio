// Shared by the proxy, server and client components: keep it free of server-only imports.

export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Cookie that remembers the visitor's language. The URL never changes. */
export const LOCALE_COOKIE = "lang";

export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

/** BCP 47 tag used by Intl for dates. */
export const intlLocale: Record<Locale, string> = { en: "en-US", es: "es-ES" };

/** Open Graph locale for link previews. */
export const ogLocale: Record<Locale, string> = { en: "en_US", es: "es_ES" };
