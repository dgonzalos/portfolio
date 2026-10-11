import { products } from "@/content/products";
import { isPlaceholder } from "@/lib/format";
import { repoUrl } from "@/lib/github";
import { Section } from "../Section/Section";
import { Stack } from "../Stack/Stack";
import { ImageSlot } from "../ImageSlot/ImageSlot";
import styles from "./Products.module.css";

const statusLabel = { live: "En producción", beta: "Beta" } as const;

export function Products() {
  return (
    <Section id="productos" tone="surface" intro="Aplicaciones desplegadas que puedes usar hoy.">
      <div className={styles.products}>
        {products.map((product) => {
          const code = product.repo ? repoUrl(product.repo) : null;
          const live = !isPlaceholder(product.url);

          return (
            <article key={product.slug} className={styles.product}>
              <ImageSlot src={product.image} alt={`Captura de ${product.name}`} fallback={product.name} />

              <div className={styles.body}>
                <p className={styles.status} data-status={product.status}>
                  {statusLabel[product.status]}
                </p>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.tagline}>{product.tagline}</p>

                <dl className={styles.facts}>
                  <div>
                    <dt>Problema</dt>
                    <dd>{product.problem}</dd>
                  </div>
                  <div>
                    <dt>Mi papel</dt>
                    <dd>{product.role}</dd>
                  </div>
                  {product.metrics && (
                    <div>
                      <dt>Resultado</dt>
                      <dd className={styles.metric}>{product.metrics}</dd>
                    </div>
                  )}
                </dl>

                <Stack items={product.stack} />

                <p className={styles.actions}>
                  {live && (
                    <a href={product.url} target="_blank" rel="noreferrer" className={styles.open}>
                      Abrir {product.name}
                    </a>
                  )}
                  {code && (
                    <a href={code} target="_blank" rel="noreferrer" className={styles.code}>
                      Ver código
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
