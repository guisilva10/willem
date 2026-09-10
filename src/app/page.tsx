"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Download } from "lucide-react";

import { cn } from "@/lib/utils";
import { ProjectCarousel } from "@/app/_components/project-carousel";
import { SectionNav } from "@/app/_components/section-nav";
import { StatusPill } from "@/app/_components/status-pill";
import { ThemeToggle } from "@/app/_components/theme-toggle";
import { ToolLogo } from "@/app/_components/tool-logo";
import { AGENT_KIT_INTRO, agentKitPillars } from "@/app/_content/agent-kit";
import { journey } from "@/app/_content/journey";
import { projects } from "@/app/_content/projects";
import { IS_AVAILABLE, SITE_EMAIL, SITE_NAME, STACK } from "@/app/_content/site";
import { socials } from "@/app/_content/socials";
import { tools } from "@/app/_content/tools";

const linkFocusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-foreground relative z-10">
      <SectionNav activeSection={activeSection} />

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="min-h-screen flex flex-col items-center justify-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 lg:gap-20 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-3">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">
                  PORTFOLIO
                </div>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95] text-balance">
                  Guilherme
                  <br />
                  <span className="text-muted-foreground">Willem</span>
                </h1>
              </div>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-md text-pretty">
                Sou <span className="text-foreground">engenheiro de software AI-Native</span>,
                construo produtos e agentes de IA em produção na 2V Educação.
              </p>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-8 mt-8 lg:mt-0">
              {IS_AVAILABLE && <StatusPill label="Disponível para novos projetos" />}

              <div className="border-l-2 border-primary/40 pl-4 space-y-2">
                <div className="text-sm text-muted-foreground font-mono">
                  ATUALMENTE
                </div>
                <div className="text-foreground">
                  Engenheiro de Software AI-Native
                </div>
                <div className="text-muted-foreground">@ 2V Educação</div>
                <div className="text-xs text-muted-foreground tabular-nums">
                  2022 até hoje
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">STACK</div>
                <div className="flex flex-wrap gap-2">
                  {STACK.map((skill, i) => (
                    <span
                      key={skill}
                      style={{ transitionDelay: `${i * 40}ms` }}
                      className="px-3 py-1 text-xs border border-border rounded-full
                                 hover:border-muted-foreground/50 hover:-translate-y-0.5
                                 transition-all duration-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ChevronDown
            aria-hidden="true"
            className={cn(
              "size-4 text-muted-foreground/40 mt-16 transition-opacity duration-500 motion-reduce:animate-none",
              activeSection === "intro" ? "opacity-100 animate-bounce" : "opacity-0",
            )}
          />
        </header>

        <section
          id="journey"
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="min-h-screen py-24 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Minha Jornada</h2>
              <div className="text-sm text-muted-foreground font-mono tabular-nums">
                2022 até hoje
              </div>
            </div>

            <ol className="relative space-y-8 sm:space-y-10 border-l border-border/60 pl-6 sm:pl-0 sm:border-l-0">
              {journey.map((job) => (
                <li
                  key={job.year}
                  className="group relative grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-10
                             py-6 sm:py-8 lg:pl-6 lg:border-l lg:border-border/60
                             hover:bg-muted/20 transition-colors duration-300 rounded-md"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute left-[-5px] top-8 size-2.5 rounded-full ring-4 ring-background",
                      job.current ? "bg-primary" : "bg-muted-foreground/40",
                    )}
                  />
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-300 tabular-nums">
                      {job.year}
                    </div>
                  </div>
                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg text-pretty">
                      {job.description}
                    </p>
                  </div>
                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end content-start mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground border border-border/60 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          className="min-h-screen py-24 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">
                {projects.length} PROJETOS
              </div>
              <h2 className="text-3xl sm:text-4xl font-light">Projetos Recentes</h2>
            </div>

            <ProjectCarousel projects={projects} />
          </div>
        </section>

        <section
          id="agent-kit"
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          className="py-24 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">
                AGENT-KIT
              </div>
              <h2 className="text-3xl sm:text-4xl font-light">Um framework que eu criei</h2>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              {AGENT_KIT_INTRO}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {agentKitPillars.map((pillar) => (
                <div key={pillar.title} className="border-l-2 border-primary/40 pl-4 space-y-1.5">
                  <h3 className="text-foreground font-medium">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="tools"
          ref={(el) => {
            sectionsRef.current[4] = el;
          }}
          className="py-24 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">
                FERRAMENTAS
              </div>
              <h2 className="text-3xl sm:text-4xl font-light">Como eu trabalho</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="group p-4 sm:p-5 border border-border rounded-lg space-y-2"
                >
                  <ToolLogo
                    name={tool.logo}
                    className="h-6 w-auto text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  />
                  <div className="space-y-1.5">
                    <div className="text-foreground font-medium">{tool.name}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed text-pretty">
                      {tool.tagline}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[5] = el;
          }}
          className="py-24 sm:py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-4">
                <Image
                  src="/eu.png"
                  alt={`Foto de ${SITE_NAME}`}
                  width={80}
                  height={80}
                  className="size-20 border border-border rounded-full object-cover"
                />
                <h2 className="text-2xl sm:text-4xl font-light">Conecte-se comigo</h2>
              </div>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
                Você pode acompanhar o processo de desenvolvimento dos nossos projetos
                nas minhas redes.
              </p>

              <Link
                href={`mailto:${SITE_EMAIL}`}
                className={cn(
                  "group inline-flex items-center gap-3 px-5 py-3 border border-border rounded-lg",
                  "hover:border-foreground/50 transition-colors duration-300",
                  linkFocusRing,
                )}
              >
                <span className="text-base sm:text-lg">{SITE_EMAIL}</span>
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform duration-300 motion-reduce:transition-none" />
              </Link>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">REDES</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    download={social.download}
                    target={social.download ? undefined : "_blank"}
                    rel={social.download ? undefined : "noopener noreferrer"}
                    className={cn(
                      "group p-4 border border-border rounded-lg hover:border-muted-foreground/50",
                      "hover:shadow-sm transition-all duration-300",
                      linkFocusRing,
                    )}
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        {social.handle}
                        {social.download && (
                          <Download className="size-4" aria-hidden="true" />
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="text-sm text-muted-foreground">
              © 2026 {SITE_NAME} - Todos os direitos reservados
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </div>
  );
}
