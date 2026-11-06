import Link from "next/link";
import { IconChevronRight } from "./Icons";

export type Crumb = { href?: string; label: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-[12.5px] text-muted">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
        </li>
        {items.map((c) => (
          <li key={c.label} className="flex min-w-0 items-center gap-1">
            <IconChevronRight className="h-3.5 w-3.5 shrink-0 text-[#b0b0bc]" />
            {c.href ? (
              <Link href={c.href} className="hover:text-brand">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="line-clamp-1 text-ink">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
