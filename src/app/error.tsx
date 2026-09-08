"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FlagrrIcon } from "@/components/Logo";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
        Error
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
        Something went wrong.
      </h1>
      <p style={{ margin: 0, maxWidth: 420, fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: "rgba(246,245,240,.7)" }}>
        That&apos;s on us, not you — give it another try, or head back to the homepage.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, marginTop: 8 }}>
        <button
          type="button"
          onClick={() => retry()}
          style={{
            padding: "13px 24px",
            borderRadius: 999,
            border: "none",
            background: "#CDDE5C",
            color: "#12271F",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Try again
        </button>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "13px 24px",
            borderRadius: 999,
            border: "1px solid rgba(246,245,240,.28)",
            color: "#F6F5F0",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Back to Flagrr
        </Link>
      </div>
    </div>
  );
}
