import { profile } from "@/content/profile";
import { publicFileExists } from "@/lib/assets";
import { sections } from "@/lib/navigation";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import styles from "./Header.module.css";

export function Header() {
  const firstName = profile.name.split(" ")[0];
  const hasCv = publicFileExists(profile.cvUrl);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#home" className={styles.brand}>
          {firstName}
          <span className={styles.dot} aria-hidden="true" />
        </a>

        <nav aria-label="Sections" className={styles.nav}>
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
          {hasCv && (
            <a href={profile.cvUrl} className={styles.cv} download>
              Download CV
            </a>
          )}
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
