import { profile } from "@/content/profile";
import { Section } from "../Section/Section";
import styles from "./About.module.css";

export function About() {
  return (
    <Section id="about">
      <div className={styles.about}>
        {profile.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {profile.location && <p className={styles.location}>{profile.location}</p>}
      </div>
    </Section>
  );
}
