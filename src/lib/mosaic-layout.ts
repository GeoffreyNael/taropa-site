import type { GalleryItem, GalleryTile } from "@/lib/brand";

export const MOSAIC_GAP = 2;
export const MOSAIC_ROW = 8;

export function mosaicColumns(containerWidth: number): number {
  if (containerWidth < 480) return 2;
  if (containerWidth < 768) return 3;
  if (containerWidth < 1200) return 4;
  return 5;
}

export function mosaicColSpan(tile: GalleryTile, columns: number): number {
  if (tile === "hero") return columns;
  if (tile === "wide") return Math.min(columns, Math.max(2, Math.ceil(columns * 0.5)));
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
  const colSpan = mosaicColSpan(item.tile, columns);
  const mediaWidth = item.tile === "hero" ? 16 : item.width;
  const mediaHeight = item.tile === "hero" ? 9 : item.height;
  const rowSpan = mosaicRowSpan(
    containerWidth,
    columns,
    colSpan,
    mediaWidth,
    mediaHeight,
  );
  return { columns, colSpan, rowSpan };
}
