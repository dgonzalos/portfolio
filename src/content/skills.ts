import type { SkillGroup } from "./types";

// Only what you'd defend in an interview. Better 6 solid ones per group than 20 seen once.
// Review, remove and add as needed. Tech names are plain strings; anything else is { en, es }.

export const skills: SkillGroup[] = [
  {
    category: { en: "Frontend", es: "Frontend" },
    items: ["React", "Next.js", "Angular", "Vue.js", "TypeScript", "JavaScript", "CSS Modules",
      { en: "Semantic HTML", es: "HTML semántico" },
      { en: "Accessibility", es: "Accesibilidad" },
      "Redux Toolkit", "Zustand", "TanStack", "SASS/SCSS", "Tailwind CSS", "Vite", "Storybook", "ESLint", "Figma",
    ],
  },
  {
    category: { en: "Product & UI Architecture", es: "Producto y arquitectura de UI" },
    items: [
      { en: "Frontend architecture", es: "Arquitectura frontend" },
      "Design systems",
      { en: "Component libraries", es: "Librerías de componentes" },
      { en: "REST API integration", es: "Integración con APIs REST" },
      { en: "UX/UI collaboration", es: "Colaboración con UX/UI" },
      { en: "Responsive interfaces", es: "Interfaces responsive" },
      { en: "Reusable patterns", es: "Patrones reutilizables" },
      { en: "Cross-team engineering standards", es: "Estándares de ingeniería entre equipos" },
    ],
  },
  {
    category: { en: "Quality & Delivery", es: "Calidad y entrega" },
    items: ["Jest", "Vitest", "Playwright", "Cypress",
      { en: "Unit and E2E testing", es: "Tests unitarios y E2E" },
      "CI/CD",
      "Refactoring",
      { en: "Web performance", es: "Rendimiento web" },
      "Debugging",
      { en: "Code reviews", es: "Revisiones de código" },
      { en: "Maintainable code", es: "Código mantenible" },
      { en: "Agile development", es: "Desarrollo ágil" },
    ],
  },
  {
    category: { en: "AI", es: "IA" },
    items: [
      { en: "Custom skills", es: "Skills personalizadas" },
      "Claude API (tool use, structured outputs)",
      "MCP",
      "Prompt engineering",
    ],
  },
  {
    category: { en: "Backend", es: "Backend" },
    items: ["Node.js", "Fastify", "PostgreSQL", "REST", "TypeScript", "Java", "Spring", "Hibernate", "Python", "Django", "ORMs", "MySQL"],
  },
  {
    category: { en: "Tools", es: "Herramientas" },
    items: ["Git", "GitHub", "Vite", "Vercel", "Docker"],
  },
];
