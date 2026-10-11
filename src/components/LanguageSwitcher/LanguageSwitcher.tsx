"use client";

import { locales, LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./LanguageSwitcher.module.css";

type LanguageSwitcherProps = {
  current: Locale;
  labels: Dictionary["language"];
};

/**
 * EN / ES toggle. Saves the choice in a cookie and reloads: src/proxy.ts then
 * serves the other prerendered page at the same URL (the #section is kept).
 */
export function LanguageSwitcher({ current, labels }: LanguageSwitcherProps) {
  function choose(locale: Locale) {
    if (locale === current) return;
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax`;
    window.location.reload();
  }

  return (
    <div role="group" aria-label={labels.label} className={styles.switcher}>
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          lang={locale}
          className={styles.option}
          aria-pressed={locale === current}
          aria-label={labels[locale]}
          onClick={() => choose(locale)}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
