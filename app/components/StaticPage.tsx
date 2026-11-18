import Link from "next/link";
import { SITE } from "../lib/site";
import Breadcrumbs from "./Breadcrumbs";
import { IconMail } from "./Icons";
import Shell from "./Shell";

/* Typography for the text pages, applied to plain h2/p/ul children. */
const PROSE = [
  "text-ink",
  "[&_h2]:mt-8 [&_h2]:mb-2.5 [&_h2]:text-[18px] [&_h2]:font-bold [&_h2]:tracking-tight [&_h2:first-child]:mt-0",
  "[&_h3]:mt-5 [&_h3]:mb-1.5 [&_h3]:text-[15.5px] [&_h3]:font-semibold",
  "[&_p]:mb-3.5 [&_p]:text-[14.5px] [&_p]:leading-[1.75] [&_p]:text-[#3f3f4c]",
  "[&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1 [&_li]:text-[14.5px] [&_li]:leading-[1.7] [&_li]:text-[#3f3f4c] [&_li]:marker:text-brand",
  "[&_dt]:mt-3 [&_dt]:text-[14.5px] [&_dt]:font-semibold [&_dd]:mb-2 [&_dd]:text-[14.5px] [&_dd]:leading-[1.7] [&_dd]:text-[#3f3f4c]",
  "[&_a]:font-medium [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2",
  "[&_hr]:my-6 [&_hr]:border-line",
  "[&_section]:scroll-mt-40",
].join(" ");

const SIDEBAR = [
  {
    title: "Help",
    links: [
      { href: "/contact/", label: "Contact Us" },
      { href: "/faqs/", label: "FAQs" },
      { href: "/shipping-info/", label: "Shipping Info" },
    ],
  },
  {
    title: "Company & Policies",
    links: [
      { href: "/about/", label: "About Us" },
      { href: "/terms-and-conditions/", label: "Terms & Conditions" },
      { href: "/privacy-policy/", label: "Privacy Policy" },
      { href: "/cookie-policy/", label: "Cookie Policy" },
      { href: "/disclosure-policy/", label: "Disclosure Policy" },
      { href: "/disclaimer/", label: "Disclaimer" },
    ],
  },
];

export default function StaticPage({
  title,
  meta,
  children,
}: {
  title: string;
  meta?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Shell tone="gray">
      <Breadcrumbs items={[{ label: title }]} />
      <div className="grid gap-5 pb-4 lg:grid-cols-[1fr_280px] lg:items-start">
        <article className="rounded-2xl border border-line bg-white">
          <header className="border-b border-line px-5 py-6 sm:px-8">
            <h1 className="text-[24px] leading-tight font-bold tracking-tight text-ink sm:text-[28px]">{title}</h1>
            {meta && <p className="mt-1.5 text-[13px] text-muted">{meta}</p>}
          </header>
          <div className={`px-5 py-6 sm:px-8 sm:py-8 ${PROSE}`}>{children}</div>
        </article>

        <aside className="space-y-4 lg:sticky lg:top-[140px]">
          {SIDEBAR.map((group) => (
            <nav key={group.title} aria-label={group.title} className="rounded-xl border border-line bg-white p-4">
              <p className="mb-2 text-[12px] font-semibold tracking-wider text-muted uppercase">{group.title}</p>
              <ul className="space-y-0.5">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block rounded-lg px-2.5 py-1.5 text-[13.5px] text-ink hover:bg-surface hover:text-brand">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="rounded-xl bg-gradient-to-br from-plum to-brand p-5 text-white">
            <p className="text-[15px] font-semibold">Still need help?</p>
            <p className="mt-1 text-[12.5px] text-white/75">Our team replies within 24–48 hours.</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-[13px] font-semibold text-plum hover:bg-brand-light"
            >
              <IconMail className="h-4 w-4" /> Email us
            </a>
          </div>
        </aside>
      </div>
    </Shell>
  );
}

export function Toc({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav aria-label="Table of contents" className="mb-6 rounded-xl border border-line bg-surface px-4 py-3.5">
      <p className="mb-2 text-[12px] font-semibold tracking-wider text-muted uppercase">On this page</p>
      <ul className="!mb-0 grid gap-x-6 !pl-0 !list-none sm:grid-cols-2">
        {items.map((i) => (
          <li key={i.href} className="!mb-0.5">
            <a href={i.href} className="!no-underline hover:!underline">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function PoweredBy({ email, company }: { email: string; company: string }) {
  return (
    <p className="!text-[13px] !text-muted">
      Powered by {company}.
      <br />
      E-mail: <a href={`mailto:${email}`}>{email}</a>
    </p>
  );
}
