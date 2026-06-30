import type { GalleryItem, GalleryTile } from "@/lib/brand";

export const MOSAIC_GAP = 3;
export const MOSAIC_ROW = 6;

export function mosaicColumns(containerWidth: number): number {
  if (containerWidth < 520) return 2;
  if (containerWidth < 768) return 3;
  if (containerWidth < 1100) return 4;
  if (containerWidth < 1500) return 5;
  return 6;
}

export function mosaicColSpan(
  tile: GalleryTile,
  columns: number,
  mediaWidth: number,
  mediaHeight: number,
): number {
  const aspect = mediaWidth / mediaHeight;

  if (tile === "wide" || aspect > 1.15) {
    if (columns >= 4) return 2;
    if (columns === 3) return 2;
    return columns;
  }

  if (tile === "hero") {
    if (columns >= 4) return 2;
    if (columns === 3) return 2;
    return columns;
  }

  return 1;
}

export function mosaicRowSpan(
  containerWidth: number,
  columns: number,
  colSpan: number,
  mediaWidth: number,
  mediaHeight: number,
): number {
  const colWidth = (containerWidth - MOSAIC_GAP * (columns - 1)) / columns;
  const itemWidth = colWidth * colSpan + MOSAIC_GAP * (colSpan - 1);
  const itemHeight = itemWidth * (mediaHeight / mediaWidth);
  return Math.max(
    1,
    Math.ceil((itemHeight + MOSAIC_GAP) / (MOSAIC_ROW + MOSAIC_GAP)),
  );
}

export function mosaicItemStyle(
  item: GalleryItem,
  containerWidth: number,
): { columns: number; colSpan: number; rowSpan: number } {
  const columns = mosaicColumns(containerWidth);
  const colSpan = mosaicColSpan(
    item.tile,
    columns,
    item.width,
    item.height,
  );
  const rowSpan = mosaicRowSpan(
    containerWidth,
    columns,
    colSpan,
    item.width,
    item.height,
  );
  return { columns, colSpan, rowSpan };
}
