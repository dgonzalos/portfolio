import type { Experience } from "./types";

// From most recent role to oldest.
// For highlights: verb + what you did + result. If there's a number, include it.
//   ✗ "Worked on the app's frontend"
//   ✓ "Migrated the frontend to Next.js, cutting load time by 40%"

export const experience: Experience[] = [
  {
    company: "TODO Empresa",
    companyUrl: "https://TODO",
    role: "TODO Frontend Developer",
    start: "2024-01",
    end: null, // null = present
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
  // Copy one block per additional role.
];
