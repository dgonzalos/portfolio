import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Comprueba si un archivo existe en /public. Permite que el contenido
 * apunte a imágenes que todavía no has añadido sin romper la página:
 * mientras falten, se muestra un marcador.
 */
export function publicFileExists(src: string | undefined): src is string {
  if (!src || !src.startsWith("/")) return false;
  return existsSync(path.join(process.cwd(), "public", src));
}
