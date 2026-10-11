export const sections = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "habilidades", label: "Habilidades" },
  { id: "proyectos", label: "Proyectos" },
  { id: "productos", label: "Productos" },
  { id: "contacto", label: "Contacto" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export function sectionLabel(id: SectionId): string {
  return sections.find((section) => section.id === id)!.label;
}
