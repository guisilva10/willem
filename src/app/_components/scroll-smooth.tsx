"use client";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { PropsWithChildren } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

let reducedMotionQuery: MediaQueryList | null = null;

function getReducedMotionQuery() {
  if (typeof window === "undefined") return null;
  if (!reducedMotionQuery) {
    reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  }
  return reducedMotionQuery;
}

function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = getReducedMotionQuery();
  mediaQuery?.addEventListener("change", callback);
  return () => mediaQuery?.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return getReducedMotionQuery()?.matches ?? false;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

export default function SmoothScroll({ children }: PropsWithChildren) {
  const lenisRef = useRef<LenisRef>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, duration: 3, smoothWheel: !prefersReducedMotion }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
