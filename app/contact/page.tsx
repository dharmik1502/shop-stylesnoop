import type { Metadata } from "next";
import { pageMeta } from "../lib/seo";
import StaticPage, { PoweredBy } from "../components/StaticPage";
import { SITE } from "../lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact Us – Customer Support & Order Help",
  description: "Contact NuttyNest customer support by email for order help, tracking and product questions. We reply within 24–48 hours.",
  path: "/contact/",
  keywords: ["NuttyNest contact", "customer support", "order help", "customer care email", "track my order"],
});

const Email = () => <a href={`mailto:${SITE.email}`}>{SITE.email}</a>;

export default function ContactPage() {
  return (
    <StaticPage title="Contact Us">
      <section id="support" className="mb-4">
        <h2>Need Help?</h2>
        <p>
          If you need assistance with placing an order, understanding product details, checking your order status, tracking a
          shipment, or resolving any other shopping related concern with {SITE.name}, please contact us at <Email />. Our support
          team will be happy to help you with your concern.
        </p>
        <p>
          For questions about an existing order, please include your order number, if available, along with a brief description
          of the issue. Providing these details can help us understand your request and assist you more efficiently.
        </p>
      </section>
      <section id="community" className="mb-4">
        <h2>We Would Love to Hear From You</h2>
        <p>
          Have feedback, suggestions, product ideas, or simply want to get in touch with us? We would be glad to hear from you.
          You can reach our team at <Email />.
        </p>
        <p>
          Your feedback helps us improve our products, services, and shopping experience. We appreciate being part of your online
          shopping journey and look forward to hearing from the {SITE.name} community.
        </p>
      </section>
      <section id="locations" className="mb-4">
        <h2>Where We Operate</h2>
        <p>
          We operate from multiple hubs across India, including Surat, Mumbai, and Delhi. These locations help us manage inventory
          efficiently and ensure swift delivery across the country through our online platform <strong>{SITE.domain}</strong>.
        </p>
      </section>
      <section id="security" className="mb-4">
        <h2>Important Security Notices</h2>
        <p>
          We never ask for sensitive payment information such as card details, UPI credentials, or OTP via email or any
          unofficial channel. All transactions are processed securely on our website.
        </p>
        <p>
          We do not run a calling customer care service. Any phone number online claiming to be {SITE.name} support is not
          authentic. Do not share bank or card details with them. For genuine support, always use <Email />.
        </p>
      </section>
      <section id="commitment" className="mb-4">
        <h2>Our Commitment to You</h2>
        <p>
          We aim to respond to all emails within 24–48 hours. Whether you&rsquo;re asking about a specific product or need help
          with an order, our goal is to make your {SITE.name} experience smooth and satisfying.
        </p>
      </section>
      <hr />
      <PoweredBy company={SITE.company} email={SITE.email} />
    </StaticPage>
  );
}
