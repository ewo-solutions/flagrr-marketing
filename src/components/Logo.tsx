import Image from "next/image";

export type LogoColor = "white" | "lime" | "clubgreen" | "darkgreen";

const ICON_RATIO = 700 / 597;
const LOGO_RATIO = 700 / 363;

/** Flagrr icon mark (compact "Fl" monogram), at native aspect ratio. */
export function FlagrrIcon({ color, height, style, className }: { color: LogoColor; height: number; style?: React.CSSProperties; className?: string }) {
  return (
    <Image
      src={`/logos/flagrricon${color}.png`}
      alt="Flagrr"
      height={Math.round(height)}
      width={Math.round(height * ICON_RATIO)}
      style={{ height, width: "auto", display: "block", ...style }}
      className={className}
    />
  );
}

/** Full Flagrr wordmark + "Loyalty" lockup, at native aspect ratio. */
export function FlagrrLogo({ color, height, alt = "Flagrr Loyalty", style, className, priority }: { color: LogoColor; height: number; alt?: string; style?: React.CSSProperties; className?: string; priority?: boolean }) {
  return (
    <Image
      src={`/logos/flagrrlogo${color}.png`}
      alt={alt}
      height={Math.round(height)}
      width={Math.round(height * LOGO_RATIO)}
      style={{ height, width: "auto", display: "block", ...style }}
      className={className}
      priority={priority}
    />
  );
}
