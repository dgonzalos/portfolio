import type { Product } from "./types";

// Deployed apps that someone can open and use today.
// The difference from Projects: what matters here is the outcome (who uses it, what it solves),
// not so much the code.

export const products: Product[] = [
  {
    slug: "seatly",
    name: "Seatly",
    url: "https://ticketing-system-web-eta.vercel.app",
    tagline: "Buy event tickets and pick your exact seats on a live seat map.",
    problem:
      "When seats sell online, two people can click the same seat at the same moment, and the payment happens on someone else's server. Seatly never sells a seat twice and only completes an order once Stripe has confirmed the payment.",
    role: "Designed and built end to end: React frontend, Fastify API, PostgreSQL data model, Stripe checkout, tests and deployment on Vercel, Railway and Neon.",
    stack: ["React", "TypeScript", "Fastify", "PostgreSQL", "Stripe"],
    image: "/products/seatly.png",
    status: "live",
    repo: "dgonzalos/ticketing-system",
  },
  {
    slug: "wod-translator",
    name: "WOD Translator",
    url: "https://wod-translator-production.up.railway.app",
    tagline: "Turn a free-text CrossFit workout into a clear, editable card.",
    problem:
      "Workouts get shared as free text, in Spanish or English, with no consistent format. WOD Translator reads the text and lays out the format, rounds and movements, then suggests substitutions for the equipment you actually have.",
    role: "Designed and built end to end: React interface, Fastify API, Claude integration with schema validation, spend limits and deployment on Railway.",
    stack: ["React 19", "TypeScript", "Fastify", "Zod", "Claude API"],
    image: "/products/wod-translator.png",
    status: "beta",
    repo: "dgonzalos/wod-translator",
  },
  // Copy one block per product.
];
