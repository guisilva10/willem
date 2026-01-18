"use client";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { useEffect, useRef } from "react";
import { PropsWithChildren } from "react";

export default function SmoothScroll({ children }: PropsWithChildren) {
  const lenisRef = useRef<LenisRef>(null);

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
      options={{ lerp: 0.1, duration: 3, smoothWheel: true }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
