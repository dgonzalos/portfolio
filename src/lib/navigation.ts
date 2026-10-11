/** Section anchors, in menu order. Labels live in the dictionaries (src/i18n). */
export const sectionIds = ["home", "about", "experience", "skills", "projects", "products", "contact"] as const;

export type SectionId = (typeof sectionIds)[number];
