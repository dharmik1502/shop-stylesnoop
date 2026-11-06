"use client";

import { useSyncExternalStore } from "react";

/**
 * Cart kept in localStorage. There is no backend: the static site stores the
 * items in the browser and every component reads them through useCart().
 */
export type CartItem = { id: number; qty: number };

const KEY = "stylesnoop-cart";
const EVENT = "stylesnoop-cart-change";
const EMPTY: CartItem[] = [];

let cachedRaw: string | null = null;
let cachedItems: CartItem[] = EMPTY;

function read(): CartItem[] {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(KEY);
  } catch {
    return EMPTY;
  }
  if (raw === cachedRaw) return cachedItems;
  cachedRaw = raw;
  try {
    const parsed = raw ? (JSON.parse(raw) as CartItem[]) : [];
    cachedItems = Array.isArray(parsed) ? parsed.filter((i) => i && i.qty > 0) : EMPTY;
  } catch {
    cachedItems = EMPTY;
  }
  return cachedItems;
}

function write(items: CartItem[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    // Storage unavailable (private mode, blocked). The page still works.
  }
  window.dispatchEvent(new Event(EVENT));
}

export function addToCart(id: number, qty = 1) {
  const items = read().map((i) => ({ ...i }));
  const found = items.find((i) => i.id === id);
  if (found) found.qty += qty;
  else items.push({ id, qty });
  write(items);
}

export function setQty(id: number, qty: number) {
  const items = read()
    .map((i) => (i.id === id ? { ...i, qty } : i))
    .filter((i) => i.qty > 0);
  write(items);
}

export function removeFromCart(id: number) {
  write(read().filter((i) => i.id !== id));
}

export function clearCart() {
  write([]);
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

export function useCart(): CartItem[] {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}
