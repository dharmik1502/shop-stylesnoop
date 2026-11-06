import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../components/Breadcrumbs";
import BuyButtons from "../../components/BuyButtons";
import { categoryLabel } from "../../components/CategoryRow";
import DeliveryCheck from "../../components/DeliveryCheck";
import { IconCash, IconReturn, IconShield, IconStar, IconTag, IconTruck } from "../../components/Icons";
import ProductCard, { RatingBadge } from "../../components/ProductCard";
import ProductDescription from "../../components/ProductDescription";
import ProductGallery from "../../components/ProductGallery";
import SectionHeader from "../../components/SectionHeader";
import Shell from "../../components/Shell";
import { getCategory } from "../../data/categories";
import { formatPrice, getDiscountPercent, getMrp, getProduct, getSimilar, PRODUCTS } from "../../data/products";
import { breadcrumbLd, pageMeta, productDescription, productKeywords, productLd } from "../../lib/seo";
import JsonLd from "../../components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  const name = product.title.split(/\s[–|-]\s/)[0];
  return pageMeta({
    title: `${name} – Buy Online at ₹${product.price} (${getDiscountPercent(product)}% Off)`,
    description: productDescription(product),
    path: `/product/${product.slug}/`,
    keywords: productKeywords(product),
    images: product.images,
  });
}

/* Rating breakdown shown under "Ratings & Reviews", derived from the review count. */
const BREAKDOWN = [
  { stars: 5, share: 0.49, color: "#159647" },
  { stars: 4, share: 0.24, color: "#3fb36b" },
  { stars: 3, share: 0.14, color: "#9bcf53" },
  { stars: 2, share: 0.08, color: "#f5a623" },
  { stars: 1, share: 0.05, color: "#e5484d" },
];

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const similar = getSimilar(product, 10);
  const category = getCategory(product.category);
  const mrp = getMrp(product);
  const off = getDiscountPercent(product);
  const ratings = product.reviews * 5;
  const counts = BREAKDOWN.map((b) => Math.round(ratings * b.share));
  const max = Math.max(...counts);

  const offers = [
    product.freeDelivery && { title: "Free Delivery", text: "No shipping charges on this item, anywhere in India." },
    { title: "Cash on Delivery", text: "Pay in cash when your order arrives at your doorstep." },
    { title: "Special Price", text: `${off}% off MRP, already applied to the price shown.` },
    { title: "Easy Returns", text: "Request a return within 7 days of delivery by email." },
  ].filter(Boolean) as { title: string; text: string }[];

  return (
    <Shell mobileBar>
      <JsonLd
        data={[
          productLd(product, category ? categoryLabel(category.name) : undefined),
          breadcrumbLd([
            ...(category ? [{ name: categoryLabel(category.name), path: `/category/${category.slug}/` }] : []),
            { name: product.title, path: `/product/${product.slug}/` },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          ...(category ? [{ href: `/category/${category.slug}/`, label: categoryLabel(category.name) }] : []),
          { label: product.title },
        ]}
      />

      <main className="pb-6">
        <div className="lg:grid lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-10">
          <div className="lg:sticky lg:top-[140px]">
            <ProductGallery images={product.images} alt={product.title} badge={`${off}% OFF`} />
          </div>

          <div className="mt-6 lg:mt-0">
            {category && (
              <Link href={`/category/${category.slug}/`} className="text-[12.5px] font-semibold tracking-wide text-brand uppercase hover:underline">
                {categoryLabel(category.name)}
              </Link>
            )}
            <h1 className="mt-1.5 text-[20px] leading-snug font-semibold tracking-tight text-ink lg:text-[24px]">{product.title}</h1>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <RatingBadge rating={product.rating} size="md" />
              <a href="#reviews" className="text-[13px] text-muted hover:text-brand">
                {ratings.toLocaleString("en-IN")} Ratings &amp; {product.reviews.toLocaleString("en-IN")} Reviews
              </a>
              {product.rating >= 4.5 && (
                <span className="rounded-md bg-[#fff7e0] px-2 py-0.5 text-[11.5px] font-semibold text-[#9a6b00]">Top Rated</span>
              )}
            </div>

            <div className="mt-5 border-y border-line py-5">
              <p className="text-[13px] font-semibold text-green">Special price</p>
              <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-[32px] leading-none font-bold tracking-tight text-ink">{formatPrice(product.price, 0)}</span>
                <span className="text-[16px] text-[#9a9aa8]">
                  MRP <span className="line-through">{formatPrice(mrp, 0)}</span>
                </span>
                <span className="text-[16px] font-bold text-green">{off}% off</span>
              </div>
              <p className="mt-1.5 text-[12px] text-muted">
                Inclusive of all taxes · You save <span className="font-semibold text-ink">{formatPrice(mrp - product.price, 0)}</span>
              </p>
            </div>

            <div className="mt-5">
              <p className="text-[14px] font-semibold text-ink">Available offers</p>
              <ul className="mt-2.5 space-y-2">
                {offers.map((o) => (
                  <li key={o.title} className="flex gap-2.5 text-[13.5px] leading-snug">
                    <IconTag className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                    <span>
                      <span className="font-semibold text-ink">{o.title}</span> <span className="text-[#4a4a58]">{o.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <BuyButtons productId={product.id} price={product.price} />
            <DeliveryCheck />

            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {[
                { Icon: IconTruck, label: "Free Delivery" },
                { Icon: IconCash, label: "Cash on Delivery" },
                { Icon: IconReturn, label: "7-Day Returns" },
                { Icon: IconShield, label: "Secure Shopping" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 rounded-xl bg-surface px-2 py-3 text-center">
                  <Icon className="h-6 w-6 text-brand" />
                  <span className="text-[11.5px] font-medium text-ink">{label}</span>
                </div>
              ))}
            </div>

            <section className="mt-8">
              <h2 className="mb-3 text-[17px] font-bold text-ink">Product Description</h2>
              <ProductDescription paragraphs={product.description} />
            </section>
          </div>
        </div>

        <section id="reviews" className="mt-10 scroll-mt-40 rounded-2xl border border-line bg-white p-5 sm:p-7">
          <h2 className="text-[18px] font-bold text-ink">Ratings &amp; Reviews</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-[200px_1fr] sm:items-center sm:gap-10">
            <div className="text-center sm:border-r sm:border-line sm:pr-8">
              <div className="flex items-center justify-center gap-1.5 text-[44px] leading-none font-bold text-ink">
                {product.rating.toFixed(1)}
                <IconStar className="h-7 w-7 text-green" />
              </div>
              <p className="mt-2 text-[13px] text-muted">
                {ratings.toLocaleString("en-IN")}{" "}Ratings &amp;
                <br />
                {product.reviews.toLocaleString("en-IN")} Reviews
              </p>
            </div>
            <div className="flex flex-col gap-2.5 text-[13px]">
              {BREAKDOWN.map((b, i) => (
                <div key={b.stars} className="flex items-center gap-3">
                  <span className="flex w-8 shrink-0 items-center gap-0.5 font-medium text-ink">
                    {b.stars} <IconStar className="h-3 w-3 text-[#9a9aa8]" />
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface">
                    <div className="h-full rounded-full" style={{ background: b.color, width: `${(counts[i] / max) * 100}%` }} />
                  </div>
                  <span className="w-14 shrink-0 text-right text-muted tabular-nums">{counts[i].toLocaleString("en-IN")}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {similar.length > 0 && (
          <section className="mt-10">
            <SectionHeader
              title="Similar Products"
              subtitle="You might also like"
              href={category ? `/category/${category.slug}/` : undefined}
            />
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {similar.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>
    </Shell>
  );
}
