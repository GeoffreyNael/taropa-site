"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type ProductGalleryProps = {
  images: string[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);

  const goTo = useCallback((index: number) => {
    const next = (index + images.length) % images.length;
    setOpenIndex(next);
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const slide = scroller.children[next] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") goTo((openIndex ?? 0) + 1);
      if (event.key === "ArrowLeft") goTo((openIndex ?? 0) - 1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, openIndex, close, goTo]);

  useEffect(() => {
    if (openIndex === null) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const slide = scroller.children[openIndex] as HTMLElement | undefined;
    // Jump to the clicked photo on open (no animation)
    slide?.scrollIntoView({ behavior: "auto", inline: "center", block: "nearest" });
    // Intentionally only when dialog opens — navigation uses goTo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const onScrollerScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller || openIndex === null) return;
    const center = scroller.scrollLeft + scroller.clientWidth / 2;
    let nearest = 0;
    let nearestDist = Infinity;
    Array.from(scroller.children).forEach((child, index) => {
      const el = child as HTMLElement;
      const mid = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(mid - center);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = index;
      }
    });
    if (nearest !== openIndex) setOpenIndex(nearest);
  };

  return (
    <>
      <div className="product-page__gallery">
        {images.map((src, index) => (
          <figure key={src} className="product-page__figure">
            <button
              type="button"
              className="product-page__thumb"
              onClick={() => setOpenIndex(index)}
              aria-label={`Agrandir ${productName} — look ${index + 1}`}
            >
              <Image
                src={src}
                alt={`${productName} — look ${index + 1}`}
                width={1023}
                height={1537}
                sizes="(max-width: 767px) 100vw, 45vw"
                priority={index === 0}
                className="product-page__image"
              />
            </button>
          </figure>
        ))}
      </div>

      {isOpen ? (
        <div
          className="product-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Photos ${productName}`}
        >
          <button
            type="button"
            className="product-lightbox__backdrop"
            onClick={close}
            aria-label="Fermer"
          />

          <button
            type="button"
            className="product-lightbox__close"
            onClick={close}
            aria-label="Fermer"
          >
            ×
          </button>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                className="product-lightbox__nav product-lightbox__nav--prev"
                onClick={() => goTo((openIndex ?? 0) - 1)}
                aria-label="Photo précédente"
              >
                ‹
              </button>
              <button
                type="button"
                className="product-lightbox__nav product-lightbox__nav--next"
                onClick={() => goTo((openIndex ?? 0) + 1)}
                aria-label="Photo suivante"
              >
                ›
              </button>
            </>
          ) : null}

          <div
            ref={scrollerRef}
            className="product-lightbox__scroller"
            onScroll={onScrollerScroll}
          >
            {images.map((src, index) => (
              <div key={src} className="product-lightbox__slide">
                <Image
                  src={src}
                  alt={`${productName} — look ${index + 1}`}
                  width={1023}
                  height={1537}
                  sizes="100vw"
                  className="product-lightbox__image"
                  priority={index === openIndex}
                />
              </div>
            ))}
          </div>

          {images.length > 1 ? (
            <p className="product-lightbox__counter" aria-live="polite">
              {(openIndex ?? 0) + 1} / {images.length}
            </p>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
