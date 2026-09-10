"use client";

import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "intro", label: "Início" },
  { id: "journey", label: "Jornada" },
  { id: "projects", label: "Projetos" },
  { id: "agent-kit", label: "Agent-kit" },
  { id: "tools", label: "Ferramentas" },
  { id: "connect", label: "Conexão" },
] as const;

type SectionNavProps = {
  activeSection: string;
};

export function SectionNav({ activeSection }: SectionNavProps) {
  return (
    <nav
      className="fixed left-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block"
      aria-label="Navegação de seções"
    >
      <ul className="flex flex-col gap-2">
        {SECTIONS.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <li key={id} className="group relative">
              <button
                type="button"
                onClick={() =>
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
                }
                aria-label={`Ir para ${label}`}
                aria-current={isActive ? "true" : undefined}
                className="flex items-center p-2 rounded-md
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span
                  className={cn(
                    "w-2 h-8 rounded-full transition-all duration-500",
                    isActive
                      ? "bg-foreground"
                      : "bg-muted-foreground/30 group-hover:bg-muted-foreground/60",
                  )}
                />
              </button>
              <span
                className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3
                           px-2 py-1 text-xs whitespace-nowrap text-muted-foreground border border-border rounded-md bg-background
                           opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
                           group-focus-within:opacity-100 group-focus-within:translate-x-0
                           transition-all duration-200 motion-reduce:transition-none"
              >
                {label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
