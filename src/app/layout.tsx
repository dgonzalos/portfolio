import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque/standard.css";
import "@fontsource-variable/figtree";
import "./globals.css";

import { profile } from "@/content/profile";
import { themeInitScript } from "@/lib/theme";

const title = `${profile.name} | ${profile.headline}`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description: profile.summary,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    title,
    description: profile.summary,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.summary,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b4f5c" },
    { media: "(prefers-color-scheme: dark)", color: "#0a2e35" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the theme script sets data-theme before hydration
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
