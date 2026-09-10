import type { Ref } from "react";

import type { Project } from "@/app/_content/projects";

type ProjectCardProps = {
  project: Project;
  ref?: Ref<HTMLElement>;
};

export function ProjectCard({ project, ref }: ProjectCardProps) {
  return (
    <article
      ref={ref}
      className="group shrink-0 snap-start w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
                 p-6 sm:p-8 border border-border rounded-lg cursor-default
                 hover:border-muted-foreground/40 transition-colors duration-300"
      aria-roledescription="slide"
      aria-label={project.title}
    >
      <div className="space-y-4">
        <span className="text-xs text-muted-foreground font-mono tabular-nums">
          {project.date}
        </span>

        <h3 className="text-lg sm:text-xl font-medium">{project.title}</h3>

        <p className="text-muted-foreground leading-relaxed text-pretty">
          {project.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs text-muted-foreground border border-border/60 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
