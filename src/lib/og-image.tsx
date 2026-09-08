import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogImageAlt = "Flagrr — The round pays you back.";
export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

const LOGO_RATIO = 700 / 363;
const logoWidth = 480;
const logoHeight = Math.round(logoWidth / LOGO_RATIO);

/** Shared social share image, reused by opengraph-image.tsx and twitter-image.tsx. */
export async function renderOgImage() {
  const logoData = await readFile(join(process.cwd(), "public/logos/flagrrlogolime.png"), "base64");
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          background: "#12271F",
        }}
      >
        {/* ImageResponse renders via satori, not the DOM — next/image and alt text don't apply here. */}
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img src={logoSrc} width={logoWidth} height={logoHeight} />
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 600,
            color: "#F6F5F0",
            letterSpacing: "-0.01em",
          }}
        >
          The round pays you back.
        </div>
      </div>
    ),
    { ...ogImageSize },
  );
}
