# CLAUDE.md

Personal portfolio site: a single page built with Next.js 16 (App Router), React 19, TypeScript (strict) and CSS Modules. Deployed on Vercel.

## Commands

```bash
npm run dev        # dev server at http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit — run after every change
```

There is no linter, formatter or test suite configured. `typecheck` + `build` are the verification steps.

## Language

Everything is in **English**: code comments, docs, user-facing copy, content and section ids/anchors (`lang="en"`, `en-US` locale for dates in `lib/format.ts`). Keep new text in English.

## Structure

- `src/app/` — `layout.tsx` (metadata, fonts, theme init script), `page.tsx` (section order), `globals.css` (design tokens), `opengraph-image.tsx`, `icon.svg`.
- `src/content/` — **all site content** as typed TS data (`profile`, `experience`, `skills`, `projects`, `products`). Types live in `types.ts`. Components never hardcode content.
- `src/components/<Name>/<Name>.tsx` + `<Name>.module.css` — one folder per component, named exports (`export function Hero`). Shared SVG icons in `components/Icons.tsx`. Components import siblings relatively (`../Section/Section`) and everything else via the `@/*` alias (`@/content/...`, `@/lib/...`).
- `src/lib/` — helpers: `format.ts` (dates, `isPlaceholder`), `github.ts`, `assets.ts`, `navigation.ts`, `theme.ts`.

## Conventions and patterns

- **Server components by default.** Only `ThemeToggle` and `MobileMenu` are `"use client"`. `lib/github.ts` and `lib/assets.ts` import `server-only` — never use them from client components.
- **Sections:** every page section wraps its content in `<Section id=...>`. Section ids and nav labels are defined once in `lib/navigation.ts` (`sections`); adding a section means adding it there, creating the component, and placing it in `app/page.tsx`.
- **Placeholders:** content still contains `TODO` values. `isPlaceholder()` (any value containing `TODO`) is used to hide links/data that aren't filled in yet. Respect this when rendering new content fields.
- **Missing images:** `publicFileExists()` checks `/public` at render time. `ImageSlot` shows a placeholder with the expected path when an image is missing; the avatar and CV button are simply omitted. Project/product screenshots are 16:10.
- **Styling:** components use only the CSS variables from `globals.css` (colors, fonts, `--text-*`, `--space-*`, radii, layout) — never hardcode colors or fonts. Dark theme overrides live under `:root[data-theme="dark"]`. The hero always sits on the petrol-blue background in both themes (`--hero-*` tokens). The OG image is the one exception with inline hex colors (it can't use CSS vars).
- **Theme:** `themeInitScript` in `<head>` sets `data-theme` before paint (saved value in `localStorage["theme"]` or system preference), hence `suppressHydrationWarning` on `<html>`. `ThemeToggle` reads it via `useSyncExternalStore` + `MutationObserver`; icons switch via CSS, not state.
- **GitHub data:** `getRepoStats()` fetches stars / last push / language per `projects.ts` repo, revalidated every 6h, 5s timeout, returns `null` on any failure so cards render without stats. `Projects` is an async server component.
- **Accessibility:** skip link to `#contenido`, sections labelled via `aria-labelledby`, decorative SVGs `aria-hidden`. Keep this up.

## Environment

See `.env.example`:
- `NEXT_PUBLIC_SITE_URL` — used for `metadataBase` / Open Graph.
- `GITHUB_TOKEN` (optional) — avoids the 60 req/h unauthenticated GitHub API limit.

Remote images are only allowed from `avatars.githubusercontent.com` (`next.config.ts`).
