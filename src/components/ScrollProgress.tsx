"use client";

import { useScrollState } from "@/lib/hooks";

export default function ScrollProgress() {
  const { y, doc } = useScrollState();
  const progress = Math.min(1, y / doc);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 120, background: "rgba(246,245,240,.08)" }}>
      <div
        style={{
          height: "100%",
          background: "linear-gradient(90deg,#00805A,#CDDE5C)",
          transformOrigin: "left center",
          transform: `scaleX(${progress})`,
        }}
      />
    </div>
  );
}
