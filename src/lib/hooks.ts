"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export interface ScrollState {
  y: number;
  h: number;
  doc: number;
}

/**
 * Throttled scroll position + viewport/document metrics, mirroring the
 * design reference. Throttled via `setTimeout` rather than
 * `requestAnimationFrame`: rAF is paused by browsers for backgrounded/
 * non-composited tabs (and in some headless/CI contexts never fires at
 * all), which would silently freeze every scroll-linked section.
 */
export function useScrollState(): ScrollState {
  const [state, setState] = useState<ScrollState>({ y: 0, h: 1, doc: 1 });
  const pending = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const read = () => ({
      y: window.scrollY || 0,
      h: window.innerHeight || 1,
      doc: Math.max(1, (document.documentElement.scrollHeight || 1) - (window.innerHeight || 0)),
    });
    const onScroll = () => {
      if (pending.current) return;
      pending.current = setTimeout(() => {
        pending.current = null;
        setState(read());
      }, 16);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (pending.current) {
        clearTimeout(pending.current);
        pending.current = null;
      }
    };
  }, []);

  return state;
}

/** Progress (0-1) of a tall tracked section as it scrolls through the sticky viewport. */
export function sectionProgress(el: HTMLElement | null, viewportH: number): number {
  if (!el) return 0;
  const r = el.getBoundingClientRect();
  const total = r.height - viewportH;
  if (total <= 0) return 0;
  return Math.min(1, Math.max(0, -r.top / total));
}

export function useSectionProgressRef(
  ref: RefObject<HTMLElement | null>,
  scroll: ScrollState
): number {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(sectionProgress(ref.current, scroll.h));
  }, [ref, scroll]);
  return progress;
}

/**
 * True when scroll-driven sticky sequences should degrade to a plain stacked
 * layout: reduced-motion preference, or a small/coarse-pointer viewport.
 */
export function useCompactMotion(): boolean {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    const narrow = window.matchMedia("(max-width: 900px)");
    const update = () => setCompact(reduce.matches || coarse.matches || narrow.matches);
    update();
    reduce.addEventListener("change", update);
    coarse.addEventListener("change", update);
    narrow.addEventListener("change", update);
    return () => {
      reduce.removeEventListener("change", update);
      coarse.removeEventListener("change", update);
      narrow.removeEventListener("change", update);
    };
  }, []);

  return compact;
}

/** Fires `cb` once when the element scrolls into view, for data-reveal fade/rise. */
export function useReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
}
