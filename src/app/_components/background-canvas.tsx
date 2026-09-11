"use client";

import dynamic from "next/dynamic";

const MoltenMetal = dynamic(
  () => import("@/app/_components/molten-metal").then((m) => m.MoltenMetal),
  { ssr: false },
);

const PALETTE = {
  color1: "#141414",
  color2: "#3d3d3d",
  color3: "#7a7a7a",
  background: "#0a0a0a",
} as const;

const BACKGROUND_OPACITY = 0.5;

export function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <MoltenMetal
        color1={PALETTE.color1}
        color2={PALETTE.color2}
        color3={PALETTE.color3}
        backgroundColor={PALETTE.background}
        colorMode="molten"
        speed={0.25}
        scale={4}
        detail={3}
        glow={1.4}
        coreSize={0.1}
        swirl={1}
        fold={-0.2}
        blackPoint={0.05}
        brightness={1.2}
        grain
        grainIntensity={0.04}
        mouseInteraction
        mouseStrength={0.25}
        opacity={BACKGROUND_OPACITY}
      />
    </div>
  );
}
