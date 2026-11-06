import type { Metadata } from "next";
import { CATEGORY_KEYWORDS, pageMeta } from "../lib/seo";
import Breadcrumbs from "../components/Breadcrumbs";
import CategoryRow from "../components/CategoryRow";
import ProductCard from "../components/ProductCard";
import SectionHeader from "../components/SectionHeader";
import Shell from "../components/Shell";
import { CATEGORIES } from "../data/categories";
import { getByCategory } from "../data/products";

export const metadata: Metadata = pageMeta({
  title: "All Categories – Shop Fashion, Trending, Best Sellers & Hot Deals",
  description: "Browse every StyleSnoop category: fashion, trending gadgets, best sellers, special collection home decor and hot deals with up to 80% off and free delivery.",
  path: "/category/",
  keywords: ["shop by category", "all categories", ...Object.values(CATEGORY_KEYWORDS).map((k) => k[0])],
});

export default function CategoriesPage() {
  return (
    <Shell>
      <Breadcrumbs items={[{ label: "Categories" }]} />
      <SectionHeader as="h1" title="Shop by Category" subtitle="Explore our full range of collections" />
      <CategoryRow showCount />

      {CATEGORIES.map((c) => {
        const top = getByCategory(c.slug).slice(0, 5);
        if (top.length === 0) return null;
        return (
          <section key={c.slug} className="mt-10">
            <SectionHeader
              title={c.name === "HOT DEALS" ? "Hot Deals" : c.name}
              href={`/category/${c.slug}/`}
              linkLabel={`View all ${getByCategory(c.slug).length}`}
            />
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
              {top.map((p, i) => (
                <div key={p.id} className={i >= 3 ? "hidden lg:block" : i === 2 ? "hidden md:block" : ""}>
                  <ProductCard product={p} compact />
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </Shell>
  );
}
