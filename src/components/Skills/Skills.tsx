import { skills } from "@/content/skills";
import { getI18n } from "@/i18n/server";
import { Section } from "../Section/Section";
import styles from "./Skills.module.css";

export async function Skills() {
  const { t } = await getI18n();

  return (
    <Section id="skills">
      <dl className={styles.groups}>
        {skills.map((group) => (
          <div key={group.category.en} className={styles.group}>
            <dt className={styles.category}>{t(group.category)}</dt>
            <dd className={styles.items}>
              <ul>
                {group.items.map((item) => (
                  <li key={t(item)}>{t(item)}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
