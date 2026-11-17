export type Category = {
  slug: string;
  name: string;
  image: string;
};

export const CATEGORIES: Category[] = [
  { slug: "nuts", name: "Nuts", image: "/images/categories/nuts.webp" },
  { slug: "dried-fruits", name: "Dried Fruits", image: "/images/categories/dried-fruits.webp" },
  { slug: "dates-raisins", name: "Dates & Raisins", image: "/images/categories/dates-raisins.webp" },
  { slug: "seeds-makhana", name: "Seeds & Makhana", image: "/images/categories/seeds-makhana.webp" },
  { slug: "gift-boxes", name: "Gift Boxes & Combos", image: "/images/categories/gift-boxes.webp" },
];

export const PAGE_SIZE = 6;

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
