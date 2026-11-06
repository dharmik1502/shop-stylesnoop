"use client";

import { useState } from "react";
import { IconPin } from "./Icons";

/** Delivery estimate by PIN code. All of India is serviceable; delivery takes 3–4 days (see Shipping Info). */
export default function DeliveryCheck() {
  const [pin, setPin] = useState("");
  const [result, setResult] = useState<{ ok: boolean; text: string } | null>(null);

  function check(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[1-9][0-9]{5}$/.test(pin)) {
      setResult({ ok: false, text: "Please enter a valid 6-digit PIN code." });
      return;
    }
    const fmt = (d: Date) => d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
    const a = new Date();
    a.setDate(a.getDate() + 3);
    const b = new Date();
    b.setDate(b.getDate() + 4);
    setResult({ ok: true, text: `Delivery by ${fmt(a)} – ${fmt(b)} · Free · Cash on Delivery available` });
  }

  return (
    <div className="mt-6 rounded-xl border border-line p-4">
      <p className="flex items-center gap-2 text-[13.5px] font-semibold text-ink">
        <IconPin className="h-4 w-4 text-brand" /> Check delivery
      </p>
      <form onSubmit={check} className="mt-2.5 flex gap-2">
        <input
          value={pin}
          onChange={(e) => {
            setPin(e.target.value.replace(/\D/g, "").slice(0, 6));
            setResult(null);
          }}
          inputMode="numeric"
          placeholder="Enter PIN code"
          aria-label="PIN code"
          className="h-10 w-full max-w-[200px] rounded-lg border border-line px-3 text-[14px] outline-none focus:border-brand focus:ring-4 focus:ring-brand/10"
        />
        <button type="submit" className="h-10 cursor-pointer rounded-lg px-4 text-[13.5px] font-semibold text-brand hover:bg-brand-light">
          Check
        </button>
      </form>
      {result && <p className={`mt-2 text-[12.5px] ${result.ok ? "text-green" : "text-sale"}`}>{result.text}</p>}
    </div>
  );
}
