import type { Experience } from "./types";

// Del puesto más reciente al más antiguo.
// Para los logros: verbo + qué hiciste + resultado. Si hay un número, ponlo.
//   ✗ "Trabajé en el frontend de la app"
//   ✓ "Migré el frontend a Next.js, reduciendo el tiempo de carga un 40%"

export const experience: Experience[] = [
  {
    company: "TODO Empresa",
    companyUrl: "https://TODO",
    role: "TODO Frontend Developer",
    start: "2024-01",
    end: null, // null = actualidad
    location: "TODO: Ciudad / Remoto",
    type: "full-time",
    highlights: [
      "TODO: Logro 1",
      "TODO: Logro 2",
      "TODO: Logro 3",
    ],
    stack: ["React", "Next.js", "TypeScript"],
  },
  {
    company: "TODO Empresa anterior",
    role: "TODO",
    start: "2022-06",
    end: "2023-12",
    highlights: ["TODO: Logro 1", "TODO: Logro 2"],
    stack: ["TODO"],
  },
  // Copia un bloque por cada puesto más.
];
