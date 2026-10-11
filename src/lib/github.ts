import "server-only";
import { isPlaceholder } from "./format";

export type RepoStats = {
  stars: number;
  pushedAt: string;
  language: string | null;
};

const REVALIDATE_SECONDS = 60 * 60 * 6; // 6 hours

export function repoUrl(repo: string): string | null {
  return isPlaceholder(repo) ? null : `https://github.com/${repo}`;
}

/**
 * Stars, last push and language of a public repo.
 * Cached and revalidated every 6 hours. If GitHub fails or the repo
 * is still a placeholder, returns null and the card renders without stats.
 */
export async function getRepoStats(repo: string): Promise<RepoStats | null> {
  if (isPlaceholder(repo) || !/^[\w.-]+\/[\w.-]+$/.test(repo)) return null;

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers,
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;

    const data = (await res.json()) as {
      stargazers_count: number;
      pushed_at: string;
      language: string | null;
    };
    return { stars: data.stargazers_count, pushedAt: data.pushed_at, language: data.language };
  } catch {
    return null;
  }
}
