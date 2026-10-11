import { products } from "@/content/products";
import { isPlaceholder } from "@/lib/format";
import { repoUrl } from "@/lib/github";
import { Section } from "../Section/Section";
import { Stack } from "../Stack/Stack";
import { ImageSlot } from "../ImageSlot/ImageSlot";
import styles from "./Products.module.css";

const statusLabel = { live: "Live", beta: "Beta" } as const;

export function Products() {
  return (
    <Section id="products" tone="surface" intro="Deployed apps you can use today.">
      <div className={styles.products}>
        {products.map((product) => {
          const code = product.repo ? repoUrl(product.repo) : null;
          const live = !isPlaceholder(product.url);

          return (
            <article key={product.slug} className={styles.product}>
              <ImageSlot src={product.image} alt={`Screenshot of ${product.name}`} fallback={product.name} />

              <div className={styles.body}>
                <p className={styles.status} data-status={product.status}>
                  {statusLabel[product.status]}
                </p>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.tagline}>{product.tagline}</p>

                <dl className={styles.facts}>
                  <div>
                    <dt>Problem</dt>
                    <dd>{product.problem}</dd>
                  </div>
                  <div>
                    <dt>My role</dt>
                    <dd>{product.role}</dd>
                  </div>
                  {product.metrics && (
                    <div>
                      <dt>Impact</dt>
                      <dd className={styles.metric}>{product.metrics}</dd>
                    </div>
                  )}
                </dl>

                <Stack items={product.stack} />

                <p className={styles.actions}>
                  {live && (
                    <a href={product.url} target="_blank" rel="noreferrer" className={styles.open}>
                      Open {product.name}
                    </a>
                  )}
                  {code && (
                    <a href={code} target="_blank" rel="noreferrer" className={styles.code}>
                      View code
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
