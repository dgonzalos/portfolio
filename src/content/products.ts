import type { Product } from "./types";

// Deployed apps that someone can open and use today.
// The difference from Projects: what matters here is the outcome (who uses it, what it solves),
// not so much the code.

export const products: Product[] = [
  {
    slug: "todo-producto-1",
    name: "TODO",
    url: "https://TODO",
    tagline: "TODO: Qué es, en una línea.",
    problem: "TODO: Qué problema resuelve y para quién.",
    role: "TODO: Ej. Diseño, desarrollo y despliegue completos.",
    stack: ["Next.js", "TODO"],
    image: "/products/todo-producto-1.png",
    status: "live",
    metrics: "TODO (opcional): Ej. 150 usuarios activos al mes",
    // repo: "TODO_USUARIO/TODO_REPO",
  },
  // Copy one block per product.
];
