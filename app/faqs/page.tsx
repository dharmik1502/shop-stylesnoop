import type { Metadata } from "next";
import { faqLd, pageMeta } from "../lib/seo";
import { IconChevronDown } from "../components/Icons";
import JsonLd from "../components/JsonLd";
import StaticPage from "../components/StaticPage";
import { SITE } from "../lib/site";

export const metadata: Metadata = pageMeta({
  title: "FAQs – Delivery, Cash on Delivery, Returns & Tracking",
  description: "Answers to common questions about StyleSnoop delivery time, Cash on Delivery, 7-day returns, order cancellation and shipment tracking.",
  path: "/faqs/",
  keywords: ["StyleSnoop FAQ", "delivery time", "cash on delivery", "return policy", "order tracking", "cancel order"],
});

const GROUPS: { title: string; items: [string, string][] }[] = [
  {
    title: "Orders, Delivery & Payment",
    items: [
      ["Dispatch & Delivery Time?", "Orders are dispatched on the same working day. Delivery time depends on the courier partner and your location."],
      ["Serviceable Pincode for Delivery?", "We ship products across India."],
      ["Available Payment Method?", "Cash on Delivery only."],
      ["Order Tracking Option?", "After dispatch, you can track the shipment on the courier’s website using tracking details sent via SMS or email."],
    ],
  },
  {
    title: "Returns & Cancellations",
    items: [
      ["Return-Refund Option?", "Available with a simple request via email."],
      ["Period For Return Request?", "Within 7 days after receiving the order."],
      ["Order Cancellation Option?", "Available with a simple request via email, before dispatch."],
    ],
  },
  {
    title: "Footwear",
    items: [
      ["How durable are my shoes?", "Designed for everyday wear and regular use. Avoid heavy trekking or intense workouts for maximum life."],
      ["How comfortable are my shoes?", "Shoes feature lightweight, flexible soles and cushioned insoles to distribute weight evenly for all-day comfort."],
      ["Are shoes weather-resistant?", "Suitable for normal daily weather conditions and remain breathable and airy. Not recommended for extreme sports."],
      ["What colors do shoes come in?", "Multiple color options are available for most styles. Check individual product pages for current color variants."],
      ["Will the color of my shoes bleed or fade?", "Uppers are tested for color fastness. Proper care will help maintain color for a long time."],
      ["Are shoes eco-friendly?", "Shoes use modern performance materials similar to most high-end footwear. An eco-focused line is planned for the future."],
      ["Can shoes be used for running, gym, or training?", "These are all-day lifestyle sneakers optimized for comfort, not for professional sports, gym, or running."],
      ["Will I sweat a lot in shoes?", "Breathable uppers help keep feet comfortable even in warm conditions."],
    ],
  },
];

export default function FaqsPage() {
  return (
    <StaticPage title="Frequently Asked Questions" meta="Quick answers about orders, delivery, returns and products.">
      <JsonLd data={faqLd(GROUPS.flatMap((g) => g.items))} />
      {GROUPS.map((g) => (
        <section key={g.title} className="mb-8">
          <h2>{g.title}</h2>
          <div className="divide-y divide-line overflow-hidden rounded-xl border border-line">
            {g.items.map(([q, a], i) => (
              <details key={q} className="group bg-white open:bg-[#fcfaff]" open={i === 0 && g === GROUPS[0]}>
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-4 py-3.5 text-[14.5px] font-semibold text-ink hover:text-brand">
                  {q}
                  <IconChevronDown className="h-4 w-4 shrink-0 text-muted transition group-open:rotate-180" />
                </summary>
                <p className="!mb-0 px-4 pb-4">{a}</p>
              </details>
            ))}
          </div>
        </section>
      ))}
      <div className="rounded-xl bg-surface p-5">
        <p className="!mb-1 !text-ink">
          <strong>Any other questions?</strong> Drop us an email at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
        <p className="!mb-0 !text-[13px] !text-muted">⚠️ We never ask for any credit/debit card number, OTP, PIN, CVV, etc.</p>
      </div>
    </StaticPage>
  );
}
