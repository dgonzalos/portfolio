export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "products", label: "Products" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export function sectionLabel(id: SectionId): string {
  return sections.find((section) => section.id === id)!.label;
}
