// Tipos del contenido del portfolio.
// Irá en src/content/types.ts. No hace falta tocarlo para rellenar el contenido.

export type Profile = {
  name: string;
  /** Titular tipo LinkedIn. Máx. ~80 caracteres. */
  headline: string;
  /** 1–2 frases que acompañan al titular en el inicio. */
  summary: string;
  /** Párrafos de la sección "Sobre mí" (2–3 párrafos cortos). */
  about: string[];
  location?: string;
  email: string;
  /** Ruta dentro de /public, p. ej. "/avatar.jpg" (cuadrada, mín. 400×400). */
  avatar?: string;
  /** Ruta dentro de /public, p. ej. "/cv-diego.pdf". */
  cvUrl?: string;
  /** Texto corto de disponibilidad, p. ej. "Abierto a nuevas oportunidades". */
  availability?: string;
  socials: {
    github: string;
    linkedin: string;
    x?: string;
  };
};

export type Experience = {
  company: string;
  companyUrl?: string;
  role: string;
  /** Formato "AAAA-MM". */
  start: string;
  /** Formato "AAAA-MM", o null si es tu puesto actual. */
  end: string | null;
  location?: string;
  type?: "full-time" | "freelance" | "prácticas" | "contrato";
  /** 2–3 logros. Mejor verbo + qué hiciste + resultado medible. */
  highlights: string[];
  stack: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

/** Repos de GitHub que quieres destacar con información extra. */
export type Project = {
  slug: string;
  name: string;
  /** "usuario/repo". Se usa para cruzar con la API de GitHub (estrellas, último commit). */
  repo: string;
  description: string;
  stack: string[];
  /** Qué hace interesante el proyecto técnicamente (2–4 puntos). */
  highlights?: string[];
  demoUrl?: string;
  /** Ruta dentro de /public, p. ej. "/projects/ticketing.png" (16:10). */
  image?: string;
  /** El destacado aparece primero y más grande. */
  featured?: boolean;
};

/** Apps desplegadas que usa gente real. */
export type Product = {
  slug: string;
  name: string;
  url: string;
  /** Una línea: qué es. */
  tagline: string;
  /** Qué problema resuelve y para quién. */
  problem: string;
  /** Qué hiciste tú (todo, el frontend, el diseño…). */
  role: string;
  stack: string[];
  /** Captura 1600×1000 en /public/products. */
  image: string;
  status: "live" | "beta";
  /** Opcional pero muy potente: usuarios, descargas, ingresos… */
  metrics?: string;
  repo?: string;
};
