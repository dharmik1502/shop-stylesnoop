import type { Metadata } from "next";
import { Suspense } from "react";
import SearchResults from "../components/SearchResults";
import Shell from "../components/Shell";

export const metadata: Metadata = { title: "Search", robots: { index: false } };

export default function SearchPage() {
  return (
    <Shell>
      {/* useSearchParams needs a Suspense boundary on a statically exported page. */}
      <Suspense fallback={<div className="py-16 text-center text-[14px] text-muted">Loading results…</div>}>
        <SearchResults />
      </Suspense>
    </Shell>
  );
}
