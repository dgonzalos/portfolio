import { projects } from "@/content/projects";
import type { Project } from "@/content/types";
import { getI18n } from "@/i18n/server";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { formatRelative, isPlaceholder } from "@/lib/format";
import { getRepoStats, repoUrl, type RepoStats } from "@/lib/github";
import { Section } from "../Section/Section";
import { Stack } from "../Stack/Stack";
import { ImageSlot } from "../ImageSlot/ImageSlot";
import { ExternalIcon, GitHubIcon, StarIcon } from "../Icons";
import styles from "./Projects.module.css";

export async function Projects() {
  const { locale, dict, t } = await getI18n();
  const stats = await Promise.all(projects.map((project) => getRepoStats(project.repo)));
  const withStats = projects.map((project, index) => ({ project, stats: stats[index] }));

  const featured = withStats.find(({ project }) => project.featured);
  const rest = withStats.filter((item) => item !== featured);

  return (
    <Section id="projects" intro={dict.projects.intro}>
      {featured && (
        <article className={styles.featured}>
          <ImageSlot
            src={featured.project.image}
            alt={`${dict.screenshotOf} ${t(featured.project.name)}`}
            fallback={t(featured.project.name)}
          />
          <div className={styles.featuredBody}>
            <ProjectHeader name={t(featured.project.name)} stats={featured.stats} locale={locale} dict={dict} large />
            <p className={styles.description}>{t(featured.project.description)}</p>
            <Highlights items={featured.project.highlights && t(featured.project.highlights)} />
            <Stack items={featured.project.stack} />
            <ProjectLinks project={featured.project} dict={dict} />
          </div>
        </article>
      )}

      {rest.length > 0 && (
        <ul className={styles.list}>
          {rest.map(({ project, stats }) => (
            <li key={project.slug} className={styles.row}>
              <ProjectHeader name={t(project.name)} stats={stats} locale={locale} dict={dict} />
              <p className={styles.description}>{t(project.description)}</p>
              <Highlights items={project.highlights && t(project.highlights)} />
              <Stack items={project.stack} />
              <ProjectLinks project={project} dict={dict} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

type ProjectHeaderProps = {
  name: string;
  stats: RepoStats | null;
  locale: Locale;
  dict: Dictionary;
  large?: boolean;
};

function ProjectHeader({ name, stats, locale, dict, large }: ProjectHeaderProps) {
  return (
    <div className={styles.header}>
      <h3 className={large ? styles.titleLarge : styles.title}>{name}</h3>
      {stats && (
        <p className={styles.stats}>
          <span className={styles.stars}>
            <StarIcon className={styles.statIcon} />
            {stats.stars}
            <span className="visually-hidden"> {dict.projects.stars}</span>
          </span>
          <span>
            {dict.projects.updated} {formatRelative(stats.pushedAt, locale)}
          </span>
        </p>
      )}
    </div>
  );
}

function Highlights({ items }: { items?: string[] }) {
  if (!items?.length) return null;

  return (
    <ul className={styles.highlights}>
      {items.map((highlight) => (
        <li key={highlight}>{highlight}</li>
      ))}
    </ul>
  );
}

function ProjectLinks({ project, dict }: { project: Project; dict: Dictionary }) {
  const code = repoUrl(project.repo);
  const demo = project.demoUrl && !isPlaceholder(project.demoUrl) ? project.demoUrl : null;
  if (!code && !demo) return null;

  return (
    <p className={styles.links}>
      {code && (
        <a href={code} target="_blank" rel="noreferrer" className={styles.link}>
          <GitHubIcon className={styles.linkIcon} />
          {dict.projects.code}
        </a>
      )}
      {demo && (
        <a href={demo} target="_blank" rel="noreferrer" className={styles.link}>
          <ExternalIcon className={styles.linkIcon} />
          {dict.projects.demo}
        </a>
      )}
    </p>
  );
}
