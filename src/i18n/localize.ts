import type { Locale } from "./config";

/** A value written once per language, e.g. { en: "Live", es: "En producción" }. */
export type Localized<T = string> = Record<Locale, T>;

/** Picks the value for the locale. Plain (non-localized) values are returned as is. */
export function localize<T>(value: T | Localized<T>, locale: Locale): T {
  if (typeof value === "object" && value !== null && !Array.isArray(value) && locale in value) {
    return (value as Localized<T>)[locale];
  }
  return value as T;
}
