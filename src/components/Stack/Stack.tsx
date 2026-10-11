import { getI18n } from "@/i18n/server";
import styles from "./Stack.module.css";

/** Compact list of technologies. */
export async function Stack({ items, label }: { items: string[]; label?: string }) {
  if (items.length === 0) return null;
  const { dict } = await getI18n();

  return (
    <ul className={styles.stack} aria-label={label ?? dict.stack}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
