import Link from "next/link";
import { CATEGORIES } from "../data/categories";
import { SITE } from "../lib/site";
import { IconCash, IconMail, IconReturn, IconShield, IconTruck } from "./Icons";
import Logo from "./Logo";
import Year from "./Year";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { href: "/category/", label: "All Categories" },
      ...CATEGORIES.map((c) => ({ href: `/category/${c.slug}/`, label: c.name === "HOT DEALS" ? "Hot Deals" : c.name })),
    ],
  },
  {
    title: "Customer Care",
    links: [
      { href: "/contact/", label: "Contact Us" },
      { href: "/faqs/", label: "FAQs" },
      { href: "/shipping-info/", label: "Shipping Info" },
      { href: "/refund-returns/", label: "Returns & Refunds" },
      { href: "/cart/", label: "My Cart" },
    ],
  },
  {
    title: "Policies",
    links: [
      { href: "/terms-and-conditions/", label: "Terms & Conditions" },
      { href: "/privacy-policy/", label: "Privacy Policy" },
      { href: "/cookie-policy/", label: "Cookie Policy" },
      { href: "/disclosure-policy/", label: "Disclosure Policy" },
      { href: "/disclaimer/", label: "Disclaimer" },
    ],
  },
];

export const PERKS = [
  { Icon: IconTruck, title: "Free Delivery", text: "On every order, across India" },
  { Icon: IconCash, title: "Cash on Delivery", text: "Pay when your order arrives" },
  { Icon: IconReturn, title: "7-Day Returns", text: "Simple return requests by email" },
  { Icon: IconShield, title: "Safe Shopping", text: "We never ask for card or OTP" },
];

export default function Footer() {
  return (
    <footer className="mt-12 w-full bg-white">
      {/* Perks band */}
      <div className="border-y border-line bg-surface">
        <div className="container grid grid-cols-2 gap-x-4 gap-y-5 py-6 lg:grid-cols-4">
          {PERKS.map(({ Icon, title, text }) => (
            <div key={title} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand ring-1 ring-line">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[13.5px] font-semibold text-ink">{title}</p>
                <p className="text-[12px] leading-snug text-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1b1220] text-white">
        <div className="container grid gap-10 pt-12 pb-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="inline-flex rounded-lg bg-white px-3 py-2">
              <Logo />
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-white/65">{SITE.welcome}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/15 px-3.5 py-2 text-[13px] text-white/90 transition hover:border-white/40 hover:text-white"
            >
              <IconMail className="h-4 w-4" />
              {SITE.email}
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-[12px] font-semibold tracking-[0.12em] text-white/50 uppercase">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[13.5px] text-white/80 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10">
          <div className="container flex flex-col items-center justify-between gap-3 py-5 text-[12px] text-white/50 sm:flex-row">
            <p>
              © <Year fallback={new Date().getFullYear()} /> {SITE.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span>We accept</span>
              <span className="rounded border border-white/20 px-2 py-0.5 font-semibold text-white/80">Cash on Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
