import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { defaultLocale, isLocale } from "@/i18n/config";
import { localize } from "@/i18n/localize";

// Image shown when the link is shared on LinkedIn, X, Slack…
export const alt = `${profile.name}, ${profile.headline.en}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const headline = localize(profile.headline, isLocale(lang) ? lang : defaultLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          background: "#0b4f5c",
          color: "#ffffff",
        }}
      >
        <div style={{ width: 96, height: 8, background: "#5ee0a8", marginBottom: 40 }} />
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 40, marginTop: 28, color: "#bfe3da" }}>{headline}</div>
      </div>
    ),
    size,
  );
}
