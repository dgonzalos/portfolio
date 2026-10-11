import { profile } from "@/content/profile";
import { getI18n } from "@/i18n/server";
import styles from "./Footer.module.css";

export async function Footer() {
  const { dict } = await getI18n();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{dict.footer.builtWith}</p>
      </div>
    </footer>
  );
}
