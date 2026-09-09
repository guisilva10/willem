export type Project = {
  title: string;
  excerpt: string;
  date: string;
  stack: string[];
  url: string | null;
};

export const projects: Project[] = [
  {
    title: "Karposs",
    excerpt:
      "SaaS de gestão de projetos e tarefas para equipes. Multi-workspace, Kanban, Gantt, sprints, integrações com Google Calendar e GitHub, IA integrada e MCP server para agentes.",
    date: "Desde 2025",
    stack: ["Next.js 16", "Firebase", "Supabase", "Stripe"],
    url: "https://karposs.com.br",
  },
  {
    title: "BlueOrbital",
    excerpt:
      "Plataforma de saúde integrada. Pacientes registram refeições, treinos e métricas via WhatsApp; nutricionistas, personais e médicos acompanham em dashboard unificado com predições e alertas de IA.",
    date: "2026",
    stack: ["Next.js 16", "Prisma", "Neon", "Gemini"],
    url: "https://blueorbital.com.br",
  },
  {
    title: "Yara",
    excerpt:
      "Psicóloga virtual 24/7 via WhatsApp. IA empática que acolhe, escuta e detecta situações de risco, com CRM de pacientes e gestão de sessões terapêuticas em tempo real.",
    date: "2026",
    stack: ["Next.js 16", "Prisma", "Supabase Realtime", "Evolution API"],
    url: null,
  },
  {
    title: "Devogram",
    excerpt:
      "Rede social cristã mobile. Devocionais diários, sala de oração, feed inspirador e comunidade. App em React Native com landing page e lista de espera.",
    date: "2026",
    stack: ["React Native", "Expo", "Next.js 16", "Firebase"],
    url: null,
  },
];
