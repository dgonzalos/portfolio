const monthYear = new Intl.DateTimeFormat("es-ES", { month: "short", year: "numeric" });

/** "2024-01" → "ene 2024" */
export function formatMonth(value: string): string {
  const [year, month] = value.split("-").map(Number);
  if (!year || !month) return value;
  return monthYear.format(new Date(Date.UTC(year, month - 1, 15))).replace(".", "");
}

/** "2024-01", null → "ene 2024 – actualidad" */
export function formatRange(start: string, end: string | null): string {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : "actualidad"}`;
}

const relative = new Intl.RelativeTimeFormat("es-ES", { numeric: "auto" });

/** ISO date → "hace 3 días" */
export function formatRelative(iso: string): string {
  const diffDays = Math.round((new Date(iso).getTime() - Date.now()) / 86_400_000);
  if (Math.abs(diffDays) < 30) return relative.format(diffDays, "day");
  const diffMonths = Math.round(diffDays / 30);
  if (Math.abs(diffMonths) < 12) return relative.format(diffMonths, "month");
  return relative.format(Math.round(diffMonths / 12), "year");
}

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter((part) => part && !part.startsWith("TODO"))
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

/** true if the value is still a template placeholder */
export function isPlaceholder(value: string | undefined): boolean {
  return !value || value.includes("TODO");
}
