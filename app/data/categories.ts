export type Category = {
  slug: string;
  name: string;
  image: string;
};

export const CATEGORIES: Category[] = [
  {
    "slug": "fashion",
    "name": "Fashion",
    "image": "/images/categories/c01.webp"
  },
  {
    "slug": "trending",
    "name": "Trending",
    "image": "/images/categories/c02.webp"
  },
  {
    "slug": "best-seller",
    "name": "BestSeller",
    "image": "/images/categories/c03.webp"
  },
  {
    "slug": "special-collection",
    "name": "Special Collection",
    "image": "/images/categories/c04.webp"
  },
  {
    "slug": "hot-deals",
    "name": "HOT DEALS",
    "image": "/images/categories/c05.webp"
  }
];

export const PAGE_SIZE = 6;

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
