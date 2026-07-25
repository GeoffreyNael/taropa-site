"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { gallery, galleryTileRatio, type GalleryItem } from "@/lib/brand";

type PlacedPin = {
  item: GalleryItem;
  top: number;
  left: number;
  width: number;
  height: number;
};

function columnCountForWidth(width: number, itemCount: number): number {
  let cols = 2;
  if (width >= 520) cols = 3;
  if (width >= 900 && itemCount >= 9) cols = 4;
  if (width >= 1300 && itemCount >= 12) cols = 5;
  const maxCols = Math.max(2, Math.ceil(itemCount / 3));
  return Math.min(cols, maxCols);
}

/**
 * Algo Pinterest : pin → colonne la plus courte, puis égalisation du bas.
 */
function layoutPins(boardWidth: number): { pins: PlacedPin[]; boardHeight: number } {
  if (boardWidth <= 0) {
    return { pins: [], boardHeight: 0 };
  }

  const cols = columnCountForWidth(boardWidth, gallery.length);
  const colWidth = boardWidth / cols;
  const colHeights = Array.from({ length: cols }, () => 0);
  const lastPinIndexByCol = Array.from({ length: cols }, () => -1);
  const pins: PlacedPin[] = [];

  for (const item of gallery) {
    let shortest = 0;
    for (let i = 1; i < cols; i += 1) {
      if (colHeights[i] < colHeights[shortest]) shortest = i;
    }

    const ratio = galleryTileRatio[item.tile];
    const height = colWidth / ratio;

    lastPinIndexByCol[shortest] = pins.length;
    pins.push({
      item,
      top: colHeights[shortest],
      left: shortest * colWidth,
      width: colWidth,
      height,
    });

    colHeights[shortest] += height;
  }

  const boardHeight = Math.max(0, ...colHeights);

  for (let c = 0; c < cols; c += 1) {
    const deficit = boardHeight - colHeights[c];
    const lastIndex = lastPinIndexByCol[c];
    if (deficit > 1 && lastIndex >= 0) {
      pins[lastIndex] = {
        ...pins[lastIndex],
        height: pins[lastIndex].height + deficit,
      };
    }
  }

  return { pins, boardHeight };
}

function MosaicMedia({
  item,
  priority,
}: {
  item: GalleryItem;
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
        preload="metadata"
        aria-label={item.alt}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          maxWidth: "none",
          objectFit: "cover",
        }}
      />
    );
  }

  return (
    <Image
      src={item.src}
      alt={item.alt}
      fill
      sizes="(max-width: 520px) 50vw, (max-width: 900px) 33vw, 25vw"
      priority={priority}
      className="mosaic__media mosaic__media--image"
    />
  );
}

export function MosaicGallery() {
  const boardRef = useRef<HTMLDivElement>(null);
  const [pins, setPins] = useState<PlacedPin[]>([]);
  const [boardHeight, setBoardHeight] = useState(0);

  const relayout = useCallback(() => {
    const width = boardRef.current?.clientWidth ?? 0;
    const next = layoutPins(width);
    setPins(next.pins);
    setBoardHeight(next.boardHeight);
  }, []);

  useEffect(() => {
    relayout();

    const node = boardRef.current;
    if (!node) return;

    const observer = new ResizeObserver(() => {
      relayout();
    });
    observer.observe(node);

    return () => observer.disconnect();
  }, [relayout]);

  if (gallery.length === 0) {
    return null;
  }

  return (
    <section className="mosaic-feed" aria-label="Taropa — craft and atelier">
      <div
        ref={boardRef}
        className="mosaic"
        style={{
          position: "relative",
          width: "100%",
          height: boardHeight > 0 ? boardHeight : undefined,
          minHeight: boardHeight > 0 ? undefined : "40vh",
          overflow: "hidden",
        }}
      >
        {pins.map((pin, index) => (
          <div
            key={pin.item.id}
            className="mosaic__pin"
            style={{
              position: "absolute",
              top: pin.top,
              left: pin.left,
              width: pin.width,
              height: pin.height,
              overflow: "hidden",
              margin: 0,
              padding: 0,
            }}
          >
            <figure
              className={`mosaic__figure mosaic__figure--${pin.item.tile}${
                pin.item.type === "video" ? " mosaic__figure--video" : ""
              }`}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                margin: 0,
                overflow: "hidden",
              }}
            >
              <MosaicMedia item={pin.item} priority={index < 6} />
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}
