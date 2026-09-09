"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor, type LucideIcon } from "lucide-react";

const ORDER = ["light", "dark", "system"] as const;
type ThemeOption = (typeof ORDER)[number];

const ICON: Record<ThemeOption, LucideIcon> = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

const LABEL: Record<ThemeOption, string> = {
  light: "Tema claro",
  dark: "Tema escuro",
  system: "Tema do sistema",
};

function subscribeToMounted() {
  return () => {};
}

function getMountedSnapshot() {
  return true;
}

function getMountedServerSnapshot() {
  return false;
}

function useMounted() {
  return useSyncExternalStore(subscribeToMounted, getMountedSnapshot, getMountedServerSnapshot);
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return <div className="size-11" aria-hidden="true" />;
  }

  const current = (theme as ThemeOption | undefined) ?? "system";
  const Icon = ICON[current];

  return (
    <button
      type="button"
      onClick={() => setTheme(ORDER[(ORDER.indexOf(current) + 1) % ORDER.length])}
      className="group size-11 grid place-items-center rounded-lg border border-border hover:border-muted-foreground/50
                 transition-colors duration-300
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={`Alternar tema (atual: ${LABEL[current]})`}
    >
      <Icon
        className="size-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
        aria-hidden="true"
      />
    </button>
  );
}
