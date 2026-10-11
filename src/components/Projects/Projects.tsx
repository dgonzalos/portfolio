import { projects } from "@/content/projects";
import type { Project } from "@/content/types";
import { formatRelative, isPlaceholder } from "@/lib/format";
import { getRepoStats, repoUrl, type RepoStats } from "@/lib/github";
import { Section } from "../Section/Section";
import { Stack } from "../Stack/Stack";
import { ImageSlot } from "../ImageSlot/ImageSlot";
import { ExternalIcon, GitHubIcon, StarIcon } from "../Icons";
import styles from "./Projects.module.css";

export async function Projects() {
  const stats = await Promise.all(projects.map((project) => getRepoStats(project.repo)));
  const withStats = projects.map((project, index) => ({ project, stats: stats[index] }));

  const featured = withStats.find(({ project }) => project.featured);
  const rest = withStats.filter((item) => item !== featured);

  return (
    <Section id="projects" intro="Open source on GitHub.">
      {featured && (
        <article className={styles.featured}>
          <ImageSlot
            src={featured.project.image}
            alt={`Screenshot of ${featured.project.name}`}
            fallback={featured.project.name}
          />
          <div className={styles.featuredBody}>
            <ProjectHeader project={featured.project} stats={featured.stats} large />
            <p className={styles.description}>{featured.project.description}</p>
            <Highlights items={featured.project.highlights} />
            <Stack items={featured.project.stack} />
            <ProjectLinks project={featured.project} />
          </div>
        </article>
      )}

      {rest.length > 0 && (
        <ul className={styles.list}>
          {rest.map(({ project, stats }) => (
            <li key={project.slug} className={styles.row}>
              <ProjectHeader project={project} stats={stats} />
              <p className={styles.description}>{project.description}</p>
              <Highlights items={project.highlights} />
              <Stack items={project.stack} />
              <ProjectLinks project={project} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

function ProjectHeader({ project, stats, large }: { project: Project; stats: RepoStats | null; large?: boolean }) {
  return (
    <div className={styles.header}>
      <h3 className={large ? styles.titleLarge : styles.title}>{project.name}</h3>
      {stats && (
        <p className={styles.stats}>
          <span className={styles.stars}>
            <StarIcon className={styles.statIcon} />
            {stats.stars}
            <span className="visually-hidden"> stars</span>
          </span>
          <span>Updated {formatRelative(stats.pushedAt)}</span>
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

function ProjectLinks({ project }: { project: Project }) {
  const code = repoUrl(project.repo);
  const demo = project.demoUrl && !isPlaceholder(project.demoUrl) ? project.demoUrl : null;
  if (!code && !demo) return null;

  return (
    <p className={styles.links}>
      {code && (
        <a href={code} target="_blank" rel="noreferrer" className={styles.link}>
          <GitHubIcon className={styles.linkIcon} />
          Code
        </a>
      )}
      {demo && (
        <a href={demo} target="_blank" rel="noreferrer" className={styles.link}>
          <ExternalIcon className={styles.linkIcon} />
          Demo
        </a>
      )}
    </p>
  );
}
