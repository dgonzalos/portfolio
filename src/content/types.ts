// Portfolio content types.
// You don't need to touch this to fill in the content.

export type Profile = {
  name: string;
  /** LinkedIn-style headline. Max ~80 characters. */
  headline: string;
  /** 1–2 sentences that accompany the headline in the hero. */
  summary: string;
  /** Paragraphs for the "About" section (2–3 short paragraphs). */
  about: string[];
  location?: string;
  email: string;
  /** Path inside /public, e.g. "/avatar.jpg" (square, min. 400×400). */
  avatar?: string;
  /** Path inside /public, e.g. "/cv-diego.pdf". */
  cvUrl?: string;
  /** Short availability text, e.g. "Open to new opportunities". */
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
  /** Format "YYYY-MM". */
  start: string;
  /** Format "YYYY-MM", or null if it's your current role. */
  end: string | null;
  location?: string;
  type?: "full-time" | "freelance" | "internship" | "contract";
  /** 2–3 achievements. Ideally verb + what you did + measurable result. */
  highlights: string[];
  stack: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

/** GitHub repos you want to highlight with extra information. */
export type Project = {
  slug: string;
  name: string;
  /** "user/repo". Used to look up the GitHub API (stars, last commit). */
  repo: string;
  description: string;
  stack: string[];
  /** What makes the project technically interesting (2–4 points). */
  highlights?: string[];
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
  tagline: string;
  /** What problem it solves and for whom. */
  problem: string;
  /** What you did (everything, the frontend, the design…). */
  role: string;
  stack: string[];
  /** 1600×1000 screenshot in /public/products. */
  image: string;
  status: "live" | "beta";
  /** Optional but very powerful: users, downloads, revenue… */
  metrics?: string;
  repo?: string;
};
