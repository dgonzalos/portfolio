import { intlLocale, type Locale } from "@/i18n/config";

const monthYear = Object.fromEntries(
  Object.entries(intlLocale).map(([locale, tag]) => [locale, new Intl.DateTimeFormat(tag, { month: "short", year: "numeric" })]),
) as Record<Locale, Intl.DateTimeFormat>;

const relative = Object.fromEntries(
  Object.entries(intlLocale).map(([locale, tag]) => [locale, new Intl.RelativeTimeFormat(tag, { numeric: "auto" })]),
) as Record<Locale, Intl.RelativeTimeFormat>;

/** "2024-01" → "Jan 2024" / "ene 2024" */
export function formatMonth(value: string, locale: Locale): string {
  const [year, month] = value.split("-").map(Number);
  if (!year || !month) return value;
  return monthYear[locale].format(new Date(Date.UTC(year, month - 1, 15))).replace(".", "");
}

/** "2024-01", null, "Present" → "Jan 2024 – Present" */
export function formatRange(start: string, end: string | null, locale: Locale, present: string): string {
  return `${formatMonth(start, locale)} – ${end ? formatMonth(end, locale) : present}`;
}

/** ISO date → "3 days ago" / "hace 3 días" */
export function formatRelative(iso: string, locale: Locale): string {
  const diffDays = Math.round((new Date(iso).getTime() - Date.now()) / 86_400_000);
  if (Math.abs(diffDays) < 30) return relative[locale].format(diffDays, "day");
  const diffMonths = Math.round(diffDays / 30);
  if (Math.abs(diffMonths) < 12) return relative[locale].format(diffMonths, "month");
  return relative[locale].format(Math.round(diffMonths / 12), "year");
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
