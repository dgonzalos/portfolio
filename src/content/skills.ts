import type { SkillGroup } from "./types";

// Only what you'd defend in an interview. Better 6 solid ones per group than 20 seen once.
// Review, remove and add as needed.

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "CSS Modules", "HTML semántico", "Accesibilidad"],
  },
  {
    category: "IA",
    items: ["Claude API (tool use, structured outputs)", "MCP", "Prompt engineering"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Fastify", "PostgreSQL", "REST"],
  },
  {
    category: "Herramientas",
    items: ["Git", "GitHub", "Vite", "Vercel", "TODO"],
  },
];
