import type { Project } from "./types";

// GitHub repos you want to highlight. The rest of the repos pinned on your profile
// can be shown automatically from the API; the ones that deserve more detail go here.
// Mark only one as featured.

export const projects: Project[] = [
  {
    slug: "ticketing",
    name: "Seatly",
    repo: "dgonzalos/ticketing-system",
    description:
      "Developed a React/TypeScript ticketing platform with events, performances, interactive seat selection, authentication, checkout and order confirmation.",
    stack: ["React", "TypeScript", "TanStack Query", "Fastify", "PostgreSQL", "Drizzle", "Stripe", "Claude API", "MCP"],
    highlights: [
      "No double bookings: checking and claiming a seat is a single atomic operation in the database.",
      "The Stripe webhook is the only code path that can complete an order. It re-verifies the payment with Stripe and ignores duplicate deliveries.",
      "AI admin assistant built on Claude tool use that proposes changes but cannot execute them: its tools only get a read-only service, and a separate confirm step does the writing.",
      "Read-only MCP server that gives Claude occupancy, revenue and order-funnel analytics.",
    ],
    demoUrl: "https://ticketing-system-web-eta.vercel.app",
    image: "/projects/ticketing.png",
    featured: true,
  },
  {
    slug: "wod-translator",
    name: "WOD Translator",
    repo: "dgonzalos/wod-translator",
    description:
      "Paste a free-text CrossFit workout in Spanish or English and get back a structured, editable card. Claude interprets it, a strict schema validates it, and you can always correct it against the original text.",
    stack: ["React 19", "TypeScript", "Fastify", "Zod", "Claude API", "Vitest", "Playwright"],
    highlights: [
      "Structured output through forced tool use, validated against the same Zod schema the UI relies on.",
      "The model only extracts what the text says: anything ambiguous or unsupported is flagged instead of guessed.",
      "Per-IP quotas, a global concurrency cap and a rolling token budget keep AI spend bounded.",
    ],
    demoUrl: "https://wod-translator-production.up.railway.app",
  },
  {
    slug: "tabs-design-system",
    name: "Accessible Tabs component",
    repo: "dgonzalos/tabs-design-system",
    description:
      "Design system take-home: a Tabs component with badges, built from a Figma file with React 19, TypeScript and hand-written SCSS, no UI libraries.",
    stack: ["React 19", "TypeScript", "SCSS Modules", "Storybook", "Vitest", "axe-core"],
    highlights: [
      "Follows the WAI-ARIA Tabs pattern, with roving tabindex and arrow-key navigation.",
      "Automated accessibility tests with axe-core, plus contrast checks in Storybook.",
      "Reviewed the Figma file and flagged contrast and consistency issues for the design team.",
    ],
  },
  {
    slug: "wod-quest",
    name: "WOD Quest",
    repo: "dgonzalos/wod-quest",
    description:
      "Work in progress. An Angular app that turns CrossFit benchmark workouts into RPG-style quests: complete a WOD, earn XP and level up your character.",
    stack: ["Angular 22", "TypeScript", "Signals", "Vitest"],
    highlights: [
      "State built on Angular signals: XP and level are derived from quest progress, never stored separately.",
      "Light, dark and system themes with the choice persisted, on a two-layer token system.",
      "Progression rules written as pure functions and covered by unit tests.",
    ],
  },
  {
    slug: "portfolio",
    name: "This portfolio",
    repo: "dgonzalos/portfolio",
    description:
      "The site you are on. Built with Next.js 16 and React Server Components, so almost everything renders on the server and only the theme toggle and mobile menu ship JavaScript.",
    stack: ["Next.js 16", "React 19", "TypeScript", "CSS Modules"],
  },
  // Copy one block per project. Recommended: 3–6 in total.
];
