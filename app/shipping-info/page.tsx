import type { Metadata } from "next";
import { pageMeta } from "../lib/seo";
import StaticPage from "../components/StaticPage";
import { SITE } from "../lib/site";

export const metadata: Metadata = pageMeta({
  title: "Shipping Info – Free Delivery Across India in 3–4 Days",
  description: "Free shipping on every NuttyNest order. Same-day dispatch, delivery across India in 3–4 days, Cash on Delivery and SMS/email tracking.",
  path: "/shipping-info/",
  keywords: ["free shipping India", "free delivery", "shipping policy", "delivery time India", "same day dispatch"],
});

export default function ShippingPage() {
  return (
    <StaticPage title="Shipping Information">
      <section id="dispatch" className="mb-4">
        <h2>Dispatch</h2>
        <p>Orders placed before the daily cutoff time (typically 2 PM IST, Monday–Saturday, excluding public holidays) are dispatched the same working day. Orders placed after the cutoff are dispatched on the next working day.</p>
      </section>
      <section id="delivery" className="mb-4">
        <h2>Delivery Time and Charges</h2>
        <p>We ship across India. Delivery usually takes 3–4 days depending on your location. Shipping is free on all orders, and payment is collected in cash on delivery.</p>
      </section>
      <section id="tracking" className="mb-4">
        <h2>Tracking</h2>
        <p>After dispatch, tracking details are shared via SMS or email so you can follow your shipment on the courier&rsquo;s website.</p>
      </section>
      <section id="contact" className="mb-4">
        <h2>Questions?</h2>
        <p>
          For anything about a shipment, email us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with your order number. We
          aim to respond within 24–48 hours.
        </p>
      </section>
      <hr />
    </StaticPage>
  );
}
