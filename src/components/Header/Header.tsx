import { profile } from "@/content/profile";
import { getI18n } from "@/i18n/server";
import { firstPublicFile } from "@/lib/assets";
import { sectionIds } from "@/lib/navigation";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import styles from "./Header.module.css";

export async function Header() {
  const { locale, dict } = await getI18n();
  const firstName = profile.name.split(" ")[0];
  const cvUrl = firstPublicFile(profile.cvUrl?.[locale], profile.cvUrl?.en);
  const sections = sectionIds.map((id) => ({ id, label: dict.nav[id] }));

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#home" className={styles.brand}>
          {firstName}
          <span className={styles.dot} aria-hidden="true" />
        </a>

        <nav aria-label={dict.navLabel} className={styles.nav}>
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
          {cvUrl && (
            <a href={cvUrl} className={styles.cv} download>
              {dict.downloadCv}
            </a>
          )}
          <LanguageSwitcher current={locale} labels={dict.language} />
          <ThemeToggle labels={dict.theme} />
          <MobileMenu sections={sections} labels={{ ...dict.menu, nav: dict.navLabel }} />
        </div>
      </div>
    </header>
  );
}
