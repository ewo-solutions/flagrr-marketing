"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { useReveal } from "@/lib/hooks";

export default function Reveal({
  children,
  as: As = "div",
  delay = 0,
  className,
  style,
}: {
  children: ReactNode;
  as?: ElementType;
  /** Stagger index (0-3), matching the reference's `i % 4` cadence. */
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLElement | null>(null);
  useReveal(ref);
  const ms = Math.min(delay, 3) * 70;

  return (
    <As
      ref={ref}
      data-reveal="1"
      className={className}
      style={{
        transitionDelay: `${ms}ms`,
        ...style,
      }}
    >
      {children}
    </As>
  );
}
