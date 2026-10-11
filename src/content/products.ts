import type { Product } from "./types";

// Apps desplegadas que alguien puede abrir y usar hoy.
// La diferencia con Proyectos: aquí importa el resultado (quién lo usa, qué resuelve),
// no tanto el código.

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
  // Copia un bloque por cada producto.
];
