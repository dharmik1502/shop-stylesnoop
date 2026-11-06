"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "../data/products";
import { IconSearch } from "./Icons";
import ProductCard from "./ProductCard";

function search(q: string) {
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];
  return PRODUCTS.map((p) => {
    const title = p.title.toLowerCase();
    const body = `${p.category} ${p.description.join(" ")}`.toLowerCase();
    let score = 0;
    for (const t of terms) {
      if (title.includes(t)) score += 3;
      else if (body.includes(t)) score += 1;
      else return null;
    }
    return { p, score };
  })
    .filter((r): r is { p: (typeof PRODUCTS)[number]; score: number } => r !== null)
    .sort((a, b) => b.score - a.score || b.p.reviews - a.p.reviews)
    .map((r) => r.p);
}

export default function SearchResults() {
  const q = (useSearchParams().get("q") ?? "").trim();
  const results = search(q);

  return (
    <div className="py-6">
      <h1 className="text-[20px] font-bold text-ink sm:text-[24px]">
        {q ? (
          <>
            Results for <span className="text-brand">&ldquo;{q}&rdquo;</span>
          </>
        ) : (
          "Search"
        )}
      </h1>
      {q && (
        <p className="mt-1 text-[13px] text-muted">
          {results.length} product{results.length === 1 ? "" : "s"} found
        </p>
      )}

      {results.length > 0 ? (
        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-8 max-w-md rounded-2xl border border-line bg-white px-6 py-12 text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-light text-brand">
            <IconSearch className="h-8 w-8" />
          </span>
          <p className="mt-4 text-[16px] font-semibold text-ink">{q ? "No matching products" : "What are you looking for?"}</p>
          <p className="mt-1 text-[13.5px] text-muted">
            {q ? "Try a different or more general keyword." : "Use the search bar above to find products."}
          </p>
          <Link href="/category/" className="mt-5 inline-flex h-10 items-center rounded-lg bg-brand px-5 text-[13.5px] font-semibold text-white">
            Browse Categories
          </Link>
        </div>
      )}
    </div>
  );
}
