export type JourneyEntry = {
  year: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
  current: boolean;
};

export const journey: JourneyEntry[] = [
  {
    year: "2022",
    role: "Desenvolvedor Frontend Jr Autônomo",
    company: "Freelancer",
    description:
      "Atuei como desenvolvedor frontend júnior de forma autônoma, entregando projetos e experiências digitais sob demanda.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    current: false,
  },
  {
    year: "2023",
    role: "SEO e Tech Lead",
    company: "Agence Startech",
    description:
      "Liderança técnica em projetos de otimização de SEO e desenvolvimento de soluções digitais para clientes da agência.",
    tech: ["SEO", "React", "Next.js", "TypeScript"],
    current: false,
  },
  {
    year: "2024",
    role: "Gestor de Inteligência Artificial",
    company: "Startup de Tecnologia",
    description:
      "Responsável pela gestão de projetos de inteligência artificial e integração de soluções inovadoras em produtos digitais.",
    tech: ["Make", "GPTMAKER", "IA Generativa", "N8N"],
    current: false,
  },
  {
    year: "Atual",
    role: "Coordenador de Tecnologia e Educação",
    company: "2V Educação",
    description:
      "Coordeno iniciativas de tecnologia e educação, unindo desenvolvimento de software e ensino para formar novos profissionais.",
    tech: ["React", "Next.js", "TypeScript", "Prisma", "Tailwind"],
    current: true,
  },
];
