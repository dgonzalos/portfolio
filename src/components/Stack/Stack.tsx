import styles from "./Stack.module.css";

/** Compact list of technologies. */
export function Stack({ items, label = "Technologies" }: { items: string[]; label?: string }) {
  if (items.length === 0) return null;

  return (
    <ul className={styles.stack} aria-label={label}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
