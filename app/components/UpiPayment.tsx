"use client";

import QRCode from "qrcode";
import { useEffect, useState, useSyncExternalStore } from "react";
import { formatPrice } from "../data/products";
import { UPI, UPI_APPS, upiAppLink, upiLink } from "../lib/site";
import { IconLock } from "./Icons";

/** How long one QR / payment request stays valid. */
const VALID_MS = 5 * 60 * 1000;

type Platform = "android" | "ios" | "desktop";

function detectPlatform(): Platform {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return "android";
  if (/iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) return "ios";
  return "desktop";
}
const noSubscribe = () => () => {};
const serverPlatform = (): Platform => "desktop";

function mmss(ms: number) {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

/**
 * UPI payment step for one order. On phones it offers one-tap Google Pay / PhonePe / Paytm buttons;
 * everywhere it shows a QR with the exact amount. The request is valid for 5 minutes.
 */
export default function UpiPayment({ amount, orderNo, onPaid }: { amount: number; orderNo: string; onPaid: (utr: string) => void }) {
  const link = upiLink(amount, orderNo);
  const platform = useSyncExternalStore(noSubscribe, detectPlatform, serverPlatform);

  const [qr, setQr] = useState<string | null>(null);
  const [utr, setUtr] = useState("");
  // A UPI transaction ID (UTR / UPI Ref No.) is always 12 digits; the app shows it only after a successful payment.
  const utrValid = /^\d{12}$/.test(utr);

  const [deadline, setDeadline] = useState(() => Date.now() + VALID_MS);
  const [now, setNow] = useState(() => Date.now());
  const left = deadline - now;
  const expired = left <= 0;

  useEffect(() => {
    if (expired) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [expired]);

  useEffect(() => {
    let live = true;
    QRCode.toDataURL(link, { width: 640, margin: 1, errorCorrectionLevel: "M" })
      .then((url) => live && setQr(url))
      .catch(() => live && setQr(null));
    return () => {
      live = false;
    };
  }, [link]);

  function restart() {
    const t = Date.now();
    setDeadline(t + VALID_MS);
    setNow(t);
  }

  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-line bg-white text-center">
      <div className="bg-brand px-6 py-4 text-white">
        <p className="text-[12.5px] tracking-wider uppercase opacity-90">{platform === "desktop" ? "Scan & Pay" : "Pay with UPI"}</p>
        <p className="mt-0.5 text-[26px] font-bold">{formatPrice(amount, 0)}</p>
        <p className="text-[12.5px] opacity-90">Order {orderNo}</p>
      </div>

      <div className="px-6 py-6">
        <p
          role="timer"
          className={`mx-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[13px] font-semibold ${
            expired ? "bg-[#fdecea] text-[#d32f2f]" : left < 60_000 ? "bg-[#fff4e5] text-[#b26a00]" : "bg-surface text-ink"
          }`}
        >
          {expired ? (
            "Payment request expired"
          ) : (
            <>
              Complete payment in <span className="tabular-nums">{mmss(left)}</span>
            </>
          )}
        </p>

        {expired ? (
          <div className="mt-4 rounded-xl border border-dashed border-line p-6">
            <p className="text-[13.5px] text-muted">This QR is no longer valid. If you have not paid yet, generate a new one.</p>
            <button
              type="button"
              onClick={restart}
              className="mt-4 inline-flex h-11 cursor-pointer items-center rounded-lg border-2 border-brand px-5 text-[14px] font-semibold text-brand hover:bg-brand-light/40"
            >
              Generate new QR
            </button>
          </div>
        ) : (
          <>
            {platform !== "desktop" && (
              <div className="mt-4">
                <p className="mb-2 text-left text-[12.5px] font-medium text-ink">Pay using</p>
                <div className="grid grid-cols-3 gap-2">
                  {UPI_APPS.map((app) => (
                    <a
                      key={app.id}
                      href={upiAppLink(app, platform, amount, orderNo)}
                      className="flex flex-col items-center gap-1.5 rounded-xl border border-line p-3 text-[12.5px] font-semibold text-ink hover:border-brand"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full text-[14px] font-bold text-white" style={{ background: app.color }}>
                        {app.name[0]}
                      </span>
                      {app.name}
                    </a>
                  ))}
                </div>
                <a href={link} className="mt-2 inline-block text-[12.5px] text-brand hover:underline">
                  Other UPI app
                </a>
                <p className="mt-4 text-[12px] text-muted">Or scan this QR from another phone</p>
              </div>
            )}

            <div className="mx-auto mt-3 flex aspect-square w-full max-w-[240px] items-center justify-center rounded-xl border border-line bg-white p-3">
              {qr ? (
                // eslint-disable-next-line @next/next/no-img-element -- generated data URL
                <img src={qr} alt={`UPI QR code to pay ${formatPrice(amount, 0)} to ${UPI.id}`} className="h-full w-full" />
              ) : (
                <span className="text-[13px] text-muted">Generating QR…</span>
              )}
            </div>
            {platform === "desktop" && (
              <p className="mt-2 text-[12.5px] text-muted">Scan with Google Pay, PhonePe, Paytm, BHIM or any UPI app. The amount is filled in for you.</p>
            )}
          </>
        )}

        <p className="mt-3 text-[12.5px] text-muted">
          UPI ID: <span className="font-semibold text-ink select-all">{UPI.id}</span>
        </p>

        <label className="mt-5 block text-left">
          <span className="mb-1.5 block text-[12.5px] font-medium text-ink">UPI transaction ID (UTR / UPI Ref No.)</span>
          <input
            value={utr}
            onChange={(e) => setUtr(e.target.value.replace(/\D/g, "").slice(0, 12))}
            inputMode="numeric"
            maxLength={12}
            placeholder="12-digit number shown after payment"
            className="h-11 w-full rounded-lg border border-line bg-white px-3.5 text-[14px] tracking-wider text-ink outline-none transition placeholder:tracking-normal placeholder:text-[#a0a0ac] focus:border-brand focus:ring-4 focus:ring-brand/10"
          />
          <span className="mt-1 block text-[11.5px] text-muted">
            {utr.length > 0 && !utrValid
              ? `${12 - utr.length} more digit${12 - utr.length === 1 ? "" : "s"} needed`
              : "After paying, copy it from the payment success screen in your UPI app."}
          </span>
        </label>

        <button
          type="button"
          disabled={!utrValid}
          onClick={() => onPaid(utr)}
          className="mt-3 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand text-[15px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(173,0,97,0.7)] hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-[#c9c9d3] disabled:shadow-none"
        >
          <IconLock /> Place Order
        </button>
        <p className="mt-3 text-[11.5px] text-muted">Never share your UPI PIN or OTP with anyone. You only enter the PIN inside your UPI app.</p>
      </div>
    </div>
  );
}
