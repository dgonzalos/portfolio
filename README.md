# Portfolio

Personal portfolio built with Next.js 16 (App Router), React 19, TypeScript and CSS Modules.

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
├── app/
│   ├── layout.tsx            Metadata, fonts and theme script
│   ├── page.tsx              Section order
│   ├── globals.css           Design tokens (colors, typography, spacing)
│   ├── opengraph-image.tsx   Image shown when the link is shared
│   └── icon.svg              Favicon
├── content/                  ← Your content. Fill in the TODOs
│   ├── profile.ts            Name, headline, summary, socials
│   ├── experience.ts
│   ├── skills.ts
│   ├── projects.ts           GitHub repos
│   ├── products.ts           Deployed apps
│   └── types.ts
├── components/               One component per folder, with its .module.css
└── lib/                      Date formatting, GitHub, theme
```

## Content

All text comes from `src/content/`. Search for `TODO` and replace it. TypeScript will warn you if a required field is missing.

Files for `public/`:

| File | Use | Format |
| --- | --- | --- |
| `avatar.jpg` | Hero photo | Square, min. 400×400 |
| `cv-diego.pdf` | "Download CV" button | PDF |
| `projects/*.png` | Project screenshots | 16:10, e.g. 1600×1000 |
| `products/*.png` | Product screenshots | 16:10, e.g. 1600×1000 |

While an image doesn't exist, a placeholder showing the expected path is displayed; the photo and the CV button simply don't appear.

## Light / dark theme

Colors live in `src/app/globals.css` as CSS variables, with the dark theme values under `:root[data-theme="dark"]`. Components only use those variables. A script in `<head>` applies the saved theme (or the system one) before paint, so there's no flicker.

## GitHub

`src/lib/github.ts` fetches stars and last push for each repo in `projects.ts` and revalidates every 6 hours. It works without a token; setting `GITHUB_TOKEN` in `.env.local` (or on Vercel) avoids the 60 requests/hour limit.

## Deployment

Import the repo into Vercel and add `NEXT_PUBLIC_SITE_URL` with your domain.
