import type { Metadata } from "next";
import { pageMeta } from "../lib/seo";
import Link from "next/link";
import StaticPage, { Toc } from "../components/StaticPage";
import { SITE } from "../lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: "How StyleSnoop collects, uses and protects your personal information when you shop with us.",
  path: "/privacy-policy/",
  keywords: ["privacy policy", "data protection"],
});

const TOC = [
  { href: "#interpretation", label: "Interpretation and Definitions" },
  { href: "#collecting", label: "Collecting and Using Your Personal Data" },
  { href: "#detailed", label: "Detailed Information on Processing" },
  { href: "#gdpr", label: "GDPR Privacy" },
  { href: "#ccpa", label: "CCPA/CPRA Privacy Notice" },
  { href: "#dnt", label: "\"Do Not Track\" (CalOPPA)" },
  { href: "#shine", label: "California \"Shine the Light\"" },
  { href: "#minors", label: "California Privacy Rights for Minors" },
  { href: "#children", label: "Children's Privacy" },
  { href: "#links", label: "Links to Other Websites" },
  { href: "#changes", label: "Changes to this Privacy Policy" },
  { href: "#contact", label: "Contact Us" },
];

export default function PrivacyPage() {
  const n = SITE.name;
  return (
    <StaticPage title="Privacy Policy" meta={<>Last updated: <strong>{SITE.policyDate}</strong></>}>
      <p>
        This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your information when
        you use the Service and explains your privacy rights and how the law protects you. By using the Service, you agree to the
        collection and use of information in accordance with this Privacy Policy.
      </p>
      <Toc items={TOC} />

      <section id="interpretation">
        <h2>Interpretation and Definitions</h2>
        <h3>Interpretation</h3>
        <p>
          Words with initial capital letters have meanings defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>
        <h3>Definitions</h3>
        <ul>
          <li><strong>Account</strong> means a unique account created for you to access our Service.</li>
          <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party.</li>
          <li><strong>Business</strong> (CCPA/CPRA) refers to {SITE.company} as the legal entity that collects Consumers&rsquo; personal information and determines the purposes and means of processing.</li>
          <li><strong>Company</strong> (&ldquo;the Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo;) refers to <strong>{SITE.company}</strong>, Surat, Gujarat, India.</li>
          <li><strong>Cookies</strong> are small files placed on your device by a website.</li>
          <li><strong>Device</strong> means any device that can access the Service such as a computer, cellphone, or tablet.</li>
          <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
          <li><strong>Service</strong> refers to the Website.</li>
          <li><strong>Website</strong> refers to <strong>{n}</strong>, accessible from <strong>{SITE.domain}</strong>.</li>
          <li><strong>You</strong> means the individual accessing or using the Service.</li>
        </ul>
      </section>

      <section id="collecting">
        <h2>Collecting and Using Your Personal Data</h2>
        <h3>Types of Data Collected – Personal Data</h3>
        <p>We may collect personally identifiable information such as:</p>
        <ul>
          <li>Email address</li>
          <li>First and last name</li>
          <li>Phone number</li>
          <li>Billing and shipping address</li>
          <li>Usage Data</li>
        </ul>
        <h3>Usage Data</h3>
        <p>Usage Data may include IP address, browser type, pages visited, time and date of visit, time spent on pages, and device identifiers.</p>
        <h3>Information from Third-Party Social Media Services</h3>
        <p>If you log in via a social account (e.g., Google, Facebook), we may receive basic profile information and email address as allowed by your settings.</p>
        <h3>Tracking Technologies and Cookies</h3>
        <p>
          We use Cookies and similar tracking technologies (beacons, tags, scripts) to track activity and store information. For
          details, see our <Link href="/cookie-policy/">Cookie Policy</Link>.
        </p>
        <h3>Use of Your Personal Data</h3>
        <ul>
          <li>Provide and maintain the Service and process orders.</li>
          <li>Manage your Account and customer relationship.</li>
          <li>Contact you regarding updates, orders, and support.</li>
          <li>Provide offers, promotions, and marketing (with opt-out options).</li>
          <li>Improve and personalize the Service through analytics.</li>
          <li>Detect, prevent and address technical or security issues.</li>
        </ul>
        <h3>Sharing Your Personal Information</h3>
        <ul>
          <li>With Service Providers (hosting, payment, analytics, advertising).</li>
          <li>With affiliates and business partners, bound by this Policy.</li>
          <li>For business transfers (e.g., merger or acquisition).</li>
          <li>With your consent or as otherwise required by law.</li>
        </ul>
        <h3>Retention of Your Personal Data</h3>
        <p>We retain Personal Data only as long as necessary for the purposes described in this Policy and as required by law.</p>
        <h3>Transfer of Your Personal Data</h3>
        <p>Your information may be transferred to and maintained on servers located outside your jurisdiction. By using the Service, you consent to such transfers subject to appropriate safeguards.</p>
        <h3>Delete Your Personal Data</h3>
        <p>You can request deletion or correction of your Personal Data by contacting us, subject to legal obligations to retain certain records.</p>
        <h3>Disclosure of Your Personal Data</h3>
        <p>We may disclose Personal Data in connection with business transfers, to comply with legal obligations, to protect rights and safety, or to prevent fraud and abuse.</p>
        <h3>Security of Your Personal Data</h3>
        <p>We use commercially reasonable safeguards to protect Personal Data, but no method of transmission over the Internet or electronic storage is 100% secure.</p>
      </section>

      <section id="detailed">
        <h2>Detailed Information on Processing</h2>
        <p>We use third-party Service Providers for analytics and advertising (e.g., Google Analytics, Google Ads, AdMob). These providers may use cookies and similar technologies in accordance with their own privacy policies.</p>
      </section>
      <section id="gdpr">
        <h2>GDPR Privacy</h2>
        <h3>Legal Basis</h3>
        <p>Depending on the context, we may process Personal Data based on consent, performance of a contract, legal obligation, vital interests, public interest, or legitimate interests.</p>
        <h3>Your GDPR Rights</h3>
        <ul>
          <li>Right of access, correction and deletion</li>
          <li>Right to restrict or object to processing</li>
          <li>Right to data portability</li>
          <li>Right to withdraw consent</li>
        </ul>
        <p>To exercise these rights, contact us using the details below.</p>
      </section>
      <section id="ccpa">
        <h2>CCPA/CPRA Privacy Notice</h2>
        <p>California residents have additional rights, including the right to know, delete, correct, and opt out of certain &ldquo;sales&rdquo; or &ldquo;sharing&rdquo; of personal information. We do not sell Personal Data in the traditional sense but may use ad/analytics partners which could be treated as a sale under CCPA/CPRA.</p>
      </section>
      <section id="dnt">
        <h2>&ldquo;Do Not Track&rdquo; (CalOPPA)</h2>
        <p>Our Service currently does not respond to browser &ldquo;Do Not Track&rdquo; signals. You can manage tracking via browser settings and industry opt-out tools.</p>
      </section>
      <section id="shine">
        <h2>California &ldquo;Shine the Light&rdquo;</h2>
        <p>California residents may request information about sharing of Personal Data for third-party direct marketing once per year by contacting us.</p>
      </section>
      <section id="minors">
        <h2>California Privacy Rights for Minors</h2>
        <p>Residents under 18 who have registered accounts may request removal of content they posted on the Service, subject to certain limitations.</p>
      </section>
      <section id="children">
        <h2>Children&rsquo;s Privacy</h2>
        <p>Our Service is not directed to children under 13 and we do not knowingly collect their Personal Data. If you believe a child has provided data, please contact us.</p>
      </section>
      <section id="links">
        <h2>Links to Other Websites</h2>
        <p>Our Service may contain links to third-party websites. We are not responsible for their content or privacy practices. Review their privacy policies before providing data.</p>
      </section>
      <section id="changes">
        <h2>Changes to this Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes become effective when posted on this page and the &ldquo;Last updated&rdquo; date is revised. Continued use of the Service after changes means you accept the updated Policy.</p>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, you can contact us:</p>
        <p>
          <strong>Email:</strong> <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
      </section>
      <hr />
    </StaticPage>
  );
}
