import type { Project } from "./types";

// Repos de GitHub que quieres destacar. El resto de repos fijados en tu perfil
// se pueden mostrar automáticamente desde la API; aquí van los que merecen más detalle.
// Marca uno solo como featured.

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
  // Copia un bloque por cada proyecto. Recomendado: 3–6 en total.
];
