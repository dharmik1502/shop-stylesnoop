// Generated from the reference catalogue. Edit freely; nothing regenerates this file automatically.
export type Product = {
  id: number;
  slug: string;
  title: string;
  price: number;
  /** Optional list price (MRP). When omitted, getMrp() derives one from the price. */
  mrp?: number;
  rating: number;
  reviews: number;
  images: string[];
  description: string[];
  similar: number[];
  category: string;
  offers: number;
  freeDelivery: boolean;
};

export const PRODUCTS: Product[] = [];

/** Products shown on the home page, in order. */
export const FEATURED_IDS: number[] = [];

export const PRODUCTS_BY_ID = new Map(PRODUCTS.map((p) => [p.id, p]));

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getFeatured(): Product[] {
  return FEATURED_IDS.map((id) => PRODUCTS_BY_ID.get(id)).filter((p): p is Product => Boolean(p));
}

export function getByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getSimilar(product: Product, limit = 8): Product[] {
  const picked = product.similar.map((id) => PRODUCTS_BY_ID.get(id)).filter((p): p is Product => Boolean(p));
  if (picked.length < limit) {
    for (const p of getByCategory(product.category)) {
      if (picked.length >= limit) break;
      if (p.id !== product.id && !picked.includes(p)) picked.push(p);
    }
  }
  return picked.slice(0, limit);
}

export function formatPrice(price: number, decimals = 2): string {
  return `₹${price.toFixed(decimals)}`;
}

/**
 * List price (MRP) shown struck through next to the selling price.
 * Uses the explicit `mrp` when a product has one; otherwise derives a stable
 * value from the id so every product shows a 60–80% discount. The selling
 * `price` is never changed by this.
 */
export function getMrp(product: Product): number {
  if (product.mrp && product.mrp > product.price) return product.mrp;
  const discounts = [60, 65, 70, 75, 80];
  const pct = discounts[product.id % discounts.length];
  const raw = product.price / (1 - pct / 100);
  // Round to a "shop" price ending in 9 (e.g. 1,999) and keep it above the selling price.
  const rounded = Math.round(raw / 10) * 10 - 1;
  return Math.max(rounded, product.price + 10);
}

/** Whole-number percentage off between the MRP and the selling price. */
export function getDiscountPercent(product: Product): number {
  const mrp = getMrp(product);
  return Math.round(((mrp - product.price) / mrp) * 100);
}
