"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gallery } from "@/lib/brand";
import {
  MOSAIC_GAP,
  MOSAIC_ROW,
  mosaicItemStyle,
} from "@/lib/mosaic-layout";

export function MosaicGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const update = () => setWidth(node.offsetWidth);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (gallery.length === 0) {
    return null;
  }

  const columns = width > 0 ? mosaicItemStyle(gallery[0], width).columns : 2;

  return (
    <section className="mosaic-feed" aria-label="Galerie lifestyle">
      <div
        ref={ref}
        className="mosaic"
        style={
          {
            "--mosaic-cols": columns,
            "--mosaic-gap": `${MOSAIC_GAP}px`,
            "--mosaic-row": `${MOSAIC_ROW}px`,
          } as CSSProperties
        }
      >
        {gallery.map((item, index) => {
          const layout =
            width > 0
              ? mosaicItemStyle(item, width)
              : { colSpan: 1, rowSpan: 30 };

          return (
            <figure
              key={item.id}
              className={
                item.tile === "hero"
                  ? "mosaic__item mosaic__item--banner"
                  : "mosaic__item"
              }
              style={
                {
                  "--col-span": layout.colSpan,
                  "--row-span": layout.rowSpan,
                } as CSSProperties
              }
            >
              {item.type === "video" ? (
                <video
                  className="mosaic__media"
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
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
                  priority={index < 4}
                  className="mosaic__media"
                />
              )}
            </figure>
          );
        })}
      </div>
    </section>
  );
}
