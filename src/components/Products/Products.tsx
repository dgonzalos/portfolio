import { products } from "@/content/products";
import { getI18n } from "@/i18n/server";
import { isPlaceholder } from "@/lib/format";
import { repoUrl } from "@/lib/github";
import { Section } from "../Section/Section";
import { Stack } from "../Stack/Stack";
import { ImageSlot } from "../ImageSlot/ImageSlot";
import styles from "./Products.module.css";

export async function Products() {
  const { dict, t } = await getI18n();

  return (
    <Section id="products" tone="surface" intro={dict.products.intro}>
      <div className={styles.products}>
        {products.map((product) => {
          const code = product.repo ? repoUrl(product.repo) : null;
          const live = !isPlaceholder(product.url);

          return (
            <article key={product.slug} className={styles.product}>
              <ImageSlot src={product.image} alt={`${dict.screenshotOf} ${product.name}`} fallback={product.name} />

              <div className={styles.body}>
                <p className={styles.status} data-status={product.status}>
                  {dict.products.status[product.status]}
                </p>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.tagline}>{t(product.tagline)}</p>

                <dl className={styles.facts}>
                  <div>
                    <dt>{dict.products.problem}</dt>
                    <dd>{t(product.problem)}</dd>
                  </div>
                  <div>
                    <dt>{dict.products.role}</dt>
                    <dd>{t(product.role)}</dd>
                  </div>
                  {product.metrics && (
                    <div>
                      <dt>{dict.products.impact}</dt>
                      <dd className={styles.metric}>{t(product.metrics)}</dd>
                    </div>
                  )}
                </dl>

                <Stack items={product.stack} />

                <p className={styles.actions}>
                  {live && (
                    <a href={product.url} target="_blank" rel="noreferrer" className={styles.open}>
                      {dict.products.open} {product.name}
                    </a>
                  )}
                  {code && (
                    <a href={code} target="_blank" rel="noreferrer" className={styles.code}>
                      {dict.products.viewCode}
                    </a>
                  )}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
