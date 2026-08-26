import type { CSSProperties, ReactNode } from "react";

const NATIVE_W = 393;
const NATIVE_H = 852;

/**
 * Device bezel (gradient case + notch) that hosts a `PhoneScreen` (or any
 * 393x852 content) scaled to fit. Sizing keeps the 393:852 screen aspect
 * ratio so the content fills the case cleanly at any target width.
 */
export default function PhoneFrame({
  width,
  tilt = 0,
  rotateX = 0,
  scale = 1,
  className,
  style,
  children,
}: {
  width: number;
  tilt?: number;
  rotateX?: number;
  scale?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const height = Math.round((width * NATIVE_H) / NATIVE_W);
  const pad = Math.round(width * (12 / 330));
  const outerRadius = width * (52 / 330);
  const innerRadius = width * (42 / 330);
  const innerW = width - pad * 2;
  const innerH = height - pad * 2;
  // Scale to cover the full bezel opening (not just match its width) — the
  // opening's aspect ratio isn't exactly the native 393:852 screen ratio, so
  // a width-only scale left a gap at the bottom. Covering and centering
  // crops a sliver off the sides instead, which reads as a filled screen.
  const contentScale = Math.max(innerW / NATIVE_W, innerH / NATIVE_H);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width,
        height,
        flex: "none",
        borderRadius: outerRadius,
        background: "linear-gradient(160deg,#2C4C3E,#0E211A)",
        padding: pad,
        boxShadow: "0 60px 120px -30px rgba(0,0,0,.75), 0 0 0 1px rgba(246,245,240,.14)",
        transformOrigin: "center center",
        transform: `scale(${scale}) rotateY(${tilt}deg) rotateX(${rotateX}deg)`,
        transformStyle: "preserve-3d",
        transition: "transform .5s ease",
        ...style,
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: innerRadius, background: "#0B1A14", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: NATIVE_W,
            height: NATIVE_H,
            transformOrigin: "center center",
            transform: `translate(-50%, -50%) scale(${contentScale})`,
          }}
        >
          {children}
        </div>
        <div
          style={{
            position: "absolute",
            top: pad * 0.16,
            left: "50%",
            transform: "translateX(-50%)",
            width: width * (104 / 330),
            height: width * (26 / 330),
            borderRadius: 999,
            background: "#0B1A14",
            zIndex: 9,
          }}
        />
      </div>
    </div>
  );
}
