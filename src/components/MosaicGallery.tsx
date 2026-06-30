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
    );
  }

  return (
    <Image
      src={item.src}
      alt={item.alt}
      fill
      sizes="(max-width: 520px) 50vw, (max-width: 768px) 33vw, (max-width: 1100px) 25vw, (max-width: 1500px) 20vw, 16vw"
      priority={priority}
      className="mosaic__media"
    />
  );
}

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
    <section className="mosaic-feed" aria-label="Taropa — craft and atelier">
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
              : { colSpan: 1, rowSpan: 36 };

          return (
            <div
              key={item.id}
              className="mosaic__cell"
              style={
                {
                  "--col-span": layout.colSpan,
                  "--row-span": layout.rowSpan,
                } as CSSProperties
              }
            >
              <figure
                className={`mosaic__figure${item.type === "video" ? " mosaic__figure--video" : ""}`}
              >
                <MosaicMedia item={item} priority={index < 4} />
              </figure>
            </div>
          );
        })}
      </div>
    </section>
  );
}
