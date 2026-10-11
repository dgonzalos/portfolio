"use client";

import { useEffect, useId, useState } from "react";
import { sections } from "@/lib/navigation";
import styles from "./MobileMenu.module.css";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.button}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.bars} data-open={open} aria-hidden="true" />
        <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
      </button>

      <nav id={panelId} aria-label="Sections" className={styles.panel} data-open={open} hidden={!open}>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className={styles.link} onClick={() => setOpen(false)}>
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
