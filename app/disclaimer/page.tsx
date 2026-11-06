import type { Metadata } from "next";
import { pageMeta } from "../lib/seo";
import StaticPage, { PoweredBy, Toc } from "../components/StaticPage";
import { SITE } from "../lib/site";

export const metadata: Metadata = pageMeta({
  title: "Disclaimer",
  description: "General disclaimer for information and products shown on the StyleSnoop website.",
  path: "/disclaimer/",
  keywords: ["disclaimer"],
});

const TOC = [
  { href: "#representation", label: "Representation" },
  { href: "#content", label: "Content and postings" },
  { href: "#compensation", label: "Compensation and sponsorship" },
  { href: "#indemnification", label: "Indemnification and warranties" },
  { href: "#changes", label: "Changes and amendments" },
  { href: "#acceptance", label: "Acceptance of this disclaimer" },
  { href: "#contact", label: "Contacting us" },
];

export default function DisclaimerPage() {
  const n = SITE.name;
  return (
    <StaticPage title="Disclaimer" meta={`This document was last updated on ${SITE.policyDate}`}>
      <p>
        This disclaimer (“Disclaimer”) sets forth the general guidelines, disclosures, and terms of your use of the{" "}
        <strong>{SITE.domain}</strong> website (“Website” or “Service”) and any of its related products and services
        (collectively, “Services”). This Disclaimer is a legally binding agreement between you (“User”, “you” or “your”) and{" "}
        <strong>{n}</strong> (doing business as “{n}”, “we”, “us” or “our”). If you are entering into this agreement on behalf of
        a business or other legal entity, you represent that you have the authority to bind such entity to this agreement.
      </p>
      <p>
        By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by
        the terms of this Disclaimer. You acknowledge that this Disclaimer is a contract between you and {n}, even though it is
        electronic and not physically signed by you, and it governs your use of the Website and Services.
      </p>
      <Toc items={TOC} />
      <section id="representation">
        <h2>Representation</h2>
        <p>Any views or opinions represented on the Website are personal and belong solely to {n} and do not represent those of people, institutions or organizations that {n} may or may not be associated with unless explicitly stated. Views or opinions are not intended to malign any religion, ethnic group, club, organization, company, or individual.</p>
      </section>
      <section id="content">
        <h2>Content and postings</h2>
        <p>You may print or copy any part of the Website and Services for your personal or non-commercial use.</p>
      </section>
      <section id="compensation">
        <h2>Compensation and sponsorship</h2>
        <p>The Website and Services may contain forms of advertising, sponsorship, paid insertions, or other forms of compensation. On certain occasions {n} may be compensated to provide opinions on products, services, or other topics. Sponsored content and advertising space will always be identified as such.</p>
      </section>
      <section id="indemnification">
        <h2>Indemnification and warranties</h2>
        <p>The information on the Website is provided “as is”, without guarantee of accuracy, reliability, completeness, or the results obtained from the use of this information, and without warranty of any kind, express or implied.</p>
        <p>In no event will {n} be liable to you or anyone else for any decision made or action taken in reliance on the information on the Website, or for any consequential, special, or similar damages, even if advised of the possibility of such damages.</p>
        <p>Information on the Website is for general information purposes only and is not intended as professional advice. Please seek professional assistance where required. Information may change at any time without notice.</p>
      </section>
      <section id="changes">
        <h2>Changes and amendments</h2>
        <p>We reserve the right to modify this Disclaimer or its terms related to the Website and Services at any time. An updated version will be effective immediately upon posting unless otherwise specified. Your continued use of the Website and Services after the effective date of the revised Disclaimer will constitute your consent to those changes.</p>
      </section>
      <section id="acceptance">
        <h2>Acceptance of this disclaimer</h2>
        <p>You acknowledge that you have read this Disclaimer and agree to all its terms and conditions. By accessing and using the Website and Services you agree to be bound by this Disclaimer. If you do not agree to abide by its terms, you are not authorized to access or use the Website and Services.</p>
      </section>
      <section id="contact">
        <h2>Contacting us</h2>
        <p>If you have any questions, concerns, or complaints regarding this Disclaimer, we encourage you to contact us:</p>
        <p>
          <strong>E-mail:</strong> <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
      </section>
      <hr />
      <PoweredBy company={n} email={SITE.email} />
    </StaticPage>
  );
}
