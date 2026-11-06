"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * Current year, read from the visitor's clock. The static HTML carries the
 * build-time year as the fallback so hydration matches, then the browser
 * value takes over.
 */
export default function Year({ fallback }: { fallback: number }) {
  return useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => fallback,
  );
}
