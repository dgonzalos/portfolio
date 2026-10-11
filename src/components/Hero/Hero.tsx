import { profile } from "@/content/profile";
import { getI18n } from "@/i18n/server";
import { firstPublicFile } from "@/lib/assets";
import { isPlaceholder } from "@/lib/format";
import { GitHubIcon, LinkedInIcon } from "../Icons";
import styles from "./Hero.module.css";

export async function Hero() {
  const { locale, dict, t } = await getI18n();
  const nameParts = profile.name.split(" ");
  const cvUrl = firstPublicFile(profile.cvUrl?.[locale], profile.cvUrl?.en);

  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-name">
      <div className={styles.inner}>
        <div className={styles.text}>
          {profile.availability && (
            <p className={styles.availability}>
              <span className={styles.pulse} aria-hidden="true" />
              {t(profile.availability)}
            </p>
          )}

          <h1 id="hero-name" className={styles.name}>
            {nameParts.map((part, index) => (
              <span key={index} className={styles.namePart} style={{ "--i": index } as React.CSSProperties}>
                {part}
              </span>
            ))}
          </h1>

          <p className={styles.headline}>{t(profile.headline)}</p>
          <p className={styles.summary}>{t(profile.summary)}</p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primary}>
              {dict.hero.viewProjects}
            </a>
            {cvUrl && (
              <a href={cvUrl} className={styles.secondary} download>
                {dict.downloadCv}
              </a>
            )}
            <ul className={styles.socials}>
              {!isPlaceholder(profile.socials.github) && (
                <li>
                  <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <GitHubIcon className={styles.icon} />
                  </a>
                </li>
              )}
              {!isPlaceholder(profile.socials.linkedin) && (
                <li>
                  <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <LinkedInIcon className={styles.icon} />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {profile.snapshot && profile.snapshot.length > 0 && (
          <dl className={styles.snapshot}>
            {profile.snapshot.map((fact) => (
              <div key={fact.label.en} className={styles.fact}>
                <dt>{t(fact.label)}</dt>
                <dd>{t(fact.value)}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
