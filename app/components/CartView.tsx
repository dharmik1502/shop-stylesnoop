"use client";

import Link from "next/link";
import { formatPrice, getDiscountPercent, getMrp, PRODUCTS_BY_ID } from "../data/products";
import { removeFromCart, setQty, useCart } from "../lib/cart";
import { QtyStepper } from "./BuyButtons";
import CheckoutSteps from "./CheckoutSteps";
import { IconCart, IconTrash, IconTruck } from "./Icons";
import PriceSummary, { totals, type Line } from "./PriceSummary";

export function useCartLines(): Line[] {
  const cart = useCart();
  return cart.flatMap((item) => {
    const product = PRODUCTS_BY_ID.get(item.id);
    return product ? [{ item, product }] : [];
  });
}

export function EmptyCart() {
  return (
    <div className="mx-auto my-8 max-w-md rounded-2xl border border-line bg-white px-6 py-12 text-center">
      <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-light text-brand">
        <IconCart className="h-10 w-10" />
      </span>
      <h1 className="mt-5 text-[20px] font-bold text-ink">Your cart is empty</h1>
      <p className="mt-1.5 text-[14px] text-muted">Looks like you haven&rsquo;t added anything yet. Explore our nuts, dates and gift boxes to find something you love.</p>
      <div className="mt-6 flex flex-col justify-center gap-2.5 sm:flex-row">
        <Link href="/" className="inline-flex h-11 items-center justify-center rounded-lg bg-brand px-6 text-[14px] font-semibold text-white hover:bg-brand-dark">
          Start Shopping
        </Link>
        <Link
          href="/category/gift-boxes/"
          className="inline-flex h-11 items-center justify-center rounded-lg border border-line px-6 text-[14px] font-semibold text-ink hover:border-brand hover:text-brand"
        >
          See Gift Boxes
        </Link>
      </div>
    </div>
  );
}

export default function CartView() {
  const lines = useCartLines();
  if (lines.length === 0) return <EmptyCart />;
  const { count, subtotal } = totals(lines);

  return (
    <div className="pb-4">
      <CheckoutSteps current={0} />
      <div className="grid gap-5 lg:grid-cols-[1fr_360px] lg:items-start">
        <section className="overflow-hidden rounded-xl border border-line bg-white">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <h1 className="text-[18px] font-bold text-ink">
              My Cart <span className="text-[14px] font-normal text-muted">({count} item{count === 1 ? "" : "s"})</span>
            </h1>
            <span className="hidden items-center gap-1.5 text-[12.5px] font-medium text-green sm:flex">
              <IconTruck className="h-4 w-4" /> Free delivery on this order
            </span>
          </div>

          <ul className="divide-y divide-line">
            {lines.map(({ item, product }) => (
              <li key={item.id} className="flex gap-4 p-4 sm:p-5">
                <Link href={`/product/${product.slug}/`} className="shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="!h-24 w-24 rounded-lg border border-line bg-[#f7f7f9] object-contain p-1 sm:!h-28 sm:w-28"
                  />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col">
                  <Link href={`/product/${product.slug}/`} className="line-clamp-2 text-[14px] leading-snug text-ink hover:text-brand">
                    {product.title}
                  </Link>
                  <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2">
                    <span className="text-[16px] font-bold text-ink">{formatPrice(product.price * item.qty, 0)}</span>
                    <span className="text-[12.5px] text-[#9a9aa8] line-through">{formatPrice(getMrp(product) * item.qty, 0)}</span>
                    <span className="text-[12.5px] font-semibold text-green">{getDiscountPercent(product)}% off</span>
                  </div>
                  {item.qty > 1 && <p className="text-[12px] text-muted">{formatPrice(product.price, 0)} each</p>}
                  <p className="mt-1 text-[12px] text-muted">Delivery in 3–4 days · Free</p>
                  <div className="mt-auto flex items-center gap-4 pt-3">
                    <QtyStepper value={item.qty} onChange={(n) => setQty(item.id, n)} max={99} />
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="inline-flex cursor-pointer items-center gap-1 text-[13px] font-semibold text-muted uppercase hover:text-sale"
                    >
                      <IconTrash /> Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="hidden justify-end border-t border-line px-5 py-4 lg:flex">
            <Link href="/" className="text-[13.5px] font-semibold text-brand hover:underline">
              ← Continue Shopping
            </Link>
          </div>
        </section>

        <aside id="price-details" className="scroll-mt-40 lg:sticky lg:top-[140px]">
          <PriceSummary lines={lines}>
            <Link
              href="/checkout/"
              className="hidden h-12 w-full items-center justify-center rounded-lg bg-brand text-[15px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(173,0,97,0.7)] hover:bg-brand-dark sm:flex"
            >
              Place Order
            </Link>
          </PriceSummary>
        </aside>
      </div>

      {/* Sticky checkout bar on phones */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-line bg-white p-3 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.2)] sm:hidden">
        <div>
          <p className="text-[17px] font-bold text-ink">{formatPrice(subtotal, 0)}</p>
          <a href="#price-details" className="text-[12px] font-medium text-brand">
            View price details
          </a>
        </div>
        <Link href="/checkout/" className="inline-flex h-12 flex-1 items-center justify-center rounded-lg bg-brand text-[15px] font-semibold text-white">
          Place Order
        </Link>
      </div>
    </div>
  );
}
