import type { Experience } from "./types";

// From most recent role to oldest.
// For highlights: verb + what you did + result. If there's a number, include it.
//   ✗ "Worked on the app's frontend"
//   ✓ "Migrated the frontend to Next.js, cutting load time by 40%"

export const experience: Experience[] = [
  {
    company: "GoStudent",
    role: "Senior Frontend Engineer - Product Engineering Lead",
    start: "2022-08",
    end: "2026-08",
    location: "Madrid, Spain",
    highlights: [
      "Led and mentored a team of four engineers, contributing hands-on in React and TypeScript and representing frontend on the technical committee for cross-team architectural decisions.",
      "Developed and maintained React/Next.js applications using App Router, Pages Router, API Routes, SSR and SSG; used TanStack Query for server state across two portals.",
      "Designed and evolved shared frontend architecture and approximately 20 reusable design-system components adopted by three engineering teams, replacing duplicate implementations.",
      "Led technical debt reduction across the frontend by defining coding standards, reusable patterns and maintainability practices.",
      "Improved code quality through Jest, Vitest, Playwright, code reviews and CI/CD, with targeted rendering and lazy-loading optimizations.",
      "Partnered with Product, Design and Backend teams to translate requirements into scalable, consistent and user-focused frontend solutions.",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Jest",
      "Vitest",
      "Playwright",
    ],
  },
  {
    company: "Docucom",
    role: "Senior Frontend Engineer - Team Lead",
    start: "2019-11",
    end: "2022-07",
    location: "Madrid, Spain",
    highlights: [
      "Led and mentored a four-engineer frontend team, combining technical coordination, code reviews and hands-on development.",
      "Led two successive migrations, from Vaadin to Angular and then to HTML5 Web Components, defining target architecture and component strategy.",
      "Designed reusable UI components and frontend standards to improve product consistency, maintainability and scalability.",
      "Introduced Jest unit testing and a structured code review process during major architectural transitions.",
    ],
    stack: ["Vaadin", "Angular", "HTML5", "Web Components", "Jest"],
  },
  {
    company: "Banco de España",
    role: "Software Engineer",
    start: "2017-02",
    end: "2019-10",
    location: "Madrid, Spain",
    highlights: [
      "Built full-stack enterprise applications with HTML5/Angular, Java/Spring/Hibernate and Oracle Exadata.",
      "Designed and implemented business features and frontend-backend integrations for institutional applications.",
      "Developed and released Android and iOS applications using Ionic 3 and Cordova.",
      "Contributed to architecture, testing, maintenance, issue resolution and requirements analysis with technical and business stakeholders.",
    ],
    stack: [
      "HTML5",
      "Angular",
      "Java",
      "Spring",
      "Hibernate",
      "Oracle Exadata",
      "Ionic 3",
      "Cordova",
    ],
  },
  {
    company: "Natoora",
    role: "Software Engineer",
    start: "2015-02",
    end: "2016-12",
    location: "London, United Kingdom",
    highlights: [
      "Developed full-stack products using HTML5, JavaScript and AngularJS, with a backend initially in Java and later in Python/Django.",
      "Designed and maintained MySQL databases and integrated frontend, backend and persistence layers for new features.",
      "Introduced unit testing and developed Cordova mobile applications for Android and iOS.",
      "Owned features end to end, from requirements and technical design through implementation, testing, deployment and maintenance.",
    ],
    stack: [
      "HTML5",
      "JavaScript",
      "AngularJS",
      "Java",
      "Python",
      "Django",
      "MySQL",
      "Cordova",
    ],
  },
  {
    company: "MediaMarktSaturn",
    role: "Programmer Analyst",
    start: "2014-04",
    end: "2014-12",
    location: "Barcelona, Spain",
    highlights: [
      "Worked on Java enterprise applications, functional analysis, Microsoft SQL Server and unit testing.",
    ],
    stack: ["Java", "Microsoft SQL Server"],
  },
  {
    company: "atSistemas",
    role: "Programmer Analyst",
    start: "2013-11",
    end: "2014-04",
    location: "Barcelona, Spain",
    highlights: [
      "Worked on Java/Liferay web applications, portals, intranets and technical requirements analysis.",
    ],
    stack: ["Java", "Liferay"],
  },
  {
    company: "TECNOY",
    role: "Junior Developer",
    start: "2012-10",
    end: "2013-11",
    location: "Spain",
    highlights: [
      "Worked on web intranets and MVC-based ATM software for Rural Informatic Services.",
    ],
    stack: [],
  },
  {
    company: "Universidad Rey Juan Carlos",
    role: "Junior Developer",
    start: "2011-10",
    end: "2012-08",
    location: "Madrid, Spain",
    highlights: [
      "Worked on Android development, MySQL databases and a web application for Leganés City Council.",
    ],
    stack: ["Android", "MySQL"],
  },
];
