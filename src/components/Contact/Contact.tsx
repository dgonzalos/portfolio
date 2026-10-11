import { profile } from "@/content/profile";
import { getI18n } from "@/i18n/server";
import { isPlaceholder } from "@/lib/format";
import { Section } from "../Section/Section";
import { GitHubIcon, LinkedInIcon } from "../Icons";
import styles from "./Contact.module.css";

export async function Contact() {
  const { dict } = await getI18n();
  const socials = [
    { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedInIcon },
    { label: "GitHub", href: profile.socials.github, Icon: GitHubIcon },
  ].filter((social) => !isPlaceholder(social.href));

  return (
    <Section id="contact">
      <div className={styles.contact}>
        <p className={styles.lead}>{dict.contact.lead}</p>
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
