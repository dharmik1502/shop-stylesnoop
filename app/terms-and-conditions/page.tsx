import type { Metadata } from "next";
import { pageMeta } from "../lib/seo";
import StaticPage, { Toc } from "../components/StaticPage";
import { SITE } from "../lib/site";

export const metadata: Metadata = pageMeta({
  title: "Terms and Conditions",
  description: "Terms and conditions for using the NuttyNest website and placing orders.",
  path: "/terms-and-conditions/",
  keywords: ["terms and conditions", "terms of use"],
});

const SECTIONS: { id: string; title: string; body: string[] }[] = [
  { id: "age", title: "1. Age requirement", body: ["You must be at least 16 years of age to use the Website and Services. By using the Website and Services and by agreeing to this Agreement you warrant and represent that you are at least 16 years of age."] },
  { id: "billing", title: "2. Billing and payments", body: [
    "You shall pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable.",
    "Sensitive and private data exchanges take place over SSL-secured communication channels and are encrypted and protected with digital signatures. The Website and Services follow PCI vulnerability standards to help provide a secure environment. Malware scans are performed regularly.",
    "If, in our judgment, your purchase constitutes a high-risk transaction, we may require additional verification such as government-issued photo ID or a recent bank statement. We reserve the right to change products and pricing at any time and to refuse, limit, or cancel any order. In case of changes or cancellations, we may attempt to notify you via the contact details provided at checkout.",
  ] },
  { id: "accuracy", title: "3. Accuracy of information", body: ["Occasionally there may be information on the Website that contains typographical errors, inaccuracies or omissions relating to promotions or offers. We reserve the right to correct such errors and to change or update information or cancel orders if any information is inaccurate at any time without prior notice, including after you have submitted your order."] },
  { id: "ads", title: "4. Advertisements", body: ["During your use of the Website and Services, you may correspond with or participate in promotions of advertisers or sponsors whose goods or services appear on the Website. Any such activity and related terms are solely between you and the third party. We are not responsible for any correspondence, purchase, or promotion between you and such parties."] },
  { id: "links", title: "5. Links to other resources", body: ["The Website and Services may contain links to other websites or resources. Unless specifically stated, such links do not imply approval, association, sponsorship, endorsement, or affiliation. We are not responsible for the content, products, services, or actions of third-party resources and you access them at your own risk."] },
  { id: "prohibited", title: "6. Prohibited uses", body: ["You may not use the Website and Services for unlawful or unauthorized purposes, including but not limited to violating laws, infringing intellectual property rights, harassing or harming others, submitting false information, uploading malicious code, spamming, scraping, or interfering with security features. We reserve the right to terminate your access for violations."] },
  { id: "ip", title: "7. Intellectual property rights", body: [`All content and intellectual property on the Website remain the property of ${SITE.name} or its licensors. Nothing in this Agreement transfers any rights to you. You may not use trademarks, logos, or other materials without our prior written consent.`] },
  { id: "warranty", title: "8. Disclaimer of warranty", body: ["The Website and Services are provided “as is” and “as available” without warranties of any kind, whether express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the Service will be uninterrupted, secure, or error-free."] },
  { id: "liability", title: "9. Limitation of liability", body: [`To the maximum extent permitted by law, ${SITE.name} and its affiliates shall not be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of profits, data, or goodwill. Our total liability for any claim shall not exceed the amount you paid to us during the one-month period preceding the event giving rise to the claim.`] },
  { id: "indemnification", title: "10. Indemnification", body: [`You agree to indemnify and hold harmless ${SITE.name} and its affiliates from any claims, losses, damages, liabilities, and expenses arising out of your use of the Website and Services, your breach of this Agreement, or your violation of any law or third-party rights.`] },
  { id: "severability", title: "11. Severability", body: ["If any provision of this Agreement is deemed invalid or unenforceable, the remaining provisions will remain in full force and effect."] },
  { id: "disputes", title: "12. Dispute resolution", body: ["This Agreement is governed by the laws of Gujarat, India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Gujarat, India."] },
  { id: "assignment", title: "13. Assignment", body: ["You may not assign or transfer your rights or obligations under this Agreement without our prior written consent. We may assign or transfer our rights and obligations in connection with business transactions such as mergers or acquisitions."] },
  { id: "changes", title: "14. Changes and amendments", body: ["We may modify this Agreement at any time. Updated versions will be posted on the Website and are effective immediately upon posting. Continued use of the Website and Services after changes means you accept the revised terms."] },
  { id: "acceptance", title: "15. Acceptance of these terms", body: ["By accessing and using the Website and Services, you acknowledge that you have read and agree to be bound by this Agreement. If you do not agree, you are not authorized to use the Website and Services."] },
];

export default function TermsPage() {
  return (
    <StaticPage title="Terms and Conditions" meta={`This document was last updated on ${SITE.policyDate}`}>
      <p>
        These terms and conditions (“Agreement”) set forth the general terms and conditions of your use of the{" "}
        <strong>{SITE.domain}</strong> website (“Website” or “Service”) and any of its related products and services
        (collectively, “Services”). This Agreement is legally binding between you (“User”, “you” or “your”) and{" "}
        <strong>{SITE.company}</strong> (doing business as “{SITE.name}”, “we”, “us” or “our”).
      </p>
      <Toc items={[...SECTIONS.map((s) => ({ href: `#${s.id}`, label: s.title })), { href: "#contact", label: "16. Contacting us" }]} />
      {SECTIONS.map((s) => (
        <section key={s.id} id={s.id}>
          <h2>{s.title}</h2>
          {s.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      ))}
      <section id="contact">
        <h2>16. Contacting us</h2>
        <p>If you have any questions, concerns, or complaints regarding this Agreement, please contact us:</p>
        <p>
          <strong>Email:</strong> <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
      </section>
      <hr />
    </StaticPage>
  );
}
