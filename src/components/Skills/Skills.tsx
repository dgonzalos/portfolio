import { skills } from "@/content/skills";
import { Section } from "../Section/Section";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <Section id="skills">
      <dl className={styles.groups}>
        {skills.map((group) => (
          <div key={group.category} className={styles.group}>
            <dt className={styles.category}>{group.category}</dt>
            <dd className={styles.items}>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
