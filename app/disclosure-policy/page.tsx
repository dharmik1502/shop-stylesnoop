import type { Metadata } from "next";
import { pageMeta } from "../lib/seo";
import StaticPage, { PoweredBy } from "../components/StaticPage";
import { SITE } from "../lib/site";

export const metadata: Metadata = pageMeta({
  title: "Disclosure Policy",
  description: "Read the NuttyNest disclosure policy and how we present information on our website.",
  path: "/disclosure-policy/",
  keywords: ["disclosure policy"],
});

export default function DisclosurePage() {
  return (
    <StaticPage title="Disclosure Policy">
      <section id="disclosure" className="mb-4">
        <h2>Disclosure of Information</h2>
        <p>Depending on the requested Services or as necessary to complete any transaction or provide any Service you have requested, we may share your information with our affiliates, contracted companies, and service providers (collectively, “Service Providers”) that assist in the operation of the Website and Services.</p>
        <p>We do not share personally identifiable information with third parties unless required by law. Service Providers receive only the data needed to perform their functions and are prohibited from using it for marketing or other unrelated purposes.</p>
      </section>
      <section id="categories" className="mb-4">
        <h2>Categories of Service Providers We May Share Data With</h2>
        <ul>
          <li>Advertising networks (e.g., Google AdSense)</li>
          <li>Analytics providers (e.g., Google Analytics)</li>
          <li>Payment processors (if applicable)</li>
          <li>Hosting and infrastructure services</li>
        </ul>
      </section>
      <section id="legal" className="mb-4">
        <h2>Legal Disclosures</h2>
        <p>We may disclose collected information when required by law (for example, to comply with a subpoena), to protect our legal rights, to ensure the safety of users or the public, or to investigate suspected fraud or security issues.</p>
      </section>
      <hr />
      <PoweredBy company={SITE.company} email={SITE.email} />
    </StaticPage>
  );
}
