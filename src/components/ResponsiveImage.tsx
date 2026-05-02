import { ImgHTMLAttributes, useMemo } from "react";

// Eagerly collect all webp variants in src/assets so we can resolve hashed URLs
const webpUrls = import.meta.glob("/src/assets/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const byBasename: Record<string, string> = {};
for (const [path, url] of Object.entries(webpUrls)) {
  const name = path.split("/").pop()!.replace(/\.webp$/, "");
  byBasename[name] = url;
}

interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Imported jpg/png url (Vite asset) */
  src: string;
  alt: string;
  /** Optional sizes attribute (default tuned for cards) */
  sizes?: string;
  /** Set true for above-the-fold hero (skip lazy + add fetchpriority) */
  eager?: boolean;
}

/**
 * Renders <picture> with a WebP srcset (480/800/full) + original fallback.
 * Looks up webp variants by the original filename's base in src/assets.
 */
const ResponsiveImage = ({
  src,
  alt,
  sizes = "(max-width: 640px) 480px, (max-width: 1024px) 800px, 100vw",
  eager = false,
  className,
  ...rest
}: ResponsiveImageProps) => {
  const sources = useMemo(() => {
    // src looks like "/assets/blog-love-relationships-DEADBEEF.jpg"
    const file = src.split("/").pop() ?? "";
    const base = file.replace(/-[A-Za-z0-9]+\.(jpg|jpeg|png|webp)$/i, "").replace(/\.(jpg|jpeg|png|webp)$/i, "");
    const full = byBasename[base];
    const w480 = byBasename[`${base}-480`];
    const w800 = byBasename[`${base}-800`];
    if (!full && !w480 && !w800) return null;
    const srcset = [
      w480 && `${w480} 480w`,
      w800 && `${w800} 800w`,
      full && `${full} 1600w`,
    ]
      .filter(Boolean)
      .join(", ");
    return { srcset };
  }, [src]);

  const imgEl = (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      {...(eager ? { fetchPriority: "high" as never } : {})}
      {...rest}
    />
  );

  if (!sources) return imgEl;

  return (
    <picture>
      <source type="image/webp" srcSet={sources.srcset} sizes={sizes} />
      {imgEl}
    </picture>
  );
};

export default ResponsiveImage;
