# Portfolio

Personal portfolio built with Next.js 16 (App Router), React 19, TypeScript and CSS Modules. Available in English and Spanish.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional
npm run dev
```

Open http://localhost:3000.

## Where everything lives

```
src/
├── app/[lang]/               One prerendered page per language (/en, /es)
│   ├── layout.tsx            Metadata, fonts and theme script
│   ├── page.tsx              Section order
│   ├── globals.css           Design tokens (colors, typography, spacing)
│   ├── opengraph-image.tsx   Image shown when the link is shared
│   └── icon.svg              Favicon
├── proxy.ts                  Serves /en or /es at "/" based on the language cookie
├── i18n/
│   ├── dictionaries.ts       Interface strings (buttons, labels, menu) in both languages
│   ├── config.ts             Supported languages and the cookie name
│   ├── localize.ts           The Localized type for content
│   └── server.ts             getI18n() for server components
├── content/                  ← Your content, in both languages
│   ├── profile.ts            Name, headline, summary, socials, CV
│   ├── experience.ts
│   ├── skills.ts
│   ├── projects.ts           GitHub repos
│   ├── products.ts           Deployed apps
│   └── types.ts
├── components/               One component per folder, with its .module.css
└── lib/                      Date formatting, GitHub, assets, theme
```

## Content

All text comes from `src/content/`. Anything a visitor reads is written once per language:

```ts
tagline: {
  en: "Turn a free-text CrossFit workout into a clear, editable card.",
  es: "Convierte un entrenamiento de CrossFit en texto libre en una tarjeta clara y editable.",
},
```

Names, URLs, dates and tech stacks are the same in both languages and stay plain strings. In `skills.ts`, an item can be either: `"React"` or `{ en: "Accessibility", es: "Accesibilidad" }`. TypeScript will warn you if a translation or a required field is missing.

Interface text (buttons, menu, section titles, labels) lives in `src/i18n/dictionaries.ts`.

Files for `public/`:

| File | Use | Format |
| --- | --- | --- |
| `Diego_Gonzalo_Sanchez_CV.pdf` | "Download CV" (English) | PDF |
| `Diego_Gonzalo_Sanchez_CV_ES.pdf` | "Descargar CV" (Spanish) | PDF |
| `projects/*.png` | Project screenshots | 16:10, e.g. 1600×1000 |
| `products/*.png` | Product screenshots | 16:10, e.g. 1600×1000 |

While an image doesn't exist, a placeholder showing the expected path is displayed; the CV button simply doesn't appear. Until the Spanish CV exists, the Spanish page offers the English one.

## Languages

The site is built twice, once in English and once in Spanish. A small proxy picks which copy to send for `/`, so the language never appears in the URL.

### 1. `[lang]` builds one page per language

`src/app/[lang]/` is a dynamic segment: one set of files that serves several URLs. The layout lists the languages to build:

```ts
// src/app/[lang]/layout.tsx
export function generateStaticParams() {
  return locales.map((lang) => ({ lang })); // → /en and /es
}
export const dynamicParams = false; // any other value, e.g. /fr, is a 404
```

At build time Next renders the page once per language and saves two static HTML files, `/en` and `/es`. Both are served instantly, and both still refresh their GitHub stats every 6 hours.

### 2. Components read the language without passing it around

Because `[lang]` sits above the root layout, any server component can read it with `next/root-params`. `src/i18n/server.ts` wraps that in `getI18n()`:

```ts
const { locale, dict, t } = await getI18n();

<h3>{t(job.role)}</h3>           // content: picks role.en or role.es
<dt>{dict.products.problem}</dt> // interface text: "Problem" / "Problema"
```

There are two kinds of text:

- **Interface strings** (buttons, menu, labels) live in `src/i18n/dictionaries.ts`. Both languages must define every key, or typecheck fails.
- **Content** in `src/content/*.ts` is written as `{ en: "…", es: "…" }` (the `Localized` type). Things that don't change by language, like names, URLs, dates and tech stacks, stay plain strings, and `t()` returns them as they are.

Client components (theme toggle, mobile menu, language switcher) can't call `getI18n()`, because it only runs on the server. `Header` passes them their translated labels as props.

### 3. The proxy keeps the language out of the URL

`src/proxy.ts` (Next 16's name for middleware) runs before the page and decides which copy to serve:

```
Request for "/"
  └─ read the "lang" cookie
       ├─ none or "en" → rewrite to /en  (English HTML)
       └─ "es"         → rewrite to /es  (Spanish HTML)
  The address bar still shows "/"
```

A **rewrite** is internal: the server swaps which page it returns, and the browser never sees a different URL. Typing `/en` or `/es` directly does a **redirect** instead: it saves that language in the cookie and sends the browser back to `/`.

The proxy only runs for exactly `/`, `/en` and `/es`. Everything else passes straight through, including the share image (`/en/opengraph-image`), the favicon (`/-/icon.svg`), scripts and images.

### 4. The EN/ES switch sets the cookie and reloads

```ts
// src/components/LanguageSwitcher/LanguageSwitcher.tsx
document.cookie = "lang=es; path=/; max-age=31536000; samesite=lax";
window.location.reload();
```

On reload the proxy sees the cookie and serves the other page. The `#section` in the URL is kept, so the visitor stays where they were, and the choice is remembered for a year.

### Trade-offs

| Goal | How it's met |
| --- | --- |
| No language in the URL | Proxy rewrite plus a cookie |
| Fast, no flash of the wrong language | Both pages are prebuilt; the server sends the right one directly |
| Free | Plain Next.js features, no i18n library or translation service |
| No missing translations | TypeScript requires both `en` and `es` |

The cost: since the URL never says "Spanish", search engines and link previews (LinkedIn, Slack…) only ever see English. To send someone the Spanish version, share `…/es`. It opens the site in Spanish and also saves Spanish as their preference.

### Adding or changing text

- **New interface text:** add the key to the `Dictionary` type and to both `en` and `es` in `src/i18n/dictionaries.ts`.
- **New content field a visitor reads:** type it as `Localized` in `src/content/types.ts`, then render it with `t(...)`.
- **New section:** add its id to `src/lib/navigation.ts` and its menu label to `nav` in both dictionaries.

## Light / dark theme

Colors live in `src/app/[lang]/globals.css` as CSS variables, with the dark theme values under `:root[data-theme="dark"]`. Components only use those variables. A script in `<head>` applies the saved theme (or the system one) before paint, so there's no flicker.

## GitHub

`src/lib/github.ts` fetches stars and last push for each repo in `projects.ts` and revalidates every 6 hours. It works without a token; setting `GITHUB_TOKEN` in `.env.local` (or on Vercel) avoids the 60 requests/hour limit.

## Deployment

Import the repo into Vercel and add `NEXT_PUBLIC_SITE_URL` with your domain.
