"use client";

import Image from "next/image";
import { gallery } from "@/lib/brand";

function MosaicMedia({
  item,
  priority,
}: {
  item: (typeof gallery)[number];
  priority: boolean;
}) {
  if (item.type === "video") {
    return (
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
        style={{ aspectRatio: `${item.width} / ${item.height}` }}
      />
    );
  }

  return (
    <Image
      src={item.src}
      alt={item.alt}
      width={item.width}
      height={item.height}
      sizes="(max-width: 520px) 50vw, (max-width: 768px) 33vw, (max-width: 1100px) 25vw, (max-width: 1500px) 20vw, 16vw"
      priority={priority}
      className="mosaic__media mosaic__media--image"
    />
  );
}

export function MosaicGallery() {
  if (gallery.length === 0) {
    return null;
  }

  return (
    <section className="mosaic-feed" aria-label="Taropa — craft and atelier">
      <div className="mosaic">
        {gallery.map((item, index) => (
          <div key={item.id} className="mosaic__cell">
            <figure
              className={`mosaic__figure${item.type === "video" ? " mosaic__figure--video" : ""}`}
            >
              <MosaicMedia item={item} priority={index < 4} />
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}
