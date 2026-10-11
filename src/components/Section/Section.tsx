import { sectionLabel, type SectionId } from "@/lib/navigation";
import styles from "./Section.module.css";

type SectionProps = {
  id: SectionId;
  /** Defaults to the section's name in the navigation. */
  title?: string;
  intro?: string;
  tone?: "default" | "surface";
  children: React.ReactNode;
};

/** Section with the title in a fixed side column and the content on the right. */
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
