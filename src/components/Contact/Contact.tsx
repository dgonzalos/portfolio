import { profile } from "@/content/profile";
import { isPlaceholder } from "@/lib/format";
import { Section } from "../Section/Section";
import { GitHubIcon, LinkedInIcon } from "../Icons";
import styles from "./Contact.module.css";

export function Contact() {
  const socials = [
    { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedInIcon },
    { label: "GitHub", href: profile.socials.github, Icon: GitHubIcon },
  ].filter((social) => !isPlaceholder(social.href));

  return (
    <Section id="contacto">
      <div className={styles.contact}>
        <p className={styles.lead}>¿Tienes un proyecto o una vacante en mente? Escríbeme.</p>
        <a href={`mailto:${profile.email}`} className={styles.email}>
          {profile.email}
        </a>
        {socials.length > 0 && (
          <ul className={styles.socials}>
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" className={styles.social}>
                  <Icon className={styles.icon} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}
