import type { Metadata } from "next";
import Link from "next/link";
import { FlagrrIcon } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 22,
        padding: 40,
        background: "#12271F",
        color: "#F6F5F0",
        textAlign: "center",
      }}
    >
      <FlagrrIcon color="lime" height={34} style={{ opacity: 0.9 }} />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: ".2em",
          color: "rgba(246,245,240,.5)",
          textTransform: "uppercase",
        }}
      >
        404
      </span>
      <h1
        style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(28px,5vw,44px)",
          letterSpacing: "-.02em",
        }}
      >
        Lost your way to the clubhouse.
      </h1>
      <p style={{ margin: 0, maxWidth: 420, fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: "rgba(246,245,240,.7)" }}>
        That page doesn&apos;t exist, or it&apos;s moved.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "13px 24px",
          borderRadius: 999,
          background: "#CDDE5C",
          color: "#12271F",
          fontSize: 14,
          fontWeight: 600,
          marginTop: 8,
        }}
      >
        Back to Flagrr
      </Link>
    </div>
  );
}
