import type { Metadata } from "next";
import { pageMeta } from "../lib/seo";
import StaticPage from "../components/StaticPage";
import { SITE } from "../lib/site";

export const metadata: Metadata = pageMeta({
  title: "Return & Refund Policy – 7-Day Easy Returns",
  description: "Read the NuttyNest return and refund policy: simple 7-day return requests by email and quick refunds.",
  path: "/refund-returns/",
  keywords: ["return policy", "refund policy", "easy returns", "7 day return", "exchange policy"],
});

const Email = () => <a href={`mailto:${SITE.email}`}>{SITE.email}</a>;

export default function RefundPage() {
  return (
    <StaticPage title="Refund and Returns Policy">
      <section id="returns" className="mb-4">
        <h2>Easy Return</h2>
        <p>At {SITE.name}, we want you to be satisfied with your purchase. If you are not happy with your products, you can request a return within 7 days of receiving your order.</p>
        <p>To start a return, email us at <Email /> with your order number, a brief reason and a photo of the product. Because dry fruits are food products, returns are accepted only for packs that arrive damaged, spoiled, tampered with or different from what you ordered. For hygiene reasons we cannot accept returns of opened packs that are in good condition.</p>
        <p>Once your return is approved and the product is picked up and inspected, a full refund will be processed within 5–7 business days to your original payment method (including COD adjustments where applicable).</p>
        <p>Return shipping costs are borne by the customer unless the item is defective or incorrectly shipped.</p>
      </section>
      <section id="cancellation" className="mb-4">
        <h2>Order Cancellation</h2>
        <p>You can cancel your order by emailing <Email /> with your order number before dispatch.</p>
        <p>Orders are usually shipped the same working day, so please send cancellation requests as early as possible. After dispatch, cancellation is not possible, but you may still initiate a return as per the policy above.</p>
        <p>On successful cancellation, any paid amount will be refunded within 5–7 business days.</p>
      </section>
      <section id="shipping" className="mb-4">
        <h2>Shipping Policy</h2>
        <p>Orders placed before the daily cutoff time (typically 2 PM IST, Monday–Saturday, excluding public holidays) are dispatched the same working day. Delivery usually takes 3–4 days depending on your location within India.</p>
        <p>Tracking details are shared via SMS or email so you can follow your shipment on the courier&rsquo;s website. Shipping is free on all orders.</p>
      </section>
      <section id="contact" className="mb-4">
        <h2>Contact Us</h2>
        <p>For questions about returns, refunds, cancellations, or shipping, email us at <Email />. Please include your order number and a clear description of your query. We aim to respond within 24–48 hours.</p>
      </section>
      <hr />
    </StaticPage>
  );
}
