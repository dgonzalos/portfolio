import { profile } from "@/content/profile";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with Next.js and deployed on Vercel</p>
      </div>
    </footer>
  );
}
