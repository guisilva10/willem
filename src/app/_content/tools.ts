export type Tool = {
  name: string;
  tagline: string;
  logo: "orca" | "zed" | "claude-code" | "gemini";
};

export const tools: Tool[] = [
  { name: "Orca", tagline: "IDE com IA", logo: "orca" },
  { name: "Zed", tagline: "Editor de código rápido, feito em Rust", logo: "zed" },
  { name: "Claude Code", tagline: "Agente de código no terminal", logo: "claude-code" },
  { name: "Gemini", tagline: "Geração de imagens e logos", logo: "gemini" },
];
