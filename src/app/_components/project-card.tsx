import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Project } from "@/app/_content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { url } = project;

  const content = (
    <div className="space-y-4">
      <span className="text-xs text-muted-foreground font-mono tabular-nums">
        {project.date}
      </span>

      <div className="flex items-center gap-1.5">
        <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
          {project.title}
        </h3>
        {url && (
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0"
          />
        )}
      </div>

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
  );

  const baseClass =
    "group block p-6 sm:p-8 border border-border rounded-lg transition-all duration-500";

  if (!url) {
    return (
      <article
        className={cn(baseClass, "cursor-default")}
        aria-label={`${project.title}, projeto em desenvolvimento`}
      >
        {content}
      </article>
    );
  }

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        baseClass,
        "hover:border-muted-foreground/50 hover:shadow-lg hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      )}
    >
      {content}
    </Link>
  );
}
