import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque/standard.css";
import "@fontsource-variable/figtree";
import "./globals.css";

import { profile } from "@/content/profile";
import { locales, ogLocale } from "@/i18n/config";
import { getI18n } from "@/i18n/server";
import { themeInitScript } from "@/lib/theme";

// Both languages are prerendered. src/proxy.ts serves one of them at "/" based on a cookie.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

/**
 * Absolute base for metadata URLs (og:image, og:url…). Social networks can't read
 * relative or localhost URLs, so the order is:
 * 1. NEXT_PUBLIC_SITE_URL, if set (e.g. a custom domain).
 * 2. The production domain Vercel exposes on every build.
 * 3. localhost for local development.
 */
function siteUrl(): URL {
  if (process.env.NEXT_PUBLIC_SITE_URL) return new URL(process.env.NEXT_PUBLIC_SITE_URL);
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }
  return new URL("http://localhost:3000");
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  const title = `${profile.name} | ${t(profile.headline)}`;
  const description = t(profile.summary);

  return {
    metadataBase: siteUrl(),
    title,
    description,
    authors: [{ name: profile.name }],
    openGraph: {
      type: "website",
      // The language lives in a cookie, not the URL: "/" is the only public address.
      url: "/",
      locale: ogLocale[locale],
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b4f5c" },
    { media: "(prefers-color-scheme: dark)", color: "#0a2e35" },
  ],
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const { locale } = await getI18n();

  return (
    // suppressHydrationWarning: the theme script sets data-theme before hydration
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
