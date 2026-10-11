import { profile } from "@/content/profile";
import { sections } from "@/lib/navigation";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import styles from "./Header.module.css";

export function Header() {
  const firstName = profile.name.split(" ")[0];

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.brand}>
          {firstName}
          <span className={styles.dot} aria-hidden="true" />
        </a>

        <nav aria-label="Secciones" className={styles.nav}>
          <ul className={styles.links}>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className={styles.link}>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
