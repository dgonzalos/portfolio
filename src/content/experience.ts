import type { Experience } from "./types";

// From most recent role to oldest.
// For highlights: verb + what you did + result. If there's a number, include it.
//   ✗ "Worked on the app's frontend"
//   ✓ "Migrated the frontend to Next.js, cutting load time by 40%"

const madrid = { en: "Madrid, Spain", es: "Madrid, España" };
const barcelona = { en: "Barcelona, Spain", es: "Barcelona, España" };

export const experience: Experience[] = [
  {
    company: "GoStudent",
    role: {
      en: "Senior Frontend Engineer - Product Engineering Lead",
      es: "Senior Frontend Engineer - Product Engineering Lead",
    },
    start: "2022-08",
    end: "2026-08",
    location: madrid,
    highlights: {
      en: [
        "Led and mentored a team of four engineers, contributing hands-on in React and TypeScript and representing frontend on the technical committee for cross-team architectural decisions.",
        "Developed and maintained React/Next.js applications using App Router, Pages Router, API Routes, SSR and SSG; used TanStack Query for server state across two portals.",
        "Designed and evolved shared frontend architecture and approximately 20 reusable design-system components adopted by three engineering teams, replacing duplicate implementations.",
        "Led technical debt reduction across the frontend by defining coding standards, reusable patterns and maintainability practices.",
        "Improved code quality through Jest, Vitest, Playwright, code reviews and CI/CD, with targeted rendering and lazy-loading optimizations.",
        "Partnered with Product, Design and Backend teams to translate requirements into scalable, consistent and user-focused frontend solutions.",
      ],
      es: [
        "Liderazgo y mentoría de un equipo de cuatro ingenieros, sin dejar de programar en React y TypeScript, y representación del frontend en el comité técnico de decisiones de arquitectura entre equipos.",
        "Aplicaciones React/Next.js con App Router, Pages Router, API Routes, SSR y SSG, con TanStack Query para el estado de servidor en dos portales.",
        "Unos 20 componentes reutilizables del design system y una arquitectura frontend compartida, adoptados por tres equipos de ingeniería en sustitución de implementaciones duplicadas.",
        "Menos deuda técnica en el frontend gracias a estándares de código, patrones reutilizables y prácticas de mantenibilidad definidos para todo el equipo.",
        "Calidad del código reforzada con Jest, Vitest, Playwright, revisiones de código y CI/CD, además de optimizaciones puntuales de renderizado y carga diferida.",
        "Trabajo conjunto con Producto, Diseño y Backend para convertir requisitos en soluciones frontend escalables, coherentes y centradas en el usuario.",
      ],
    },
    stack: ["React", "Next.js", "TypeScript", "TanStack Query", "Jest", "Vitest", "Playwright"],
  },
  {
    company: "Docucom",
    role: {
      en: "Senior Frontend Engineer - Team Lead",
      es: "Senior Frontend Engineer - Team Lead",
    },
    start: "2019-11",
    end: "2022-07",
    location: madrid,
    highlights: {
      en: [
        "Led and mentored a four-engineer frontend team, combining technical coordination, code reviews and hands-on development.",
        "Led two successive migrations, from Vaadin to Angular and then to HTML5 Web Components, defining target architecture and component strategy.",
        "Designed reusable UI components and frontend standards to improve product consistency, maintainability and scalability.",
        "Introduced Jest unit testing and a structured code review process during major architectural transitions.",
      ],
      es: [
        "Al frente de un equipo frontend de cuatro ingenieros, combinando coordinación técnica, mentoría, revisiones de código y desarrollo.",
        "Dos migraciones sucesivas, de Vaadin a Angular y después a HTML5 Web Components, con la definición de la arquitectura objetivo y la estrategia de componentes.",
        "Componentes de UI reutilizables y estándares frontend que mejoraron la coherencia, la mantenibilidad y la escalabilidad del producto.",
        "Tests unitarios con Jest y un proceso estructurado de revisión de código, introducidos en plena transición de arquitectura.",
      ],
    },
    stack: ["Vaadin", "Angular", "HTML5", "Web Components", "Jest"],
  },
  {
    company: "Banco de España",
    role: { en: "Software Engineer", es: "Ingeniero de software" },
    start: "2017-02",
    end: "2019-10",
    location: madrid,
    highlights: {
      en: [
        "Built full-stack enterprise applications with HTML5/Angular, Java/Spring/Hibernate and Oracle Exadata.",
        "Designed and implemented business features and frontend-backend integrations for institutional applications.",
        "Developed and released Android and iOS applications using Ionic 3 and Cordova.",
        "Contributed to architecture, testing, maintenance, issue resolution and requirements analysis with technical and business stakeholders.",
      ],
      es: [
        "Aplicaciones empresariales full-stack con HTML5/Angular, Java/Spring/Hibernate y Oracle Exadata.",
        "Diseño e implementación de funcionalidades de negocio e integraciones frontend-backend para aplicaciones institucionales.",
        "Apps Android e iOS con Ionic 3 y Cordova, desde el desarrollo hasta su publicación.",
        "Participación en arquitectura, testing, mantenimiento, resolución de incidencias y análisis de requisitos junto a perfiles técnicos y de negocio.",
      ],
    },
    stack: ["HTML5", "Angular", "Java", "Spring", "Hibernate", "Oracle Exadata", "Ionic 3", "Cordova"],
  },
  {
    company: "Natoora",
    role: { en: "Software Engineer", es: "Ingeniero de software" },
    start: "2015-02",
    end: "2016-12",
    location: { en: "London, United Kingdom", es: "Londres, Reino Unido" },
    highlights: {
      en: [
        "Developed full-stack products using HTML5, JavaScript and AngularJS, with a backend initially in Java and later in Python/Django.",
        "Designed and maintained MySQL databases and integrated frontend, backend and persistence layers for new features.",
        "Introduced unit testing and developed Cordova mobile applications for Android and iOS.",
        "Owned features end to end, from requirements and technical design through implementation, testing, deployment and maintenance.",
      ],
      es: [
        "Productos full-stack con HTML5, JavaScript y AngularJS, sobre un backend primero en Java y después en Python/Django.",
        "Diseño y mantenimiento de bases de datos MySQL, e integración de las capas de frontend, backend y persistencia en nuevas funcionalidades.",
        "Primeros tests unitarios del equipo y aplicaciones móviles con Cordova para Android e iOS.",
        "Responsable de funcionalidades de principio a fin: requisitos, diseño técnico, implementación, testing, despliegue y mantenimiento.",
      ],
    },
    stack: ["HTML5", "JavaScript", "AngularJS", "Java", "Python", "Django", "MySQL", "Cordova"],
  },
  {
    company: "MediaMarktSaturn",
    role: { en: "Programmer Analyst", es: "Analista programador" },
    start: "2014-04",
    end: "2014-12",
    location: barcelona,
    highlights: {
      en: ["Worked on Java enterprise applications, functional analysis, Microsoft SQL Server and unit testing."],
      es: ["Aplicaciones empresariales Java, análisis funcional, Microsoft SQL Server y tests unitarios."],
    },
    stack: ["Java", "Microsoft SQL Server"],
  },
  {
    company: "atSistemas",
    role: { en: "Programmer Analyst", es: "Analista programador" },
    start: "2013-11",
    end: "2014-04",
    location: barcelona,
    highlights: {
      en: ["Worked on Java/Liferay web applications, portals, intranets and technical requirements analysis."],
      es: ["Aplicaciones web Java/Liferay, portales e intranets, junto con análisis de requisitos técnicos."],
    },
    stack: ["Java", "Liferay"],
  },
  {
    company: "TECNOY",
    role: { en: "Junior Developer", es: "Desarrollador junior" },
    start: "2012-10",
    end: "2013-11",
    location: { en: "Spain", es: "España" },
    highlights: {
      en: ["Worked on web intranets and MVC-based ATM software for Rural Informatic Services."],
      es: ["Intranets web y software de cajeros automáticos basado en MVC para Rural Servicios Informáticos."],
    },
    stack: [],
  },
  {
    company: "Universidad Rey Juan Carlos",
    role: { en: "Junior Developer", es: "Desarrollador junior" },
    start: "2011-10",
    end: "2012-08",
    location: madrid,
    highlights: {
      en: ["Worked on Android development, MySQL databases and a web application for Leganés City Council."],
      es: ["Desarrollo Android, bases de datos MySQL y una aplicación web para el Ayuntamiento de Leganés."],
    },
    stack: ["Android", "MySQL"],
  },
];
