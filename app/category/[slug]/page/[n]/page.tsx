import type { Metadata } from "next";
import CategoryView, { categoryPageCount } from "../../../../components/CategoryView";
import { CATEGORIES, getCategory } from "../../../../data/categories";
import { getByCategory } from "../../../../data/products";
import { categoryMeta } from "../../../../lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  const params = CATEGORIES.flatMap((c) =>
    Array.from({ length: categoryPageCount(c.slug) - 1 }, (_, i) => ({ slug: c.slug, n: String(i + 2) })),
  );
  // `output: "export"` rejects an empty list; the placeholder renders a 404.
  return params.length ? params : [{ slug: "_", n: "2" }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; n: string }> }): Promise<Metadata> {
  const { slug, n } = await params;
  const c = getCategory(slug);
  if (!c) return { title: "Category" };
  return categoryMeta(slug, c.name, getByCategory(slug).length, c.image, Number(n));
}

export default async function CategoryPageN({ params }: { params: Promise<{ slug: string; n: string }> }) {
  const { slug, n } = await params;
  return <CategoryView slug={slug} page={Number(n)} />;
}
