import Link from "next/link";
import { formatPrice, getDiscountPercent, getMrp, type Product } from "../data/products";
import AddToCartButton from "./AddToCartButton";
import { IconStar } from "./Icons";

export function RatingBadge({ rating, reviews, size = "sm" }: { rating: number; reviews?: number; size?: "sm" | "md" }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className={`inline-flex items-center gap-0.5 rounded bg-green font-semibold text-white ${
          size === "md" ? "px-2 py-0.5 text-[13px]" : "px-1.5 py-[1px] text-[11.5px]"
        }`}
      >
        {rating.toFixed(1)}
        <IconStar className={size === "md" ? "h-3 w-3" : "h-2.5 w-2.5"} />
      </span>
      {reviews !== undefined && (
        <span className={`text-muted ${size === "md" ? "text-[13px]" : "text-[12px]"}`}>({reviews.toLocaleString("en-IN")})</span>
      )}
    </span>
  );
}

/** Product tile used in every grid and carousel on the site. */
export default function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const off = getDiscountPercent(product);
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_12px_32px_-12px_rgba(52,18,50,0.28)]">
      <div className="relative aspect-square w-full overflow-hidden bg-[#f7f7f9]">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
        <img
          src={product.images[0]}
          alt={product.title}
          loading="lazy"
          className="!h-full w-full object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute top-2.5 left-2.5 rounded-md bg-sale px-1.5 py-0.5 text-[11px] font-bold text-white shadow-sm">
          -{off}%
        </span>
        {product.freeDelivery && (
          <span className="absolute bottom-2 left-2.5 rounded-md bg-white/95 px-1.5 py-0.5 text-[10.5px] font-semibold text-green shadow-sm ring-1 ring-line">
            Free Delivery
          </span>
        )}
      </div>

      <div className={`flex flex-1 flex-col ${compact ? "p-2.5" : "p-3 sm:p-3.5"}`}>
        {/* Stretched link: the ::after overlay makes the whole card clickable without nesting the button in an anchor. */}
        <Link
          href={`/product/${product.slug}/`}
          className="line-clamp-2 min-h-[2.5rem] text-[13.5px] leading-5 text-ink transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-brand"
        >
          {product.title}
        </Link>

        <div className="mt-1.5">
          <RatingBadge rating={product.rating} reviews={product.reviews} />
        </div>

        <div className="mt-2 flex flex-wrap items-baseline gap-x-1.5">
          <span className="text-[17px] font-bold tracking-tight text-ink">{formatPrice(product.price, 0)}</span>
          <span className="text-[12px] text-[#9a9aa8] line-through">{formatPrice(getMrp(product), 0)}</span>
          <span className="text-[12px] font-semibold text-green">{off}% off</span>
        </div>

        {!compact && product.offers > 0 && (
          <p className="mt-1 text-[11.5px] font-medium text-brand">+{product.offers} special offers</p>
        )}

        <div className="mt-auto pt-3">
          <AddToCartButton productId={product.id} title={product.title} />
        </div>
      </div>
    </div>
  );
}

/* Kept for existing imports. */
export const CategoryProductCard = ProductCard;
export function SimilarProductCard({ product }: { product: Product }) {
  return <ProductCard product={product} compact />;
}
