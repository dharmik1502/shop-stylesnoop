import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPrice, getByCategory, getDiscountPercent, getFeatured, getMrp, type Product } from "../data/products";
import { FESTIVE_SALE } from "../lib/site";
import CategoryRow from "./CategoryRow";
import Countdown from "./Countdown";
import { Diya, Lantern, LightString, Rangoli, Sparkles, Toran } from "./DiwaliDecor";
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

const SPARKS = [
  { top: "12%", left: "8%", size: 14, delay: 0 },
  { top: "22%", left: "46%", size: 10, delay: 0.9 },
  { top: "70%", left: "40%", size: 12, delay: 1.6 },
  { top: "18%", left: "88%", size: 16, delay: 0.4 },
  { top: "58%", left: "94%", size: 10, delay: 2.1 },
  { top: "84%", left: "62%", size: 12, delay: 1.2 },
  { top: "40%", left: "4%", size: 9, delay: 2.4 },
];

function DiwaliSlide({ picks, maxOff }: { picks: Product[]; maxOff: number }) {
  return (
    <div className="relative flex h-full flex-col justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top_right,#8c1d3f_0%,#5a0f26_45%,#2a0612_100%)] text-white md:min-h-[360px] lg:min-h-[420px]">
      <Rangoli className="slow-spin pointer-events-none absolute -right-28 -bottom-32 h-[340px] w-[340px] opacity-20 md:-right-16 lg:-right-24 lg:-bottom-48 lg:h-[560px] lg:w-[560px]" />
      <Rangoli className="slow-spin pointer-events-none absolute -top-24 -left-24 hidden h-[260px] w-[260px] opacity-10 lg:block" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-[#ff9d2e]/25 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 hidden h-72 w-72 rounded-full bg-[#ffcf6b]/15 blur-3xl md:block" />
      <LightString className="pointer-events-none absolute inset-x-0 top-0 h-7 w-full md:h-10" bulbs={30} />
      <Lantern className="pointer-events-none absolute top-0 right-4 hidden h-32 w-12 lg:block" />
      <Lantern hue="red" className="pointer-events-none absolute top-0 left-[47%] hidden h-24 w-9 xl:block" style={{ animationDelay: "-1.5s" }} />
      <Sparkles items={SPARKS} />

      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-8 px-5 pt-10 pb-10 sm:px-8 md:grid-cols-[1.15fr_1fr] md:px-10 md:pt-12 lg:px-14">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f4c56a]/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#ffe9b0] uppercase ring-1 ring-[#f4c56a]/40 sm:text-[11.5px]">
            <Diya className="h-4 w-5" /> Festival of Lights
          </span>
          <h1 className="mt-3 text-[30px] leading-[1.05] font-bold tracking-tight sm:text-[40px] lg:text-[54px]">
            <span className="gold-text">{FESTIVE_SALE.name}</span>
          </h1>
          <p className="mt-2 text-[14.5px] text-white/85 sm:text-[17px] lg:text-[19px]">
            Up to <span className="text-[22px] font-bold mr-1.5 text-[#ffd36b] sm:text-[26px] lg:text-[30px]">{maxOff}% OFF</span> on dry fruits &amp; gift
            hampers
          </p>
          <div className="mt-4 lg:mt-5">
            <Countdown endsAt={FESTIVE_SALE.endsAt} />
          </div>
          <div className="mt-5 flex flex-wrap gap-3 lg:mt-7">
            <Link
              href="/category/gift-boxes/"
              className="inline-flex h-11 items-center rounded-lg bg-gradient-to-b from-[#ffe08a] to-[#e9a93b] px-5 text-[14px] font-bold text-[#4a0c1f] shadow-[0_8px_24px_-8px_rgba(255,190,80,0.8)] transition hover:brightness-105 lg:h-12 lg:px-7 lg:text-[15px]"
            >
              Shop Diwali Gifts
            </Link>
            <a
              href="#deals"
              className="inline-flex h-11 items-center rounded-lg border border-[#f4c56a]/50 px-5 text-[14px] font-semibold text-[#ffe9b0] transition hover:bg-white/10 lg:h-12 lg:px-7 lg:text-[15px]"
            >
              View Deals
            </a>
          </div>

          {/* Phones and small tablets: compact product strip instead of the stacked collage. */}
          {picks.length > 0 && (
            <div className="mt-6 flex gap-2.5 md:hidden">
              {picks.slice(0, 3).map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}/`}
                  className="relative block aspect-square max-w-[130px] flex-1 overflow-hidden rounded-xl bg-white p-1.5 shadow-lg ring-2 ring-[#f4c56a]/60"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
                  <img src={p.images[0]} alt={p.title} className="!h-full w-full object-contain" />
                  <span className="absolute top-1 left-1 rounded bg-sale px-1 py-px text-[9.5px] font-bold text-white">{getDiscountPercent(p)}%</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {picks.length > 0 && (
          <div className="relative mx-auto hidden h-[250px] w-full max-w-[300px] md:block lg:scale-[1.2] xl:scale-[1.3]">
            {picks.slice(1, 3).map((p, i) => (
              <Link
                key={p.id}
                href={`/product/${p.slug}/`}
                className={`absolute top-8 h-[150px] w-[120px] overflow-hidden rounded-xl bg-white p-2 shadow-xl ring-2 ring-[#f4c56a]/60 transition hover:z-20 hover:scale-105 ${
                  i === 0 ? "left-0 -rotate-6" : "right-0 rotate-6"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
                <img src={p.images[0]} alt={p.title} className="!h-full w-full object-contain" />
              </Link>
            ))}
            <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2">
              <Link
                href={`/product/${picks[0].slug}/`}
                className="float-y block h-[200px] w-[165px] overflow-hidden rounded-2xl bg-white p-3 shadow-2xl ring-4 ring-[#f4c56a]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
                <img src={picks[0].images[0]} alt={picks[0].title} className="!h-full w-full object-contain" />
              </Link>
            </div>
            <span className="absolute -top-3 -right-1 z-20 flex h-[74px] w-[74px] rotate-12 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#ff3d6e] to-[#b3123a] text-center leading-none font-bold shadow-xl ring-4 ring-[#ffd36b]">
              <span className="text-[10px] tracking-wider uppercase">Up to</span>
              <span className="text-[22px]">{maxOff}%</span>
              <span className="text-[10px] tracking-wider uppercase">Off</span>
            </span>
            <div className="absolute -bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-end gap-3">
              <Diya className="h-9 w-12" />
              <Diya className="h-12 w-16" />
              <Diya className="h-9 w-12" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Hero({ picks, maxOff }: { picks: Product[]; maxOff: number }) {
  return (
    <section className="mt-5 overflow-hidden rounded-2xl shadow-[0_18px_40px_-24px_rgba(58,36,18,0.6)]">
      <DiwaliSlide picks={picks} maxOff={maxOff} />
    </section>
  );
}

function DiwaliGiftBanner({ picks, fromPrice }: { picks: Product[]; fromPrice: number }) {
  return (
    <section className="relative mt-10 overflow-hidden rounded-2xl bg-gradient-to-r from-[#fff4dc] via-[#ffe7c2] to-[#ffd9a8] shadow-[0_14px_36px_-24px_rgba(154,79,18,0.7)]">
      <Toran className="h-10 w-full sm:h-12" />
      <Rangoli className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 opacity-20" />
      <div className="relative grid items-center gap-6 px-5 pt-3 pb-6 sm:px-8 md:grid-cols-[1.1fr_1.4fr]">
        <div>
          <p className="flex items-center gap-2 text-[12px] font-semibold tracking-wider text-brand uppercase">
            <Diya className="h-5 w-7" /> Diwali Gifting Store
          </p>
          <h2 className="mt-2 text-[24px] leading-tight font-bold text-plum sm:text-[30px]">Gift sweetness &amp; health this Diwali</h2>
          <p className="mt-2 max-w-md text-[14px] text-ink/70">
            Premium dry fruit hampers, freshly packed and delivered free across India. Perfect for family, friends and corporate gifting.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Link
              href="/category/gift-boxes/"
              className="inline-flex h-11 items-center gap-1 rounded-lg bg-brand px-5 text-[14px] font-semibold text-white shadow-md transition hover:bg-brand-dark"
            >
              Explore Gift Boxes <IconChevronRight className="h-4 w-4" />
            </Link>
            {fromPrice > 0 && (
              <span className="text-[13px] text-ink/70">
                Starting at <span className="text-[18px] font-bold text-plum">{formatPrice(fromPrice, 0)}</span>
              </span>
            )}
          </div>
        </div>
        <div className="scroll-x -mx-5 flex gap-3 overflow-x-auto px-5 pb-1 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
          {picks.slice(0, 3).map((p) => (
            <Link
              key={p.id}
              href={`/product/${p.slug}/`}
              className="group w-[44%] shrink-0 rounded-xl bg-white p-3 shadow-sm ring-1 ring-[#f4c56a]/50 transition hover:-translate-y-1 hover:shadow-lg sm:w-auto"
            >
              <span className="relative block aspect-square overflow-hidden rounded-lg bg-[#fffaf2]">
                {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
                <img src={p.images[0]} alt="" loading="lazy" className="!h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105" />
                <span className="absolute top-1.5 left-1.5 rounded bg-sale px-1.5 py-0.5 text-[10.5px] font-bold text-white">
                  {getDiscountPercent(p)}% OFF
                </span>
              </span>
              <span className="mt-2 line-clamp-2 block text-[12.5px] leading-snug font-medium text-ink group-hover:text-brand">{p.title}</span>
              <span className="mt-1 flex items-baseline gap-1.5">
                <span className="text-[14px] font-bold text-ink">{formatPrice(p.price, 0)}</span>
                <span className="text-[11.5px] text-muted line-through">{formatPrice(getMrp(p), 0)}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Perks() {
  return (
    <section className="mt-5 grid grid-cols-2 gap-3 rounded-2xl border border-line bg-white p-4 lg:divide-x lg:divide-line lg:p-5">
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
  const gifts = getByCategory("gift-boxes");
  const maxOff = Math.max(...all.map(getDiscountPercent));
  const fromPrice = gifts.length ? Math.min(...gifts.map((p) => p.price)) : 0;
  const deals = [...all].sort((a, b) => getDiscountPercent(b) - getDiscountPercent(a) || b.rating - a.rating).slice(0, 10);

  return (
    <Shell>
      <main>
        {page === 1 && (
          <>
            <Hero picks={gifts} maxOff={maxOff} />
            <Perks />

            <section className="mt-10">
              <SectionHeader title="Shop by Category" subtitle="Find exactly what you are looking for" href="/category/" />
              <CategoryRow />
            </section>

            <DiwaliGiftBanner picks={gifts} fromPrice={fromPrice} />

            <section id="deals" className="mt-10 scroll-mt-24 rounded-2xl bg-gradient-to-r from-[#fff8ef] to-[#fdf3e3] p-4 sm:p-6">
              <SectionHeader
                title={
                  <span className="inline-flex items-center gap-2">
                    <IconBolt className="h-5 w-5 text-sale" /> Deals of the Day
                  </span>
                }
                subtitle="Best savings on our most loved dry fruits"
                href="/category/gift-boxes/"
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
            <SectionHeader title="Products For You" subtitle="Handpicked favourites from every category" />
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
