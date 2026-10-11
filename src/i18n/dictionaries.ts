import type { Locale } from "./config";
import type { SectionId } from "@/lib/navigation";

/** Interface strings. Both languages must define every key, or typecheck fails. */
export type Dictionary = {
  nav: Record<SectionId, string>;
  navLabel: string;
  skipToContent: string;
  menu: { open: string; close: string };
  theme: { toDark: string; toLight: string; toggle: string };
  language: { label: string; en: string; es: string };
  downloadCv: string;
  hero: { viewProjects: string };
  experience: {
    present: string;
    type: { "full-time": string; freelance: string; internship: string; contract: string };
  };
  projects: { intro: string; stars: string; updated: string; code: string; demo: string };
  products: {
    intro: string;
    status: { live: string; beta: string };
    problem: string;
    role: string;
    impact: string;
    open: string;
    viewCode: string;
  };
  contact: { lead: string };
  footer: { builtWith: string };
  stack: string;
  screenshotOf: string;
  addImage: string;
};

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    products: "Products",
    contact: "Contact",
  },
  navLabel: "Sections",
  skipToContent: "Skip to content",
  menu: { open: "Open menu", close: "Close menu" },
  theme: { toDark: "Switch to dark theme", toLight: "Switch to light theme", toggle: "Toggle theme" },
  language: { label: "Language", en: "English", es: "Spanish" },
  downloadCv: "Download CV",
  hero: { viewProjects: "View projects" },
  experience: {
    present: "Present",
    type: { "full-time": "Full-time", freelance: "Freelance", internship: "Internship", contract: "Contract" },
  },
  projects: { intro: "Open source on GitHub.", stars: "stars", updated: "Updated", code: "Code", demo: "Demo" },
  products: {
    intro: "Deployed apps you can use today.",
    status: { live: "Live", beta: "Beta" },
    problem: "Problem",
    role: "My role",
    impact: "Impact",
    open: "Open",
    viewCode: "View code",
  },
  contact: { lead: "Have a project or a role in mind? Get in touch." },
  footer: { builtWith: "Built with Next.js and deployed on Vercel" },
  stack: "Technologies",
  screenshotOf: "Screenshot of",
  addImage: "Add",
};

const es: Dictionary = {
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    experience: "Experiencia",
    skills: "Habilidades",
    projects: "Proyectos",
    products: "Productos",
    contact: "Contacto",
  },
  navLabel: "Secciones",
  skipToContent: "Saltar al contenido",
  menu: { open: "Abrir menú", close: "Cerrar menú" },
  theme: { toDark: "Cambiar a tema oscuro", toLight: "Cambiar a tema claro", toggle: "Cambiar tema" },
  language: { label: "Idioma", en: "Inglés", es: "Español" },
  downloadCv: "Descargar CV",
  hero: { viewProjects: "Ver proyectos" },
  experience: {
    present: "Actualidad",
    type: { "full-time": "Jornada completa", freelance: "Freelance", internship: "Prácticas", contract: "Contrato" },
  },
  projects: { intro: "Código abierto en GitHub.", stars: "estrellas", updated: "Actualizado", code: "Código", demo: "Demo" },
  products: {
    intro: "Aplicaciones desplegadas que puedes usar hoy.",
    status: { live: "En producción", beta: "Beta" },
    problem: "Problema",
    role: "Mi papel",
    impact: "Resultado",
    open: "Abrir",
    viewCode: "Ver código",
  },
  contact: { lead: "¿Tienes un proyecto o una vacante en mente? Escríbeme." },
  footer: { builtWith: "Hecho con Next.js y desplegado en Vercel" },
  stack: "Tecnologías",
  screenshotOf: "Captura de",
  addImage: "Añade",
};

export const dictionaries: Record<Locale, Dictionary> = { en, es };
