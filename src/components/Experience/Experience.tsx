import { experience } from "@/content/experience";
import { getI18n } from "@/i18n/server";
import { formatRange, isPlaceholder } from "@/lib/format";
import { Section } from "../Section/Section";
import { Stack } from "../Stack/Stack";
import styles from "./Experience.module.css";

export async function Experience() {
  const { locale, dict, t } = await getI18n();

  return (
    <Section id="experience" tone="surface">
      <ol className={styles.timeline}>
        {experience.map((job) => {
          const current = job.end === null;
          const meta = [job.location && t(job.location), job.type && dict.experience.type[job.type]].filter(Boolean).join(", ");

          return (
            <li key={`${job.company}-${job.start}`} className={styles.job} data-current={current}>
              <p className={styles.dates}>
                <time dateTime={job.start}>{formatRange(job.start, job.end, locale, dict.experience.present)}</time>
              </p>
              <h3 className={styles.role}>{t(job.role)}</h3>
              <p className={styles.company}>
                {job.companyUrl && !isPlaceholder(job.companyUrl) ? (
                  <a href={job.companyUrl} target="_blank" rel="noreferrer">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
                {meta && <span className={styles.meta}>{meta}</span>}
              </p>
              <ul className={styles.highlights}>
                {t(job.highlights).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <Stack items={job.stack} />
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
