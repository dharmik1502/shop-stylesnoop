"use client";

import { useEffect, useState } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Live countdown to `endsAt`. Renders placeholders until mounted so the static
 * HTML matches the first client render, and hides itself once the time is up.
 */
export default function Countdown({ endsAt, label = "Offer ends in" }: { endsAt: string; label?: string }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const first = setTimeout(() => setNow(Date.now()), 0);
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  const left = now === null ? null : Math.max(0, new Date(endsAt).getTime() - now);
  if (left === 0) return null;

  const parts =
    left === null
      ? ["--", "--", "--", "--"]
      : [Math.floor(left / 864e5), Math.floor(left / 36e5) % 24, Math.floor(left / 6e4) % 60, Math.floor(left / 1e3) % 60].map(pad);

  return (
    <div className="flex flex-wrap items-center gap-2" role="timer" aria-label={label}>
      <span className="text-[11.5px] font-semibold tracking-wider text-[#ffe9b0]/90 uppercase">{label}</span>
      <div className="flex items-center gap-1">
        {parts.map((v, i) => (
          <span key={i} className="flex items-center gap-1">
            <span className="flex min-w-[42px] flex-col items-center rounded-md bg-black/30 px-1.5 py-1 ring-1 ring-[#f4c56a]/40 backdrop-blur-sm">
              <span className="text-[16px] leading-none font-bold text-white tabular-nums">{v}</span>
              <span className="mt-0.5 text-[9px] font-medium tracking-wider text-[#ffe9b0]/80 uppercase">{["Days", "Hrs", "Min", "Sec"][i]}</span>
            </span>
            {i < 3 && <span className="font-bold text-[#f4c56a]">:</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
