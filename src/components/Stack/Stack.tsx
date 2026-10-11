import styles from "./Stack.module.css";

/** Lista compacta de tecnologías. */
export function Stack({ items, label = "Tecnologías" }: { items: string[]; label?: string }) {
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
