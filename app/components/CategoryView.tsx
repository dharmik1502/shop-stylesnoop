import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, getCategory, PAGE_SIZE } from "../data/categories";
import { getByCategory } from "../data/products";
import Breadcrumbs from "./Breadcrumbs";
import { categoryLabel } from "./CategoryRow";
import { PERKS } from "./Footer";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import Shell from "./Shell";
import JsonLd from "./JsonLd";
import { breadcrumbLd, itemListLd } from "../lib/seo";

export function categoryPageCount(slug: string) {
  return Math.max(1, Math.ceil(getByCategory(slug).length / PAGE_SIZE));
}

export default function CategoryView({ slug, page }: { slug: string; page: number }) {
  const category = getCategory(slug);
  if (!category) notFound();
  const all = getByCategory(slug);
  const total = categoryPageCount(slug);
  if (page < 1 || page > total) notFound();
  const items = all.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const name = categoryLabel(category.name);
  const from = all.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const to = Math.min(page * PAGE_SIZE, all.length);

  return (
    <Shell tone="gray">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Categories", path: "/category/" },
            { name, path: `/category/${slug}/` },
          ]),
          itemListLd(items),
        ]}
      />
      <Breadcrumbs items={[{ href: "/category/", label: "Categories" }, { label: name }]} />

      {/* Category banner */}
      <div className="relative flex items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-r from-plum to-brand p-5 text-white sm:p-7">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
        <img src={category.image} alt="" className="!h-16 w-16 shrink-0 rounded-full object-cover ring-4 ring-white/25 sm:!h-20 sm:w-20" />
        <div>
          <h1 className="text-[22px] font-bold tracking-tight sm:text-[28px]">{name}</h1>
          <p className="mt-0.5 text-[13px] text-white/75">
            {all.length} product{all.length === 1 ? "" : "s"} · Free delivery &amp; Cash on Delivery on every order
          </p>
        </div>
        <div className="pointer-events-none absolute -right-10 -bottom-16 h-48 w-48 rounded-full bg-white/10" />
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <aside className="hidden space-y-4 lg:block">
          <div className="rounded-xl border border-line bg-white p-4">
            <p className="mb-2 text-[12px] font-semibold tracking-wider text-muted uppercase">Categories</p>
            <ul className="space-y-0.5">
              {CATEGORIES.map((c) => {
                const active = c.slug === slug;
                return (
                  <li key={c.slug}>
                    <Link
                      href={`/category/${c.slug}/`}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between rounded-lg px-2.5 py-2 text-[13.5px] transition ${
                        active ? "bg-brand-light font-semibold text-brand" : "text-ink hover:bg-surface"
                      }`}
                    >
                      {categoryLabel(c.name)}
                      <span className={`text-[11.5px] ${active ? "text-brand" : "text-muted"}`}>{getByCategory(c.slug).length}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="space-y-3 rounded-xl border border-line bg-white p-4">
            {PERKS.map(({ Icon, title, text }) => (
              <div key={title} className="flex gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <p className="text-[13px] font-semibold text-ink">{title}</p>
                  <p className="text-[11.5px] text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <section>
          {/* Mobile category chips */}
          <div className="scroll-x mb-3 flex gap-2 overflow-x-auto lg:hidden">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}/`}
                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium ${
                  c.slug === slug ? "border-brand bg-brand text-white" : "border-line bg-white text-ink"
                }`}
              >
                {categoryLabel(c.name)}
              </Link>
            ))}
          </div>

          <div className="mb-3 flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3">
            <p className="text-[13px] text-muted">
              Showing{" "}
              <span className="font-semibold text-ink">
                {from}–{to}
              </span>{" "}
              of <span className="font-semibold text-ink">{all.length}</span> results
            </p>
            <p className="hidden text-[13px] text-muted sm:block">Sorted by: <span className="font-medium text-ink">Popularity</span></p>
          </div>

          {items.length === 0 ? (
            <div className="rounded-xl border border-line bg-white py-16 text-center">
              <p className="text-[15px] font-semibold text-ink">No products here yet</p>
              <p className="mt-1 text-[13px] text-muted">Check back soon, or explore another category.</p>
              <Link href="/" className="mt-4 inline-flex h-10 items-center rounded-lg bg-brand px-5 text-[13.5px] font-semibold text-white">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
              {items.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
          <Pagination base={`/category/${slug}/`} page={page} total={total} />
        </section>
      </div>
    </Shell>
  );
}
