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

The language is never in the URL. Both versions are prerendered as `/en` and `/es`, and `src/proxy.ts` serves one of them at `/` based on a `lang` cookie (English by default). The EN/ES switch in the header sets that cookie and reloads, keeping the current section. Visiting `/es` or `/en` directly saves the choice and redirects to `/`.

Search engines and link previews always see the English version.

## Light / dark theme

Colors live in `src/app/[lang]/globals.css` as CSS variables, with the dark theme values under `:root[data-theme="dark"]`. Components only use those variables. A script in `<head>` applies the saved theme (or the system one) before paint, so there's no flicker.

## GitHub

`src/lib/github.ts` fetches stars and last push for each repo in `projects.ts` and revalidates every 6 hours. It works without a token; setting `GITHUB_TOKEN` in `.env.local` (or on Vercel) avoids the 60 requests/hour limit.

## Deployment

Import the repo into Vercel and add `NEXT_PUBLIC_SITE_URL` with your domain.
