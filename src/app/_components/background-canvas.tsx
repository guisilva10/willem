"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

const MoltenMetal = dynamic(
  () => import("@/app/_components/molten-metal").then((m) => m.MoltenMetal),
  { ssr: false },
);

const PALETTE = {
  dark: { color1: "#141414", color2: "#3d3d3d", color3: "#7a7a7a", background: "#0a0a0a" },
  light: { color1: "#e8e8e8", color2: "#c2c2c2", color3: "#8f8f8f", background: "#ffffff" },
} as const;

const BACKGROUND_OPACITY = 0.5;

export function BackgroundCanvas() {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";
  const palette = isLight ? PALETTE.light : PALETTE.dark;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <MoltenMetal
        color1={palette.color1}
        color2={palette.color2}
        color3={palette.color3}
        backgroundColor={palette.background}
        lightMode={isLight}
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
