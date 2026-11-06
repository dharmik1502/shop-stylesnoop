import type { Metadata } from "next";
import CategoryView from "../../components/CategoryView";
import { CATEGORIES, getCategory } from "../../data/categories";
import { getByCategory } from "../../data/products";
import { categoryMeta } from "../../lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCategory(slug);
  if (!c) return { title: "Category" };
  return categoryMeta(slug, c.name, getByCategory(slug).length, c.image);
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CategoryView slug={slug} page={1} />;
}
