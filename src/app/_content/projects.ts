export type Project = {
  title: string;
  excerpt: string;
  date: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "Shape Controle",
    excerpt: "ERP de produção de pranchas de surf para o Udo Bastos",
    date: "2025",
    stack: ["Next.js 16", "Prisma", "Neon", "shadcn/ui"],
  },
  {
    title: "BlueOrbital",
    excerpt: "Saúde integrada via WhatsApp com dashboard para profissionais",
    date: "2026",
    stack: ["Next.js 16", "Prisma", "Neon", "Gemini"],
  },
  {
    title: "Karposs",
    excerpt: "SaaS de gestão de projetos com IA e MCP server",
    date: "Desde 2025",
    stack: ["Next.js 16", "Firebase", "Supabase", "Stripe"],
  },
  {
    title: "Mastermind",
    excerpt: "Ecossistema de mentorias com admin, app mobile e web para a Sandra Caron",
    date: "2025",
    stack: ["Next.js 16", "React Native", "Firebase", "Expo"],
  },
  {
    title: "BMA Chatbot",
    excerpt: "Chatbot de WhatsApp com CRM de atendimento para a BMA Acrílico",
    date: "2026",
    stack: ["Next.js 16", "Prisma", "Supabase", "Evolution API"],
  },
  {
    title: "Hive AI",
    excerpt: "Agentes de IA para gestão de equipes via WhatsApp no agronegócio",
    date: "2026",
    stack: ["Next.js 16", "Supabase", "Evolution API", "OpenAI"],
  },
  {
    title: "Yara",
    excerpt: "Psicóloga virtual 24h via WhatsApp com CRM de pacientes",
    date: "2026",
    stack: ["Next.js 16", "Prisma", "Supabase Realtime", "Evolution API"],
  },
  {
    title: "Zero a Zero",
    excerpt: "Sistema de gestão para bar de sinuca com PIX e IoT",
    date: "2026",
    stack: ["Next.js 16", "Convex", "Mercado Pago", "Tuya IoT"],
  },
  {
    title: "SKAI",
    excerpt: "App mobile de skincare com IA, scan facial e recomendações",
    date: "2026",
    stack: ["Expo", "React Native", "Supabase", "Gemini"],
  },
  {
    title: "Devogram",
    excerpt: "Rede social cristã mobile com devocionais e sala de oração",
    date: "2026",
    stack: ["React Native", "Expo", "Next.js 16", "Firebase"],
  },
  {
    title: "Stackd",
    excerpt: "Plataforma de vagas com salário transparente e match por stack",
    date: "2026",
    stack: ["Next.js 16", "Prisma", "Neon", "Better Auth"],
  },
];
