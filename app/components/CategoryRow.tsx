import Link from "next/link";
import { CATEGORIES } from "../data/categories";
import { getByCategory } from "../data/products";

export function categoryLabel(name: string) {
  return name === "HOT DEALS" ? "Hot Deals" : name;
}

/** "Shop by Category" tiles: a scrolling row on phones, a grid on larger screens. */
export default function CategoryRow({ showCount = false }: { showCount?: boolean }) {
  return (
    <div className="scroll-x -mx-[var(--container-padding)] flex gap-3 overflow-x-auto px-[var(--container-padding)] sm:mx-0 sm:grid sm:grid-cols-5 sm:gap-4 sm:overflow-visible sm:px-0">
      {CATEGORIES.map((cat) => (
        <Link
          key={cat.slug}
          href={`/category/${cat.slug}/`}
          className="group flex w-[104px] shrink-0 flex-col items-center rounded-2xl border border-line bg-white p-3 text-center transition hover:border-brand/30 hover:shadow-[0_10px_24px_-14px_rgba(173,0,97,0.5)] sm:w-auto sm:p-4"
        >
          <span className="mb-2.5 block aspect-square w-full overflow-hidden rounded-xl bg-brand-light">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
            <img
              src={cat.image}
              alt=""
              loading="lazy"
              className="!h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </span>
          <span className="text-[13px] font-semibold text-ink group-hover:text-brand sm:text-[14px]">{categoryLabel(cat.name)}</span>
          {showCount && <span className="text-[11.5px] text-muted">{getByCategory(cat.slug).length} products</span>}
        </Link>
      ))}
    </div>
  );
}
