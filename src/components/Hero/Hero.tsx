import Image from "next/image";
import { profile } from "@/content/profile";
import { publicFileExists } from "@/lib/assets";
import { isPlaceholder } from "@/lib/format";
import { GitHubIcon, LinkedInIcon } from "../Icons";
import styles from "./Hero.module.css";

export function Hero() {
  const nameParts = profile.name.split(" ");
  const hasAvatar = publicFileExists(profile.avatar);
  const hasCv = publicFileExists(profile.cvUrl);

  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-name">
      <div className={styles.inner}>
        <div className={styles.text}>
          {profile.availability && (
            <p className={styles.availability}>
              <span className={styles.pulse} aria-hidden="true" />
              {profile.availability}
            </p>
          )}

          <h1 id="hero-name" className={styles.name}>
            {nameParts.map((part, index) => (
              <span key={index} className={styles.namePart} style={{ "--i": index } as React.CSSProperties}>
                {part}
              </span>
            ))}
          </h1>

          <p className={styles.headline}>{profile.headline}</p>
          <p className={styles.summary}>{profile.summary}</p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primary}>
              View projects
            </a>
            {hasCv && (
              <a href={profile.cvUrl} className={styles.secondary} download>
                Download CV
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

        {hasAvatar && (
          <div className={styles.avatar}>
            <Image src={profile.avatar!} alt={`Photo of ${profile.name}`} width={400} height={400} priority />
          </div>
        )}
      </div>
    </section>
  );
}
