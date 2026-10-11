import type { Project } from "./types";

// GitHub repos you want to highlight. The rest of the repos pinned on your profile
// can be shown automatically from the API; the ones that deserve more detail go here.
// Mark only one as featured.

export const projects: Project[] = [
  {
    slug: "ticketing",
    name: { en: "Seatly", es: "Seatly" },
    repo: "dgonzalos/ticketing-system",
    description: {
      en: "Developed a React/TypeScript ticketing platform with events, performances, interactive seat selection, authentication, checkout and order confirmation.",
      es: "Plataforma de venta de entradas en React/TypeScript con eventos, sesiones, selección interactiva de asientos, autenticación, pago y confirmación de pedido.",
    },
    stack: ["React", "TypeScript", "TanStack Query", "Fastify", "PostgreSQL", "Drizzle", "Stripe", "Claude API", "MCP"],
    highlights: {
      en: [
        "No double bookings: checking and claiming a seat is a single atomic operation in the database.",
        "The Stripe webhook is the only code path that can complete an order. It re-verifies the payment with Stripe and ignores duplicate deliveries.",
        "AI admin assistant built on Claude tool use that proposes changes but cannot execute them: its tools only get a read-only service, and a separate confirm step does the writing.",
        "Read-only MCP server that gives Claude occupancy, revenue and order-funnel analytics.",
      ],
      es: [
        "Sin reservas duplicadas: comprobar y reservar un asiento es una única operación atómica en la base de datos.",
        "El webhook de Stripe es el único camino que puede completar un pedido. Vuelve a verificar el pago con Stripe e ignora las entregas duplicadas.",
        "Asistente de IA para administración, basado en tool use de Claude, que propone cambios pero no puede ejecutarlos: sus herramientas solo reciben un servicio de lectura y un paso de confirmación aparte es el que escribe.",
        "Servidor MCP de solo lectura que da a Claude analíticas de ocupación, ingresos y embudo de pedidos.",
      ],
    },
    demoUrl: "https://ticketing-system-web-eta.vercel.app",
    image: "/products/seatly.png",
    featured: true,
  },
  {
    slug: "wod-translator",
    name: { en: "WOD Translator", es: "WOD Translator" },
    repo: "dgonzalos/wod-translator",
    description: {
      en: "Paste a free-text CrossFit workout in Spanish or English and get back a structured, editable card. Claude interprets it, a strict schema validates it, and you can always correct it against the original text.",
      es: "Pega un entrenamiento de CrossFit en texto libre, en español o en inglés, y recibe una tarjeta estructurada y editable. Claude lo interpreta, un esquema estricto lo valida y siempre puedes corregirlo frente al texto original.",
    },
    stack: ["React 19", "TypeScript", "Fastify", "Zod", "Claude API", "Vitest", "Playwright"],
    highlights: {
      en: [
        "Structured output through forced tool use, validated against the same Zod schema the UI relies on.",
        "The model only extracts what the text says: anything ambiguous or unsupported is flagged instead of guessed.",
        "Per-IP quotas, a global concurrency cap and a rolling token budget keep AI spend bounded.",
      ],
      es: [
        "Salida estructurada mediante tool use forzado, validada con el mismo esquema de Zod en el que se apoya la interfaz.",
        "El modelo solo extrae lo que dice el texto: lo ambiguo o no soportado se marca en lugar de inventarse.",
        "Cuotas por IP, un límite global de concurrencia y un presupuesto de tokens móvil mantienen acotado el gasto en IA.",
      ],
    },
    demoUrl: "https://wod-translator-production.up.railway.app",
  },
  {
    slug: "tabs-design-system",
    name: { en: "Accessible Tabs component", es: "Componente Tabs accesible" },
    repo: "dgonzalos/tabs-design-system",
    description: {
      en: "Design system take-home: a Tabs component with badges, built from a Figma file with React 19, TypeScript and hand-written SCSS, no UI libraries.",
      es: "Prueba técnica de design system: un componente Tabs con badges, construido a partir de un archivo de Figma con React 19, TypeScript y SCSS escrito a mano, sin librerías de UI.",
    },
    stack: ["React 19", "TypeScript", "SCSS Modules", "Storybook", "Vitest", "axe-core"],
    highlights: {
      en: [
        "Follows the WAI-ARIA Tabs pattern, with roving tabindex and arrow-key navigation.",
        "Automated accessibility tests with axe-core, plus contrast checks in Storybook.",
        "Reviewed the Figma file and flagged contrast and consistency issues for the design team.",
      ],
      es: [
        "Sigue el patrón Tabs de WAI-ARIA, con roving tabindex y navegación con las flechas del teclado.",
        "Tests de accesibilidad automatizados con axe-core, además de comprobaciones de contraste en Storybook.",
        "Revisión del archivo de Figma, con problemas de contraste y coherencia señalados al equipo de diseño.",
      ],
    },
  },
  {
    slug: "wod-quest",
    name: { en: "WOD Quest", es: "WOD Quest" },
    repo: "dgonzalos/wod-quest",
    description: {
      en: "Work in progress. An Angular app that turns CrossFit benchmark workouts into RPG-style quests: complete a WOD, earn XP and level up your character.",
      es: "En desarrollo. Una app en Angular que convierte los entrenamientos de referencia de CrossFit en misiones de estilo RPG: completa un WOD, gana XP y sube de nivel a tu personaje.",
    },
    stack: ["Angular 22", "TypeScript", "Signals", "Vitest"],
    highlights: {
      en: [
        "State built on Angular signals: XP and level are derived from quest progress, never stored separately.",
        "Light, dark and system themes with the choice persisted, on a two-layer token system.",
        "Progression rules written as pure functions and covered by unit tests.",
      ],
      es: [
        "Estado construido con signals de Angular: la XP y el nivel se derivan del progreso de las misiones, nunca se guardan por separado.",
        "Temas claro, oscuro y del sistema, con la elección guardada, sobre un sistema de tokens de dos capas.",
        "Reglas de progresión escritas como funciones puras y cubiertas por tests unitarios.",
      ],
    },
  },
  {
    slug: "portfolio",
    name: { en: "This portfolio", es: "Este portfolio" },
    repo: "dgonzalos/portfolio",
    description: {
      en: "The site you are on. Built with Next.js 16 and React Server Components, so almost everything renders on the server and only the theme toggle, language switcher and mobile menu ship JavaScript.",
      es: "La web en la que estás. Hecha con Next.js 16 y React Server Components, así que casi todo se renderiza en el servidor y solo el selector de tema, el de idioma y el menú móvil envían JavaScript.",
    },
    stack: ["Next.js 16", "React 19", "TypeScript", "CSS Modules"],
  },
  // Copy one block per project. Recommended: 3–6 in total.
];
