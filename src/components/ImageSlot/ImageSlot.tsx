import Image from "next/image";
import { publicFileExists } from "@/lib/assets";
import styles from "./ImageSlot.module.css";

type ImageSlotProps = {
  src?: string;
  alt: string;
  /** Placeholder text while the image doesn't exist. */
  fallback: string;
  sizes?: string;
  className?: string;
};

/**
 * 16:10 image from /public. If the file doesn't exist yet, shows a placeholder
 * with the project name and the expected path, so you know what's missing.
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
          {src && <span className={styles.placeholderPath}>Add public{src}</span>}
        </div>
      )}
    </div>
  );
}
