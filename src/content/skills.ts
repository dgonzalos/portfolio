import type { SkillGroup } from "./types";

// Only what you'd defend in an interview. Better 6 solid ones per group than 20 seen once.
// Review, remove and add as needed.

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "CSS Modules", "Semantic HTML", "Accessibility",
      "Redux Toolkit", "Zustand","TanStack","SASS/SCSS","Tailwind CSS", "Vite", "Storybook", "ESLint", "Figma"
    ],
  },
   {
    category: "Product & UI Architecture",
    items: ["Frontend architecture", "Design systems", "Component libraries", "REST API integration", "UX/UI collaboration", "Responsive interfaces", "Reusable patterns", "Cross-team engineering standards"],
  },
  {
    category: "Quality & Delivery",
    items: ["Jest", "Vitest", "Playwright", "Cypress", "Unit and E2E testing", "CI/CD", "Refactoring", "Web performance", "Debugging", "Code reviews", "Maintainable code", "Agile development"],
  },
  {
    category: "AI",
    items: ["Custom skills", "Claude API (tool use, structured outputs)", "MCP", "Prompt engineering"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Fastify", "PostgreSQL", "REST", "TypeScript", "Java", "Spring", "Hibernate", "Python", "Django", "ORMs", "MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vite", "Vercel", "Docker"],
  },
];
