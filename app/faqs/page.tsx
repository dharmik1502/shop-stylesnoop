import type { Metadata } from "next";
import { faqLd, pageMeta } from "../lib/seo";
import { IconChevronDown } from "../components/Icons";
import JsonLd from "../components/JsonLd";
import StaticPage from "../components/StaticPage";
import { SITE } from "../lib/site";

export const metadata: Metadata = pageMeta({
  title: "FAQs – Delivery, Cash on Delivery, Returns & Tracking",
  description: "Answers to common questions about NuttyNest dry fruits: freshness, storage, shelf life, delivery time, Cash on Delivery, returns and order tracking.",
  path: "/faqs/",
  keywords: ["NuttyNest FAQ", "delivery time", "cash on delivery", "return policy", "order tracking", "cancel order", "how to store dry fruits", "dry fruits shelf life"],
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
    title: "Dry Fruits, Freshness & Storage",
    items: [
      ["How fresh are the dry fruits?", "We pack in small batches from fresh stock. Every pouch is printed with its packing date and best-before date."],
      ["How should I store dry fruits after opening?", "Reseal the zip-lock pouch or move the contents to an airtight jar, and keep it in a cool, dry place away from sunlight. In hot, humid weather, store nuts, dates and figs in the refrigerator."],
      ["What is the shelf life?", "Most nuts and dried fruits keep for 6–9 months unopened. Once opened, use within 1–2 months for the best taste and crunch."],
      ["Are your products natural?", "Yes. Nuts, dates and raisins are natural with no added colour or preservatives. Roasted and salted items list their salt or seasoning on the product page."],
      ["How many almonds should I eat in a day?", "A common serving is a small handful (about 20–25 g, or 8–10 almonds). Soaking them overnight makes them easier to digest."],
      ["Do the packs contain allergens?", "Our products are nuts or are packed in a facility that handles tree nuts and peanuts. Please avoid them if you have a nut allergy."],
      ["Do you offer bulk or corporate gift orders?", "Yes. Email us with the products, quantity and delivery city, and we will share a quote for bulk packs or custom gift boxes."],
    ],
  },
];

export default function FaqsPage() {
  return (
    <StaticPage title="Frequently Asked Questions" meta="Quick answers about orders, delivery, returns, freshness and storage.">
      <JsonLd data={faqLd(GROUPS.flatMap((g) => g.items))} />
      {GROUPS.map((g) => (
        <section key={g.title} className="mb-8">
          <h2>{g.title}</h2>
          <div className="divide-y divide-line overflow-hidden rounded-xl border border-line">
            {g.items.map(([q, a], i) => (
              <details key={q} className="group bg-white open:bg-[#fffaf3]" open={i === 0 && g === GROUPS[0]}>
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
