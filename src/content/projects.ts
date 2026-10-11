import type { Project } from "./types";

// GitHub repos you want to highlight. The rest of the repos pinned on your profile
// can be shown automatically from the API; the ones that deserve more detail go here.
// Mark only one as featured.

export const projects: Project[] = [
  {
    slug: "ticketing",
    name: "TODO: Nombre del sistema de ticketing",
    repo: "TODO_USUARIO/TODO_REPO",
    description:
      "TODO: Una o dos frases. Ej.: Sistema de gestión de incidencias con un asistente de IA que clasifica, prioriza y propone respuestas a los tickets.",
    stack: ["React", "Vite", "Fastify", "PostgreSQL", "Claude API", "MCP"],
    highlights: [
      "TODO: Uso de tool use de Claude para…",
      "TODO: Structured outputs para…",
      "TODO: Servidor MCP que expone…",
    ],
    demoUrl: "https://TODO",
    image: "/projects/ticketing.png",
    featured: true,
  },
  {
    slug: "todo-proyecto-2",
    name: "TODO",
    repo: "TODO_USUARIO/TODO_REPO",
    description: "TODO",
    stack: ["TODO"],
  },
  // Copy one block per project. Recommended: 3–6 in total.
];
