"use client";

import Link from "next/link";
import { useState } from "react";
import { formatPrice } from "../data/products";
import { clearCart } from "../lib/cart";
import { EmptyCart, useCartLines } from "./CartView";
import CheckoutSteps from "./CheckoutSteps";
import { IconBolt, IconCash, IconCheck, IconLock } from "./Icons";
import PriceSummary, { totals } from "./PriceSummary";
import UpiPayment from "./UpiPayment";

const FIELD =
  "h-11 w-full rounded-lg border border-line bg-white px-3.5 text-[14px] text-ink outline-none transition placeholder:text-[#a0a0ac] focus:border-brand focus:ring-4 focus:ring-brand/10";

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-[12.5px] font-medium text-ink">{label}</span>
      {children}
    </label>
  );
}

function Card({ step, title, children }: { step: number; title: string; children: React.ReactNode }) {
  return (
    <section className="overflow-hidden rounded-xl border border-line bg-white">
      <h2 className="flex items-center gap-3 border-b border-line bg-[#fbfbfd] px-5 py-3.5 text-[15px] font-semibold text-ink">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand text-[12px] font-bold text-white">{step}</span>
        {title}
      </h2>
      <div className="p-5">{children}</div>
    </section>
  );
}

export default function CheckoutForm() {
  const lines = useCartLines();
  const [order, setOrder] = useState<{ no: string; total: number; method: "upi" | "cod"; paid: boolean; utr?: string } | null>(null);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const method = new FormData(e.currentTarget).get("payment") === "cod" ? "cod" : "upi";
    // No backend yet: the order lives in component state.
    setOrder({ no: `SS${Date.now().toString().slice(-8)}`, total: totals(lines).subtotal, method, paid: false });
    if (method === "cod") clearCart();
  }

  function markPaid(utr: string) {
    setOrder((o) => (o ? { ...o, paid: true, utr } : o));
    clearCart();
  }

  if (order && order.method === "upi" && !order.paid) {
    return (
      <div className="pb-6">
        <CheckoutSteps current={2} />
        <h1 className="sr-only">Pay for your order</h1>
        <UpiPayment amount={order.total} orderNo={order.no} onPaid={markPaid} />
        <p className="mt-4 text-center text-[12.5px] text-muted">
          Changed your mind?{" "}
          <button type="button" onClick={() => setOrder(null)} className="cursor-pointer text-brand hover:underline">
            Go back to address &amp; payment
          </button>
        </p>
      </div>
    );
  }

  if (order) {
    return (
      <div className="pb-6">
        <CheckoutSteps current={3} />
        <div className="mx-auto max-w-lg rounded-2xl border border-line bg-white px-6 py-10 text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green text-white shadow-[0_10px_30px_-10px_rgba(21,150,71,0.8)]">
            <IconCheck className="h-8 w-8" />
          </span>
          <h1 className="mt-5 text-[22px] font-bold text-ink">Thank you! Your order is placed.</h1>
          <p className="mt-2 text-[14px] text-muted">
            Order ID <span className="font-semibold text-ink">{order.no}</span>
          </p>
          <div className="mx-auto mt-5 max-w-sm rounded-xl bg-surface p-4 text-left text-[13.5px] leading-relaxed text-[#4a4a58]">
            {order.method === "upi" ? (
              <>
                Thanks for paying <span className="font-semibold text-ink">{formatPrice(order.total, 0)}</span> by UPI (UTR{" "}
                <span className="font-semibold text-ink">{order.utr}</span>). We will verify the payment and dispatch your order.
              </>
            ) : (
              <>
                Please keep <span className="font-semibold text-ink">{formatPrice(order.total, 0)}</span> ready to pay in cash on delivery.
              </>
            )}{" "}
            Tracking details will be sent by SMS or email after dispatch. Expected delivery in 3–4 days.
          </div>
          <Link href="/" className="mt-6 inline-flex h-11 items-center rounded-lg bg-brand px-6 text-[14px] font-semibold text-white hover:bg-brand-dark">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (lines.length === 0) return <EmptyCart />;

  return (
    <form onSubmit={submit} className="pb-6">
      <CheckoutSteps current={1} />
      <div className="grid gap-5 lg:grid-cols-[1fr_360px] lg:items-start">
        <div className="space-y-5">
          <h1 className="sr-only">Checkout</h1>
          <Card step={1} title="Delivery Address">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name">
                <input name="name" required placeholder="e.g. Priya Sharma" autoComplete="name" className={FIELD} />
              </Field>
              <Field label="Mobile number">
                <input name="phone" required type="tel" pattern="[0-9+ ]{10,15}" placeholder="10-digit mobile number" autoComplete="tel" className={FIELD} />
              </Field>
              <Field label="Address (house no., building, street, area)" className="sm:col-span-2">
                <textarea name="address" required rows={3} autoComplete="street-address" className={`${FIELD} h-auto py-2.5`} />
              </Field>
              <Field label="City / Town">
                <input name="city" required autoComplete="address-level2" className={FIELD} />
              </Field>
              <Field label="PIN code">
                <input name="pincode" required pattern="[0-9]{6}" inputMode="numeric" maxLength={6} placeholder="6 digits" autoComplete="postal-code" className={FIELD} />
              </Field>
            </div>
          </Card>

          <Card step={2} title="Payment Method">
            <div className="space-y-3">
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border-2 border-line p-4 has-[:checked]:border-brand has-[:checked]:bg-brand-light/40">
                <input type="radio" name="payment" value="upi" defaultChecked className="h-4 w-4 accent-brand" />
                <IconBolt className="h-6 w-6 text-brand" />
                <span>
                  <span className="block text-[14px] font-semibold text-ink">UPI (Scan QR)</span>
                  <span className="block text-[12.5px] text-muted">Paytm, PhonePe, Google Pay, BHIM. QR shown after you confirm your address</span>
                </span>
              </label>
              <label className="flex cursor-not-allowed items-center gap-3 rounded-lg border-2 border-line bg-[#f7f7f9] p-4 opacity-60" aria-disabled="true">
                <input type="radio" name="payment" value="cod" disabled className="h-4 w-4" />
                <IconCash className="h-6 w-6 text-muted" />
                <span>
                  <span className="block text-[14px] font-semibold text-ink">Cash on Delivery</span>
                  <span className="block text-[12.5px] font-medium text-[#d32f2f]">Cash on delivery is not available for your area PIN code</span>
                </span>
              </label>
            </div>
            <p className="mt-3 text-[12px] text-muted">We never ask for card details, UPI PIN or OTP.</p>
          </Card>

          <Card step={3} title={`Review Items (${totals(lines).count})`}>
            <ul className="divide-y divide-line">
              {lines.map(({ item, product }) => (
                <li key={item.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                  {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
                  <img src={product.images[0]} alt="" className="!h-14 w-14 shrink-0 rounded-lg border border-line bg-[#f7f7f9] object-contain p-0.5" />
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-1 text-[13.5px] text-ink">{product.title}</p>
                    <p className="text-[12px] text-muted">Qty {item.qty}</p>
                  </div>
                  <span className="shrink-0 text-[14px] font-semibold text-ink">{formatPrice(product.price * item.qty, 0)}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <aside className="lg:sticky lg:top-[140px]">
          <PriceSummary lines={lines}>
            <button
              type="submit"
              className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand text-[15px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(173,0,97,0.7)] hover:bg-brand-dark"
            >
              <IconLock /> Continue
            </button>
            <p className="text-center text-[11.5px] text-muted">
              By placing this order you agree to our{" "}
              <Link href="/terms-and-conditions/" className="text-brand hover:underline">
                Terms
              </Link>
              .
            </p>
          </PriceSummary>
        </aside>
      </div>
    </form>
  );
}
