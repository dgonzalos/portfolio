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

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  const title = `${profile.name} | ${t(profile.headline)}`;
  const description = t(profile.summary);

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    title,
    description,
    authors: [{ name: profile.name }],
    openGraph: {
      type: "website",
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
