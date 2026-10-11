import { sectionLabel, type SectionId } from "@/lib/navigation";
import styles from "./Section.module.css";

type SectionProps = {
  id: SectionId;
  /** Por defecto, el nombre de la sección en la navegación. */
  title?: string;
  intro?: string;
  tone?: "default" | "surface";
  children: React.ReactNode;
};

/** Sección con el título en una columna lateral fija y el contenido a la derecha. */
export function Section({ id, title, intro, tone = "default", children }: SectionProps) {
  const headingId = `${id}-titulo`;

  return (
    <section id={id} aria-labelledby={headingId} className={styles.section} data-tone={tone}>
      <div className={styles.inner}>
        <header className={styles.aside}>
          <h2 id={headingId} className={styles.title}>
            {title ?? sectionLabel(id)}
          </h2>
          {intro && <p className={styles.intro}>{intro}</p>}
        </header>
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
}
