import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

// Imagen que aparece al compartir el enlace en LinkedIn, X, Slack…
export const alt = `${profile.name}, ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
        <div style={{ fontSize: 40, marginTop: 28, color: "#bfe3da" }}>{profile.headline}</div>
      </div>
    ),
    size,
  );
}
