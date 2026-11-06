import Link from "next/link";
import { IconChevronRight } from "./Icons";

export default function SectionHeader({
  title,
  subtitle,
  href,
  linkLabel = "View all",
  as: Tag = "h2",
}: {
  title: React.ReactNode;
  subtitle?: string;
  href?: string;
  linkLabel?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <Tag className="text-[18px] font-bold tracking-tight text-ink sm:text-[22px]">{title}</Tag>
        {subtitle && <p className="mt-0.5 text-[13px] text-muted">{subtitle}</p>}
      </div>
      {href && (
        <Link href={href} className="flex shrink-0 items-center gap-0.5 text-[13px] font-semibold text-brand hover:underline">
          {linkLabel}
          <IconChevronRight />
        </Link>
      )}
    </div>
  );
}
