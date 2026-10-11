# CLAUDE.md

Personal portfolio site: a single page built with Next.js 16 (App Router), React 19, TypeScript (strict) and CSS Modules. Deployed on Vercel.

## Commands

```bash
npm run dev        # dev server at http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit — run after every change
```

There is no linter, formatter or test suite configured. `typecheck` + `build` are the verification steps.

## Languages (English / Spanish)

The site is bilingual, but the URL never contains the language:
- `app/[lang]/` prerenders `/en` and `/es` (`generateStaticParams`, `dynamicParams = false`). `src/proxy.ts` rewrites `/` to one of them based on the `lang` cookie (default `en`); `/en` and `/es` redirect to `/` and set the cookie. Its matcher is only `/`, `/en`, `/es` so metadata routes (`/en/opengraph-image`, `/-/icon.svg`) pass through.
- `LanguageSwitcher` (client) writes the cookie and reloads.
- **Interface strings** live in `src/i18n/dictionaries.ts` (`Dictionary` type; `en` and `es` must both define every key).
- **Content** uses `Localized<T> = { en: T; es: T }` (`src/i18n/localize.ts`) for anything a visitor reads. Names, URLs, dates and stacks stay plain strings.
- Server components call `const { locale, dict, t } = await getI18n()` (`src/i18n/server.ts`, which reads `lang` from `next/root-params`) and render content with `t(value)`. Client components get translated strings as props.
- Dates: `formatMonth` / `formatRange` / `formatRelative` in `lib/format.ts` take the locale (`en-US` / `es-ES`).
- Any new user-facing text needs both `en` and `es`. Code comments and docs stay in English.
- After adding/moving routes, run `npx next typegen` if `typecheck` complains about `next/root-params` or `LayoutProps`.

## Structure

- `src/app/[lang]/` — `layout.tsx` (root layout: metadata per language, fonts, theme init script), `page.tsx` (section order), `globals.css` (design tokens), `opengraph-image.tsx`, `icon.svg`.
- `src/proxy.ts` — picks the language for `/`. `src/i18n/` — locales config, dictionaries, `Localized` + `localize()`, `getI18n()`.
- `src/content/` — **all site content** as typed TS data (`profile`, `experience`, `skills`, `projects`, `products`). Types live in `types.ts`. Components never hardcode content.
- `src/components/<Name>/<Name>.tsx` + `<Name>.module.css` — one folder per component, named exports (`export async function Hero` — most are async to read the locale). Shared SVG icons in `components/Icons.tsx`. Components import siblings relatively (`../Section/Section`) and everything else via the `@/*` alias (`@/content/...`, `@/lib/...`).
- `src/lib/` — helpers: `format.ts` (localized dates, `isPlaceholder`), `github.ts`, `assets.ts` (`publicFileExists`, `firstPublicFile`), `navigation.ts` (section ids), `theme.ts`.

## Conventions and patterns

- **Server components by default.** Only `ThemeToggle`, `MobileMenu` and `LanguageSwitcher` are `"use client"`. `lib/github.ts` and `lib/assets.ts` import `server-only` — never use them from client components.
- **Sections:** every page section wraps its content in `<Section id=...>`. Section ids live in `lib/navigation.ts` (`sectionIds`) and their labels in the dictionaries (`nav`); adding a section means adding the id there, a label in both dictionaries, creating the component, and placing it in `app/[lang]/page.tsx`.
- **Placeholders:** `isPlaceholder()` (any value containing `TODO`) is used to hide links/data that aren't filled in yet. Respect this when rendering new content fields.
- **Missing images:** `publicFileExists()` checks `/public` at render time. `ImageSlot` shows a placeholder with the expected path when an image is missing; the CV buttons are simply omitted. The CV is per language (`profile.cvUrl.en/es`) and falls back to the English file via `firstPublicFile()`. Project/product screenshots are 16:10.
- **Styling:** components use only the CSS variables from `globals.css` (colors, fonts, `--text-*`, `--space-*`, radii, layout) — never hardcode colors or fonts. Dark theme overrides live under `:root[data-theme="dark"]`. The hero always sits on the petrol-blue background in both themes (`--hero-*` tokens). The OG image is the one exception with inline hex colors (it can't use CSS vars).
- **Theme:** `themeInitScript` in `<head>` sets `data-theme` before paint (saved value in `localStorage["theme"]` or system preference), hence `suppressHydrationWarning` on `<html>`. `ThemeToggle` reads it via `useSyncExternalStore` + `MutationObserver`; icons switch via CSS, not state.
- **GitHub data:** `getRepoStats()` fetches stars / last push / language per `projects.ts` repo, revalidated every 6h, 5s timeout, returns `null` on any failure so cards render without stats. `Projects` is an async server component.
- **Header width:** the desktop nav switches to the mobile menu below `66rem` (Spanish labels need ~1020px); the header CV button hides below `30rem`. Re-measure if you add header items.
- **Accessibility:** skip link to `#content`, sections labelled via `aria-labelledby`, decorative SVGs `aria-hidden`. Keep this up.

## Environment

See `.env.example`:
- `NEXT_PUBLIC_SITE_URL` — used for `metadataBase` / Open Graph.
- `GITHUB_TOKEN` (optional) — avoids the 60 req/h unauthenticated GitHub API limit.

Remote images are only allowed from `avatars.githubusercontent.com` (`next.config.ts`).
