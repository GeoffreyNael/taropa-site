import Image from "next/image";
import { gallery } from "@/lib/brand";

export function MosaicGallery() {
  if (gallery.length === 0) {
    return null;
  }

  return (
    <section className="mosaic" aria-label="Galerie lifestyle">
      {gallery.map((item, index) => (
        <figure key={item.id} className="mosaic__item">
          {item.type === "video" ? (
            <video
              className="mosaic__media mosaic__media--video"
              src={item.src}
              poster={item.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label={item.alt}
            />
          ) : (
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 767px) 50vw, 25vw"
              priority={index < 4}
              className="mosaic__media"
            />
          )}
        </figure>
      ))}
    </section>
  );
}
