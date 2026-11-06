"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { formatPrice } from "../data/products";
import { addToCart } from "../lib/cart";
import { IconBolt, IconCart, IconCheck } from "./Icons";

export function QtyStepper({ value, onChange, min = 1, max = 10 }: { value: number; onChange: (n: number) => void; min?: number; max?: number }) {
  const btn =
    "flex h-full w-9 cursor-pointer items-center justify-center text-[18px] leading-none text-ink transition hover:bg-surface disabled:cursor-not-allowed disabled:text-[#c4c4cc]";
  return (
    <div className="inline-flex h-10 items-stretch overflow-hidden rounded-lg border border-line bg-white">
      <button type="button" aria-label="Decrease quantity" disabled={value <= min} onClick={() => onChange(value - 1)} className={btn}>
        −
      </button>
      <span className="flex w-10 items-center justify-center border-x border-line text-[14px] font-semibold tabular-nums" aria-live="polite">
        {value}
      </span>
      <button type="button" aria-label="Increase quantity" disabled={value >= max} onClick={() => onChange(value + 1)} className={btn}>
        +
      </button>
    </div>
  );
}

export default function BuyButtons({ productId, price }: { productId: number; price?: number }) {
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function buyNow() {
    addToCart(productId, qty);
    router.push("/cart/");
  }

  function add() {
    addToCart(productId, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  const addBtn = `flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 text-[14.5px] font-semibold transition ${
    added ? "border-green bg-green text-white" : "border-brand bg-white text-brand hover:bg-brand-light"
  }`;
  const buyBtn =
    "flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand text-[14.5px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(173,0,97,0.7)] transition hover:bg-brand-dark";

  return (
    <>
      <div className="mt-6">
        <div className="flex items-center gap-3">
          <span className="text-[13.5px] font-medium text-ink">Quantity</span>
          <QtyStepper value={qty} onChange={setQty} />
        </div>
        <div className="mt-4 hidden gap-3 sm:flex">
          <button type="button" onClick={add} className={addBtn}>
            {added ? <IconCheck /> : <IconCart className="h-5 w-5" />}
            {added ? "Added to Cart" : "Add to Cart"}
          </button>
          <button type="button" onClick={buyNow} className={buyBtn}>
            <IconBolt className="h-4 w-4" />
            Buy Now
          </button>
        </div>
      </div>

      {/* Sticky action bar on phones */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.2)] backdrop-blur sm:hidden">
        <div className="flex gap-2.5">
          <button type="button" onClick={add} className={addBtn}>
            {added ? <IconCheck /> : <IconCart className="h-5 w-5" />}
            {added ? "Added" : "Add to Cart"}
          </button>
          <button type="button" onClick={buyNow} className={buyBtn}>
            Buy Now{price !== undefined && ` · ${formatPrice(price * qty, 0)}`}
          </button>
        </div>
      </div>
    </>
  );
}
