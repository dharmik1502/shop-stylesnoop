"use client";

import { useState } from "react";
import { addToCart } from "../lib/cart";
import { IconCart, IconCheck } from "./Icons";

/** Compact "Add to Cart" button used inside product cards. */
export default function AddToCartButton({ productId, title }: { productId: number; title: string }) {
  const [added, setAdded] = useState(false);

  function add(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    addToCart(productId);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={add}
      aria-label={`Add ${title} to cart`}
      className={`relative z-10 flex h-9 w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg text-[13px] font-semibold transition-colors duration-200 ${
        added ? "bg-green text-white" : "bg-brand-light text-brand hover:bg-brand hover:text-white"
      }`}
    >
      {added ? (
        <>
          <IconCheck />
          Added to Cart
        </>
      ) : (
        <>
          <IconCart className="h-4 w-4" />
          Add to Cart
        </>
      )}
    </button>
  );
}
