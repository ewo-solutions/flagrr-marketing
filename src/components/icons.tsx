import type { CSSProperties } from "react";

export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: CSSProperties;
  className?: string;
}

const strokeProps = (p: IconProps) => ({
  viewBox: "0 0 24 24",
  width: p.size ?? 20,
  height: p.size ?? 20,
  fill: "none" as const,
  stroke: p.color ?? "currentColor",
  strokeWidth: p.strokeWidth ?? 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  style: p.style,
  className: p.className,
});

/** Tab bar / UI icons, matching the member app's Ionicons set. */
export function IconHomeOutline(p: IconProps) {
  return (
    <svg {...strokeProps(p)}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  );
}

export function IconGiftOutline(p: IconProps) {
  return (
    <svg {...strokeProps(p)}>
      <rect x="3" y="8" width="18" height="13" rx="1.5" />
      <path d="M3 12h18M12 8v13" />
      <path d="M12 8s-1-4-3.5-4-2.5 4 3.5 4Zm0 0s1-4 3.5-4 2.5 4-3.5 4Z" />
    </svg>
  );
}

export function IconScanOutline(p: IconProps) {
  return (
    <svg {...strokeProps(p)}>
      <path d="M3 7V4h3M21 7V4h-3M3 17v3h3M21 17v3h-3M3 12h18" />
    </svg>
  );
}

export function IconTimeOutline(p: IconProps) {
  return (
    <svg {...strokeProps(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.5l3.5 2" />
    </svg>
  );
}

export function IconPersonOutline(p: IconProps) {
  return (
    <svg {...strokeProps(p)}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
    </svg>
  );
}

export function IconChevronBack(p: IconProps) {
  return (
    <svg {...strokeProps(p)} strokeWidth={p.strokeWidth ?? 2}>
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export function IconFlashOff(p: IconProps) {
  return (
    <svg {...strokeProps(p)}>
      <path d="M13 2 4.5 13H11l-1 9 5.5-7.5" />
      <path d="M3 3l18 18" />
    </svg>
  );
}

export function IconGallery(p: IconProps) {
  return (
    <svg {...strokeProps(p)}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 15 3-3 3 3 2-2 2 2" />
    </svg>
  );
}

export function IconScanCorners(p: IconProps) {
  return (
    <svg {...strokeProps(p)} strokeWidth={p.strokeWidth ?? 2}>
      <path d="M3 7V4h3M21 7V4h-3M3 17v3h3M21 17v3h-3M3 12h18" />
    </svg>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <svg {...strokeProps(p)} strokeWidth={p.strokeWidth ?? 2.4}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconFlame(p: IconProps) {
  return (
    <svg {...strokeProps(p)}>
      <path d="M12 3s5 4.5 5 9a5 5 0 0 1-10 0c0-1.8 1-3.4 2-4.6.4 1.6 1.4 2.6 2.4 2.6 1.2 0 2-1 1.6-2.6C12.6 5.9 12 4.4 12 3Z" />
    </svg>
  );
}

export function IconBell(p: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={p.size ?? 20}
      height={p.size ?? 20}
      fill={p.color ?? "currentColor"}
      style={p.style}
      className={p.className}
    >
      <path d="M12 2.5a6 6 0 0 0-6 6v3.2l-1.6 3.1A1 1 0 0 0 5.3 16h13.4a1 1 0 0 0 .9-1.2L18 11.7V8.5a6 6 0 0 0-6-6Z" />
      <path d="M9.6 17.4a2.5 2.5 0 0 0 4.8 0Z" />
    </svg>
  );
}

export function IconArrowRight(p: IconProps) {
  return (
    <svg {...strokeProps(p)} strokeWidth={p.strokeWidth ?? 2}>
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

/** Reward-category icons (48x48 viewBox), matching the redemption catalogue. */
export type RewardIconKind = "flag" | "bag" | "glass" | "cart" | "range" | "coach";

const rewardPaths: Record<RewardIconKind, string[]> = {
  flag: ["M14 42V8", "M14 10h20l-4 6 4 6H14"],
  bag: ["M12 17h24l-2 23H14L12 17Z", "M19 17v-4a5 5 0 0 1 10 0v4"],
  glass: ["M14 10h20l-2 12a8 8 0 0 1-16 0L14 10Z", "M24 30v10", "M17 40h14"],
  cart: [
    "M8 30h20l6-12h6",
    "M8 30V18h10",
    "M14 36a3 3 0 1 0 0.01 0Z",
    "M30 36a3 3 0 1 0 0.01 0Z",
  ],
  range: ["M10 40h28", "M24 40V16", "M24 16l12 6-12 6", "M16 40a8 8 0 0 1 16 0"],
  coach: ["M24 14a5 5 0 1 0 0.01 0Z", "M14 40c0-6 4.5-10 10-10s10 4 10 10", "M34 22l6-4"],
};

export function RewardIcon({
  kind,
  size = 44,
  color = "#CDDE5C",
  strokeWidth = 1.6,
  style,
  className,
}: {
  kind: RewardIconKind;
} & IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      className={className}
    >
      {rewardPaths[kind].map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
