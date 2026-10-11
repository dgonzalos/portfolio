import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Checks whether a file exists in /public. Lets content point to images
 * you haven't added yet without breaking the page: while they're missing,
 * a placeholder is shown.
 */
export function publicFileExists(src: string | undefined): src is string {
  if (!src || !src.startsWith("/")) return false;
  return existsSync(path.join(process.cwd(), "public", src));
}

/** First path that exists in /public, e.g. a localized file with the English one as fallback. */
export function firstPublicFile(...candidates: (string | undefined)[]): string | undefined {
  return candidates.find(publicFileExists);
}
