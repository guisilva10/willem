export type AgentKitPillar = {
  title: string;
  description: string;
};

export const AGENT_KIT_INTRO =
  "Framework de agentes de IA que criei para o time da 2V Educação, usado no dia a dia pra desenvolver software com Claude Code. Define papéis, regras e um pipeline de trabalho que qualquer empresa pode adaptar via um único arquivo de configuração.";

export const agentKitPillars: AgentKitPillar[] = [
  {
    title: "Time de agentes com papéis",
    description:
      "Dev, arquiteto, reviewer, designer, QA, DevOps, PO e outros papéis, cada um com escopo e responsabilidade definidos.",
  },
  {
    title: "Skills e rules",
    description:
      "Conhecimento reutilizável empacotado por domínio, aplicado automaticamente conforme o contexto da tarefa.",
  },
  {
    title: "Hooks de qualidade",
    description:
      "Validações automáticas em cada etapa: build, lint, segurança, formatação, antes de qualquer commit.",
  },
  {
    title: "Pipeline plan, implement, review, verify, PR",
    description:
      "Fluxo de trabalho fixo, do planejamento ao pull request, aplicável a qualquer empresa ou nicho via um CLAUDE.md próprio.",
  },
];
