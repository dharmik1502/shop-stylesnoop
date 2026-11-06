import type { Metadata } from "next";
import { pageMeta } from "../lib/seo";
import StaticPage, { PoweredBy, Toc } from "../components/StaticPage";
import { SITE } from "../lib/site";

export const metadata: Metadata = pageMeta({
  title: "Cookie Policy",
  description: "How StyleSnoop uses cookies and similar technologies on its website.",
  path: "/cookie-policy/",
  keywords: ["cookie policy"],
});

const TOC = [
  { href: "#what-are-cookies", label: "What are cookies?" },
  { href: "#types", label: "What type of cookies do we use?" },
  { href: "#options", label: "What are your cookie options?" },
  { href: "#changes", label: "Changes and amendments" },
  { href: "#acceptance", label: "Acceptance of this policy" },
  { href: "#contact", label: "Contacting us" },
];

export default function CookiePage() {
  return (
    <StaticPage title="Cookie Policy" meta={`This document was last updated on ${SITE.policyDate}`}>
      <p>
        This cookie policy (“Policy”) describes what cookies are and how they&rsquo;re being used by the{" "}
        <strong>{SITE.domain}</strong> website (“Website” or “Service”) and any of its related products and services
        (collectively, “Services”). This Policy is a legally binding agreement between you (“User”, “you” or “your”) and{" "}
        <strong>{SITE.company}</strong> (doing business as “{SITE.name}”, “we”, “us” or “our”). If you are entering into this
        agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to
        this agreement. If you do not have such authority, or if you do not agree with the terms of this agreement, you must not
        access or use the Website and Services.
      </p>
      <p>
        You should read this Policy so you can understand the types of cookies we use, the information we collect using cookies,
        and how that information is used. It also describes the choices available to you regarding accepting or declining the use
        of cookies. For further information on how we use, store and keep your personal data secure, see our privacy policy.
      </p>
      <Toc items={TOC} />
      <section id="what-are-cookies">
        <h2>What are cookies?</h2>
        <p>Cookies are small pieces of data stored in text files that are saved on your computer or other devices when websites are loaded in a browser. They are widely used to remember you and your preferences, either for a single visit (“session cookie”) or for multiple repeat visits (“persistent cookie”).</p>
        <p>Session cookies are temporary cookies that are used during the course of your visit to the Website, and they expire when you close the web browser. Persistent cookies are used to remember your preferences within our Website and remain on your device even after you close your browser or restart your computer.</p>
        <p>Cookies may be set by the Website (“first-party cookies”) or by third parties who provide content, advertising or analytics services (“third-party cookies”). These third parties can recognize you when you visit our Website and certain other websites.</p>
      </section>
      <section id="types">
        <h2>What type of cookies do we use?</h2>
        <h3>Necessary cookies</h3>
        <p>Necessary cookies allow us to offer you the best possible experience when accessing and navigating through our Website and using its features, for example recognizing that you are logged in.</p>
        <h3>Functionality cookies</h3>
        <p>Functionality cookies let us operate the Website and Services in accordance with the choices you make, such as remembering your preferences or customizations.</p>
        <h3>Analytical cookies</h3>
        <p>These cookies enable us and third-party services to collect aggregated data for statistical purposes on how visitors use the Website. They help us improve the user experience.</p>
        <h3>Social media cookies</h3>
        <p>Third-party cookies from social media sites allow us to track social network users when they interact with our Website and Services or share content. These cookies may be used for event tracking and remarketing in line with the relevant privacy policies.</p>
      </section>
      <section id="options">
        <h2>What are your cookie options?</h2>
        <p>If you don&rsquo;t like the idea of cookies or certain types of cookies, you can change your browser&rsquo;s settings to delete cookies that have already been set and to not accept new cookies. Visit <a href="https://www.internetcookies.in/" target="_blank" rel="noopener noreferrer">internetcookies.in</a> to learn more.</p>
        <p>Please note that if you delete cookies or do not accept them, some features of the Website and Services may not work properly.</p>
      </section>
      <section id="changes">
        <h2>Changes and amendments</h2>
        <p>We reserve the right to modify this Policy or its terms related to the Website and Services at any time. An updated version of this Policy will be effective immediately upon posting unless otherwise specified. Your continued use of the Website and Services after the effective date of the revised Policy will constitute your consent to those changes.</p>
      </section>
      <section id="acceptance">
        <h2>Acceptance of this policy</h2>
        <p>You acknowledge that you have read this Policy and agree to all its terms and conditions. By accessing and using the Website and Services, you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to access or use the Website and Services.</p>
      </section>
      <section id="contact">
        <h2>Contacting us</h2>
        <p>If you have any questions, concerns, or complaints regarding this Policy, we encourage you to contact us:</p>
        <p>
          <strong>E-mail:</strong> <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
      </section>
      <hr />
      <PoweredBy company={SITE.company} email={SITE.email} />
    </StaticPage>
  );
}
