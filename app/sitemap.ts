import type { MetadataRoute } from "next";
import { categoryPageCount } from "./components/CategoryView";
import { homePageCount } from "./components/HomeView";
import { CATEGORIES } from "./data/categories";
import { PRODUCTS } from "./data/products";
import { absUrl } from "./lib/seo";

export const dynamic = "force-static";

/* URLs end with "/" to match `trailingSlash: true`, so each entry is the canonical URL. Cart and checkout are left out (noindex). */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number, changeFrequency: "daily" | "weekly" | "monthly", images?: string[]) => ({
    url: absUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
    ...(images?.length ? { images: images.map((src) => absUrl(src)) } : {}),
  });

  const home = [entry("/", 1, "daily"), ...Array.from({ length: homePageCount() - 1 }, (_, i) => entry(`/page/${i + 2}/`, 0.6, "daily"))];

  const categories = [
    entry("/category/", 0.8, "weekly"),
    ...CATEGORIES.flatMap((c) => [
      entry(`/category/${c.slug}/`, 0.8, "daily", [c.image]),
      ...Array.from({ length: categoryPageCount(c.slug) - 1 }, (_, i) => entry(`/category/${c.slug}/page/${i + 2}/`, 0.5, "weekly")),
    ]),
  ];

  const products = PRODUCTS.map((p) => entry(`/product/${p.slug}/`, 0.9, "weekly", p.images));

  const info = ["/about/", "/contact/", "/faqs/", "/shipping-info/", "/refund-returns/"].map((p) => entry(p, 0.5, "monthly"));
  const legal = ["/privacy-policy/", "/terms-and-conditions/", "/cookie-policy/", "/disclosure-policy/", "/disclaimer/"].map((p) =>
    entry(p, 0.3, "monthly"),
  );

  return [...home, ...categories, ...products, ...info, ...legal];
}
