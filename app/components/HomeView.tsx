import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory } from "../data/categories";
import { getDiscountPercent, getFeatured, type Product } from "../data/products";
import { SITE } from "../lib/site";
import CategoryRow from "./CategoryRow";
import { PERKS } from "./Footer";
import { IconBolt, IconChevronRight } from "./Icons";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";
import Shell from "./Shell";

export const HOME_PAGE_SIZE = 12;

export function homePageCount() {
  return Math.max(1, Math.ceil(getFeatured().length / HOME_PAGE_SIZE));
}

function Hero({ spotlight }: { spotlight: Product }) {
  const promos = [
    { slug: "hot-deals", eyebrow: "Limited time", title: "Hot Deals", text: "Up to 80% off", tone: "from-[#fff1e6] to-[#ffe0cc]" },
    { slug: "best-seller", eyebrow: "Customer favourites", title: "Best Sellers", text: "Top rated picks", tone: "from-[#eef4ff] to-[#dde8ff]" },
  ];
  return (
    <section className="mt-5 grid gap-4 lg:grid-cols-[2fr_1fr]">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-plum via-[#5a1650] to-brand text-white">
        <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-[#ff6fb6]/20 blur-3xl" />
        <div className="relative grid items-center gap-4 p-6 sm:grid-cols-[1.2fr_1fr] sm:p-10">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11.5px] font-semibold tracking-wide uppercase">
              <IconBolt className="h-3.5 w-3.5 text-[#ffd36b]" /> New arrivals every week
            </span>
            <h1 className="mt-4 text-[28px] leading-[1.1] font-bold tracking-tight sm:text-[40px]">{SITE.tagline}</h1>
            <p className="mt-3 max-w-md text-[14px] leading-relaxed text-white/80 sm:text-[15px]">{SITE.welcome}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/category/hot-deals/"
                className="inline-flex h-11 items-center rounded-lg bg-white px-5 text-[14px] font-semibold text-plum shadow-lg transition hover:bg-brand-light"
              >
                Shop Hot Deals
              </Link>
              <Link
                href="/category/"
                className="inline-flex h-11 items-center rounded-lg border border-white/35 px-5 text-[14px] font-semibold text-white transition hover:bg-white/10"
              >
                Browse Categories
              </Link>
            </div>
          </div>
          <Link href={`/product/${spotlight.slug}/`} className="group relative hidden sm:block">
            <div className="aspect-square overflow-hidden rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-white/20 transition group-hover:-rotate-1">
              {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
              <img src={spotlight.images[0]} alt={spotlight.title} className="!h-full w-full object-contain" />
            </div>
            <span className="absolute -bottom-3 -left-3 rounded-xl bg-[#ffd36b] px-3 py-2 text-[12px] font-bold text-plum shadow-lg">
              {getDiscountPercent(spotlight)}% OFF
            </span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
        {promos.map((p) => {
          const cat = getCategory(p.slug);
          return (
            <Link
              key={p.slug}
              href={`/category/${p.slug}/`}
              className={`group relative flex items-center justify-between gap-3 overflow-hidden rounded-2xl bg-gradient-to-br ${p.tone} p-4 sm:p-6`}
            >
              <div>
                <p className="text-[11px] font-semibold tracking-wider text-muted uppercase">{p.eyebrow}</p>
                <p className="mt-1 text-[18px] font-bold text-ink sm:text-[22px]">{p.title}</p>
                <p className="mt-0.5 text-[13px] text-ink/70">{p.text}</p>
                <span className="mt-3 inline-flex items-center gap-0.5 text-[13px] font-semibold text-brand">
                  Shop now <IconChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </div>
              {cat && (
                // eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized
                <img
                  src={cat.image}
                  alt=""
                  className="hidden !h-24 w-24 shrink-0 rounded-full object-cover shadow-md ring-4 ring-white/70 sm:block"
                />
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function Perks() {
  return (
    <section className="mt-5 grid grid-cols-2 gap-3 rounded-2xl border border-line bg-white p-4 lg:grid-cols-4 lg:divide-x lg:divide-line lg:p-5">
      {PERKS.map(({ Icon, title, text }) => (
        <div key={title} className="flex items-center gap-3 lg:justify-center lg:px-4">
          <Icon className="h-7 w-7 shrink-0 text-brand" />
          <div>
            <p className="text-[13px] font-semibold text-ink">{title}</p>
            <p className="text-[11.5px] leading-snug text-muted">{text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default function HomeView({ page }: { page: number }) {
  const all = getFeatured();
  const total = homePageCount();

  if (page < 1 || page > total) notFound();

  const items = all.slice((page - 1) * HOME_PAGE_SIZE, page * HOME_PAGE_SIZE);
  const deals = [...all].sort((a, b) => getDiscountPercent(b) - getDiscountPercent(a) || b.rating - a.rating).slice(0, 10);

  return (
    <Shell>
      <main>
        {page === 1 && (
          <>
            <Hero spotlight={all[0]} />
            <Perks />

            <section className="mt-10">
              <SectionHeader title="Shop by Category" subtitle="Find exactly what you are looking for" href="/category/" />
              <CategoryRow />
            </section>

            <section className="mt-10 rounded-2xl bg-gradient-to-r from-[#fff4f9] to-[#fdf1ff] p-4 sm:p-6">
              <SectionHeader
                title={
                  <span className="inline-flex items-center gap-2">
                    <IconBolt className="h-5 w-5 text-sale" /> Deals of the Day
                  </span>
                }
                subtitle="Biggest discounts on our most loved products"
                href="/category/hot-deals/"
              />
              <div className="scroll-x -mx-4 flex gap-3 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:gap-4 sm:px-6">
                {deals.map((p) => (
                  <div key={p.id} className="w-[46%] shrink-0 sm:w-[220px]">
                    <ProductCard product={p} compact />
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        <section className={page === 1 ? "mt-10" : "mt-6"}>
          {page === 1 ? (
            <SectionHeader title="Products For You" subtitle="Handpicked bestsellers across every category" />
          ) : (
            <SectionHeader as="h1" title="Products For You" subtitle={`Page ${page} of ${total}`} />
          )}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination base="/" page={page} total={total} />
        </section>
      </main>
    </Shell>
  );
}
