import Image from "next/image";
import { publicFileExists } from "@/lib/assets";
import styles from "./ImageSlot.module.css";

type ImageSlotProps = {
  src?: string;
  alt: string;
  /** Texto del marcador mientras no exista la imagen. */
  fallback: string;
  sizes?: string;
  className?: string;
};

/**
 * Imagen 16:10 de /public. Si el archivo aún no existe, muestra un marcador
 * con el nombre del proyecto y la ruta que espera, para saber qué falta.
 */
export function ImageSlot({ src, alt, fallback, sizes = "(max-width: 52rem) 100vw, 50vw", className }: ImageSlotProps) {
  const exists = publicFileExists(src);

  return (
    <div className={`${styles.slot} ${className ?? ""}`}>
      {exists ? (
        <Image src={src} alt={alt} fill sizes={sizes} className={styles.image} />
      ) : (
        <div className={styles.placeholder}>
          <span className={styles.placeholderName}>{fallback}</span>
          {src && <span className={styles.placeholderPath}>Añade public{src}</span>}
        </div>
      )}
    </div>
  );
}
