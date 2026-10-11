import { profile } from "@/content/profile";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Hecho con Next.js y desplegado en Vercel</p>
      </div>
    </footer>
  );
}
