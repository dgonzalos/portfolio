import { profile } from "@/content/profile";
import { getI18n } from "@/i18n/server";
import { Section } from "../Section/Section";
import styles from "./About.module.css";

export async function About() {
  const { t } = await getI18n();

  return (
    <Section id="about">
      <div className={styles.about}>
        {t(profile.about).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {profile.location && <p className={styles.location}>{t(profile.location)}</p>}
      </div>
    </Section>
  );
}
