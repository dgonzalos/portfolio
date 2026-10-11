import { experience } from "@/content/experience";
import { formatRange, isPlaceholder } from "@/lib/format";
import { Section } from "../Section/Section";
import { Stack } from "../Stack/Stack";
import styles from "./Experience.module.css";

const typeLabel = {
  "full-time": "Full-time",
  freelance: "Freelance",
  internship: "Internship",
  contract: "Contract",
} as const;

export function Experience() {
  return (
    <Section id="experience" tone="surface">
      <ol className={styles.timeline}>
        {experience.map((job) => {
          const current = job.end === null;
          const meta = [job.location, job.type && typeLabel[job.type]].filter(Boolean).join(", ");

          return (
            <li key={`${job.company}-${job.start}`} className={styles.job} data-current={current}>
              <p className={styles.dates}>
                <time dateTime={job.start}>{formatRange(job.start, job.end)}</time>
              </p>
              <h3 className={styles.role}>{job.role}</h3>
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
                {job.highlights.map((highlight) => (
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
