// Portfolio content types.
// Text that visitors read is Localized: write it once per language, { en: "…", es: "…" }.
// Names, URLs, dates and tech stacks are the same in both languages and stay plain strings.

import type { Localized } from "@/i18n/localize";

export type { Localized };

export type Profile = {
  name: string;
  /** LinkedIn-style headline. Max ~80 characters. */
  headline: Localized;
  /** 1–2 sentences that accompany the headline in the hero. */
  summary: Localized;
  /** Paragraphs for the "About" section (2–3 short paragraphs). */
  about: Localized<string[]>;
  location?: Localized;
  email: string;
  /** At-a-glance facts shown next to the name in the hero (3–4 rows). */
  snapshot?: { label: Localized; value: Localized }[];
  /** Path inside /public per language. Falls back to the English file if the other is missing. */
  cvUrl?: Localized;
  /** Short availability text, e.g. "Open to new opportunities". */
  availability?: Localized;
  socials: {
    github: string;
    linkedin: string;
    x?: string;
  };
};

export type Experience = {
  company: string;
  companyUrl?: string;
  role: Localized;
  /** Format "YYYY-MM". */
  start: string;
  /** Format "YYYY-MM", or null if it's your current role. */
  end: string | null;
  location?: Localized;
  type?: "full-time" | "freelance" | "internship" | "contract";
  /** 2–3 achievements. Ideally verb + what you did + measurable result. */
  highlights: Localized<string[]>;
  stack: string[];
};

export type SkillGroup = {
  category: Localized;
  /** Tech names are plain strings; anything that reads differently per language is Localized. */
  items: (string | Localized)[];
};

/** GitHub repos you want to highlight with extra information. */
export type Project = {
  slug: string;
  name: Localized;
  /** "user/repo". Used to look up the GitHub API (stars, last commit). */
  repo: string;
  description: Localized;
  stack: string[];
  /** What makes the project technically interesting (2–4 points). */
  highlights?: Localized<string[]>;
  demoUrl?: string;
  /** Path inside /public, e.g. "/projects/ticketing.png" (16:10). */
  image?: string;
  /** The featured one appears first and larger. */
  featured?: boolean;
};

/** Deployed apps used by real people. */
export type Product = {
  slug: string;
  name: string;
  url: string;
  /** One line: what it is. */
  tagline: Localized;
  /** What problem it solves and for whom. */
  problem: Localized;
  /** What you did (everything, the frontend, the design…). */
  role: Localized;
  stack: string[];
  /** 1600×1000 screenshot in /public/products. */
  image: string;
  status: "live" | "beta";
  /** Optional but very powerful: users, downloads, revenue… */
  metrics?: Localized;
  repo?: string;
};
