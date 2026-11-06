import Link from "next/link";
import { IconChevronLeft, IconChevronRight } from "./Icons";

export function pageHref(base: string, page: number) {
  return page <= 1 ? base : `${base}page/${page}/`;
}

/** Page numbers to show: first, last, and a window around the current page. */
function pages(page: number, total: number): (number | "…")[] {
  const out: (number | "…")[] = [];
  for (let n = 1; n <= total; n++) {
    if (n === 1 || n === total || Math.abs(n - page) <= 1) out.push(n);
    else if (out[out.length - 1] !== "…") out.push("…");
  }
  return out;
}

export default function Pagination({ base, page, total }: { base: string; page: number; total: number }) {
  if (total <= 1) return null;
  const btn = "flex h-9 min-w-9 items-center justify-center rounded-lg border px-3 text-[13.5px] font-medium transition-colors";
  const idle = `${btn} border-line bg-white text-ink hover:border-brand hover:text-brand`;
  const disabled = `${btn} pointer-events-none border-line bg-white text-[#c4c4cc]`;

  return (
    <nav aria-label="Pagination" className="flex flex-col items-center gap-3 py-8">
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {page > 1 ? (
          <Link href={pageHref(base, page - 1)} className={idle} aria-label="Previous page">
            <IconChevronLeft /> <span className="ml-1 hidden sm:inline">Previous</span>
          </Link>
        ) : (
          <span className={disabled} aria-hidden="true">
            <IconChevronLeft /> <span className="ml-1 hidden sm:inline">Previous</span>
          </span>
        )}

        {pages(page, total).map((n, i) =>
          n === "…" ? (
            <span key={`gap-${i}`} className="px-1 text-muted">
              …
            </span>
          ) : (
            <Link
              key={n}
              href={pageHref(base, n)}
              aria-current={n === page ? "page" : undefined}
              className={n === page ? `${btn} border-brand bg-brand text-white` : idle}
            >
              {n}
            </Link>
          ),
        )}

        {page < total ? (
          <Link href={pageHref(base, page + 1)} className={idle} aria-label="Next page">
            <span className="mr-1 hidden sm:inline">Next</span> <IconChevronRight />
          </Link>
        ) : (
          <span className={disabled} aria-hidden="true">
            <span className="mr-1 hidden sm:inline">Next</span> <IconChevronRight />
          </span>
        )}
      </div>
      <p className="text-[12px] text-muted">
        Page {page} of {total}
      </p>
    </nav>
  );
}
