"use client";

import { useState } from "react";
import { IconChevronDown } from "./Icons";

const VISIBLE = 3;

export default function ProductDescription({ paragraphs }: { paragraphs: string[] }) {
  const [open, setOpen] = useState(false);
  const shown = open ? paragraphs : paragraphs.slice(0, VISIBLE);
  const hasMore = paragraphs.length > VISIBLE;

  return (
    <div className="text-[14.5px] leading-relaxed text-[#4a4a58]">
      {shown.map((p, i) => (
        <p key={i} className="mb-3">
          {p}
        </p>
      ))}
      {hasMore && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex cursor-pointer items-center gap-1 text-[13.5px] font-semibold text-brand hover:underline"
        >
          {open ? "Show less" : `Read more (${paragraphs.length - VISIBLE} more)`}
          <IconChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
        </button>
      )}
    </div>
  );
}
