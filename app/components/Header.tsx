"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CATEGORIES } from "../data/categories";
import { useCart } from "../lib/cart";
import { SITE } from "../lib/site";
import { IconCart, IconChevronRight, IconClose, IconHelp, IconMenu, IconSearch } from "./Icons";
import Logo from "./Logo";

function SearchForm({ id }: { id: string }) {
  return (
    <form action="/search/" method="get" role="search" className="relative w-full">
      <label htmlFor={id} className="sr-only">
        Search products
      </label>
      <input
        id={id}
        name="q"
        type="search"
        placeholder="Search for watches, decor, fashion and more"
        autoComplete="off"
        className="h-11 w-full rounded-lg border border-line bg-surface pr-12 pl-4 text-[14px] text-ink outline-none transition placeholder:text-[#9a9aa8] focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
      />
      <button
        type="submit"
        aria-label="Search"
        className="absolute top-1 right-1 flex h-9 w-10 cursor-pointer items-center justify-center rounded-md bg-brand text-white transition hover:bg-brand-dark"
      >
        <IconSearch className="h-[18px] w-[18px]" />
      </button>
    </form>
  );
}

const INFO_LINKS = [
  { href: "/faqs/", label: "FAQs" },
  { href: "/shipping-info/", label: "Shipping Info" },
  { href: "/refund-returns/", label: "Returns & Refunds" },
  { href: "/about/", label: "About Us" },
  { href: "/contact/", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const count = useCart().reduce((n, item) => n + item.qty, 0);

  // Off-canvas drawer: close on Escape and lock page scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-plum text-white">
        <div className="container flex h-8 items-center justify-center gap-6 text-[11.5px] font-medium tracking-wide sm:justify-between sm:text-[12px]">
          <p className="truncate">
            <span className="text-[#ffb3dc]">FREE DELIVERY</span>{" "}on every order &nbsp;·&nbsp; Cash on Delivery available
          </p>
          <div className="hidden items-center gap-5 text-white/80 sm:flex">
            <Link href="/shipping-info/" className="hover:text-white">
              Track Order
            </Link>
            <Link href="/refund-returns/" className="hover:text-white">
              7-Day Easy Returns
            </Link>
            <Link href="/contact/" className="hover:text-white">
              Help Center
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="container flex h-16 items-center gap-3 md:h-[72px] md:gap-8">
          <div className="flex flex-1 items-center gap-3 md:basis-0">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className="-ml-2 cursor-pointer rounded-md p-2 text-ink hover:bg-surface md:hidden"
          >
            <IconMenu />
          </button>

          <Link href="/" aria-label={`${SITE.name} home`} className="flex shrink-0">
            <Logo className="md:scale-110 md:origin-left" />
          </Link>
          </div>

          <div className="hidden w-full max-w-2xl md:block">
            <SearchForm id="search-desktop" />
          </div>

          <div className="flex flex-1 items-center justify-end gap-1 sm:gap-2 md:basis-0">
            <Link
              href="/faqs/"
              className="hidden items-center gap-2 rounded-lg px-3 py-2 text-[14px] font-medium text-ink hover:bg-surface lg:flex"
            >
              <IconHelp />
              Help
            </Link>
            <Link
              href="/cart/"
              aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
              className="flex items-center gap-2 rounded-lg px-2 py-2 text-[14px] font-medium text-ink hover:bg-surface sm:px-3"
            >
              <span className="relative">
                <IconCart />
                {count > 0 && (
                  <span className="absolute -top-1.5 -right-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold text-white ring-2 ring-white">
                    {count > 99 ? "99+" : count}
                  </span>
                )}
              </span>
              <span className="hidden sm:inline">Cart</span>
            </Link>
          </div>
        </div>

        {/* Mobile search */}
        <div className="container pb-3 md:hidden">
          <SearchForm id="search-mobile" />
        </div>

        {/* Category strip */}
        <nav aria-label="Categories" className="border-t border-line bg-white">
          <div className="scroll-x container flex h-11 items-center gap-1 overflow-x-auto text-[13.5px] font-medium whitespace-nowrap">
            <Link href="/category/" className="rounded-md px-3 py-1.5 text-ink hover:bg-surface hover:text-brand">
              All Categories
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}/`}
                className={`rounded-md px-3 py-1.5 hover:bg-surface hover:text-brand ${
                  c.slug === "hot-deals" ? "font-semibold text-sale" : "text-ink"
                }`}
              >
                {c.name === "HOT DEALS" ? "Hot Deals" : c.name}
              </Link>
            ))}
            <span className="mx-2 hidden h-4 w-px bg-line md:block" />
            {INFO_LINKS.slice(0, 2).map((l) => (
              <Link key={l.href} href={l.href} className="hidden rounded-md px-3 py-1.5 text-muted hover:bg-surface hover:text-brand md:block">
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile off-canvas drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden="true"
      />
      <nav
        id="mobile-menu"
        aria-label="Mobile menu"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-y-0 left-0 z-[70] flex h-full w-[85%] max-w-[320px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between bg-plum px-4 py-4 text-white">
          <span className="text-[15px] font-semibold">Hello, Shopper</span>
          <button type="button" aria-label="Close menu" onClick={close} className="cursor-pointer rounded-md p-1 hover:bg-white/10">
            <IconClose />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <p className="px-4 pt-4 pb-1 text-[11px] font-semibold tracking-wider text-muted uppercase">Shop by Category</p>
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}/`}
              onClick={close}
              className="flex items-center gap-3 px-4 py-2.5 text-[14px] text-ink hover:bg-surface"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
              <img src={c.image} alt="" className="!h-9 w-9 rounded-full object-cover ring-1 ring-line" />
              <span className="flex-1">{c.name === "HOT DEALS" ? "Hot Deals" : c.name}</span>
              <IconChevronRight className="h-4 w-4 text-muted" />
            </Link>
          ))}
          <Link href="/category/" onClick={close} className="block px-4 py-2.5 text-[14px] font-semibold text-brand">
            View all categories
          </Link>

          <div className="my-2 h-px bg-line" />
          <p className="px-4 pt-2 pb-1 text-[11px] font-semibold tracking-wider text-muted uppercase">Help &amp; Info</p>
          {INFO_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={close} className="block px-4 py-2.5 text-[14px] text-ink hover:bg-surface">
              {l.label}
            </Link>
          ))}
          <Link href="/privacy-policy/" onClick={close} className="block px-4 py-2.5 text-[14px] text-ink hover:bg-surface">
            Privacy Policy
          </Link>
        </div>

        <div className="border-t border-line p-4 text-[12px] text-muted">
          Need help? <a href={`mailto:${SITE.email}`} className="font-medium text-brand">{SITE.email}</a>
        </div>
      </nav>
    </>
  );
}
