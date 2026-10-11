import type { Product } from "./types";

// Deployed apps that someone can open and use today.
// The difference from Projects: what matters here is the outcome (who uses it, what it solves),
// not so much the code.

export const products: Product[] = [
  {
    slug: "seatly",
    name: "Seatly",
    url: "https://ticketing-system-web-eta.vercel.app",
    tagline: {
      en: "Buy event tickets and pick your exact seats on a live seat map.",
      es: "Compra entradas para eventos y elige tus asientos exactos en un mapa en tiempo real.",
    },
    problem: {
      en: "When seats sell online, two people can click the same seat at the same moment, and the payment happens on someone else's server. Seatly never sells a seat twice and only completes an order once Stripe has confirmed the payment.",
      es: "Cuando los asientos se venden online, dos personas pueden pulsar el mismo asiento en el mismo instante, y el pago ocurre en el servidor de otro. Seatly nunca vende un asiento dos veces y solo completa un pedido cuando Stripe ha confirmado el pago.",
    },
    role: {
      en: "Designed and built end to end: React frontend, Fastify API, PostgreSQL data model, Stripe checkout, tests and deployment on Vercel, Railway and Neon.",
      es: "Diseño y desarrollo de principio a fin: frontend en React, API en Fastify, modelo de datos en PostgreSQL, pago con Stripe, tests y despliegue en Vercel, Railway y Neon.",
    },
    stack: ["React", "TypeScript", "Fastify", "PostgreSQL", "Stripe"],
    image: "/products/seatly.png",
    status: "live",
    repo: "dgonzalos/ticketing-system",
  },
  {
    slug: "wod-translator",
    name: "WOD Translator",
    url: "https://wod-translator-production.up.railway.app",
    tagline: {
      en: "Turn a free-text CrossFit workout into a clear, editable card.",
      es: "Convierte un entrenamiento de CrossFit en texto libre en una tarjeta clara y editable.",
    },
    problem: {
      en: "Workouts get shared as free text, in Spanish or English, with no consistent format. WOD Translator reads the text and lays out the format, rounds and movements, then suggests substitutions for the equipment you actually have.",
      es: "Los entrenamientos se comparten como texto libre, en español o en inglés, sin un formato común. WOD Translator lee el texto y ordena el formato, las rondas y los movimientos, y después sugiere alternativas para el material que realmente tienes.",
    },
    role: {
      en: "Designed and built end to end: React interface, Fastify API, Claude integration with schema validation, spend limits and deployment on Railway.",
      es: "Diseño y desarrollo de principio a fin: interfaz en React, API en Fastify, integración con Claude con validación de esquema, límites de gasto y despliegue en Railway.",
    },
    stack: ["React 19", "TypeScript", "Fastify", "Zod", "Claude API"],
    image: "/products/wod-translator.png",
    status: "beta",
    repo: "dgonzalos/wod-translator",
  },
  // Copy one block per product.
];
