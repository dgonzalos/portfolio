import type { SkillGroup } from "./types";

// Solo lo que defenderías en una entrevista. Mejor 6 sólidas por grupo que 20 vistas una vez.
// Revisa, quita y añade lo que haga falta.

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
