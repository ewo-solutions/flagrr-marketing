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
  const contentScale = innerW / NATIVE_W;

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
            top: 0,
            left: 0,
            width: NATIVE_W,
            height: NATIVE_H,
            transformOrigin: "top left",
            transform: `scale(${contentScale})`,
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
