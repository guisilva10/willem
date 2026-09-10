"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { ProjectCard } from "@/app/_components/project-card";
import type { Project } from "@/app/_content/projects";

type ProjectCarouselProps = {
  projects: Project[];
};

function getScrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const update = () => {
      const { scrollLeft, clientWidth, scrollWidth } = scroller;
      setIsAtStart(scrollLeft <= 1);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);

      const cards = cardsRef.current;
      const baseOffset = scroller.offsetLeft;
      let closestIndex = 0;
      let closestDistance = Infinity;
      cards.forEach((card, index) => {
        if (!card) return;
        const distance = Math.abs(card.offsetLeft - baseOffset - scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      setActive((current) => (current === closestIndex ? current : closestIndex));
    };

    update();
    scroller.addEventListener("scroll", update, { passive: true });

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(scroller);

    return () => {
      scroller.removeEventListener("scroll", update);
      resizeObserver.disconnect();
    };
  }, [projects.length]);

  const scrollByCard = (direction: 1 | -1) => {
    const scroller = scrollerRef.current;
    const card = cardsRef.current[0];
    if (!scroller || !card) return;
    scroller.scrollBy({
      left: direction * (card.offsetWidth + 24),
      behavior: getScrollBehavior(),
    });
  };

  const scrollToIndex = (index: number) => {
    cardsRef.current[index]?.scrollIntoView({
      behavior: getScrollBehavior(),
      inline: "start",
      block: "nearest",
    });
  };

  return (
    <div className="space-y-6">
      <div
        ref={scrollerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Projetos"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollByCard(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollByCard(-1);
          }
        }}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                   [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
          />
        ))}
      </div>

      <div className="flex items-center justify-between gap-4">
        <div
          className="flex px-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="group"
          aria-label="Posição do carousel"
        >
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              aria-label={`Ir para projeto ${index + 1} de ${projects.length}`}
              aria-current={active === index ? "true" : undefined}
              onClick={() => scrollToIndex(index)}
              className="shrink-0 -mx-3 min-h-11 min-w-11 flex items-center justify-center rounded-md
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
            >
              <span
                className={cn(
                  "block h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none",
                  active === index ? "w-6 bg-foreground" : "w-1.5 bg-muted-foreground/30",
                )}
              />
            </button>
          ))}
        </div>

        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={isAtStart}
            aria-label="Projeto anterior"
            className="p-3 border border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300
                       disabled:opacity-30 disabled:pointer-events-none
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ChevronLeft className="size-4 text-muted-foreground" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={isAtEnd}
            aria-label="Próximo projeto"
            className="p-3 border border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300
                       disabled:opacity-30 disabled:pointer-events-none
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ChevronRight className="size-4 text-muted-foreground" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
