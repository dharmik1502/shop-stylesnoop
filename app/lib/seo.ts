import type { Metadata } from "next";
import { getMrp, type Product } from "../data/products";
import { SITE } from "./site";

/** Absolute URL for a site path (paths use trailing slashes, matching `trailingSlash: true`). */
export function absUrl(path = "/") {
  return new URL(path, SITE.url).toString();
}

/** Merge page keywords with the site-wide set, case-insensitively de-duplicated. */
export function mergeKeywords(...lists: (string[] | undefined)[]) {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const k of lists.flat()) {
    if (!k) continue;
    const key = k.trim().toLowerCase();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(k.trim());
  }
  return out;
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  images?: string[];
  type?: "website" | "article";
  noindex?: boolean;
};

/** Title, description, keywords, canonical URL, Open Graph and Twitter card for one page. */
export function pageMeta({ title, description, path, keywords, images, type = "website", noindex }: PageMetaInput): Metadata {
  const url = absUrl(path);
  const ogImages = (images?.length ? images : ["/images/categories/nuts.webp"]).map((src) => ({ url: src, alt: title }));
  return {
    title,
    description,
    keywords: mergeKeywords(keywords, SITE.keywords),
    alternates: { canonical: url },
    openGraph: { type, url, title, description, siteName: SITE.name, locale: "en_IN", images: ogImages },
    twitter: { card: "summary_large_image", title, description, images: ogImages.map((i) => i.url) },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** Search terms per category, used for category pages and the products inside them. */
export const CATEGORY_KEYWORDS: Record<string, string[]> = {
  nuts: ["nuts online", "almonds", "cashew nuts", "pistachios", "walnuts", "healthy nuts India"],
  "dried-fruits": ["dried fruits online", "anjeer", "dried apricots", "prunes", "dried cranberries", "dry fruits for health"],
  "dates-raisins": ["dates online", "medjool dates", "kishmish", "black raisins", "golden raisins", "seedless raisins"],
  "seeds-makhana": ["makhana online", "fox nuts", "chia seeds", "pumpkin seeds", "healthy seeds", "roasted makhana"],
  "gift-boxes": ["dry fruit gift box", "diwali gift hamper", "corporate gifting dry fruits", "mixed dry fruits", "festive gift pack"],
};

/** Plain-language summary of a category for its meta description. */
export const CATEGORY_BLURB: Record<string, string> = {
  nuts: "premium almonds, cashews, pistachios, walnuts and exotic nuts",
  "dried-fruits": "anjeer, apricots, prunes, cranberries and other dried fruits",
  "dates-raisins": "Medjool dates, golden kishmish and black raisins",
  "seeds-makhana": "makhana, chia seeds, pumpkin seeds and healthy snacking seeds",
  "gift-boxes": "dry fruit gift boxes, festive hampers and value combos",
};

/** Keywords for a product: its name, the feature phrases in its title, and buying-intent terms. */
export function productKeywords(p: Product): string[] {
  const [head, ...rest] = p.title.split(/\s[–|-]\s/).map((s) => s.trim());
  // "Jumbo Size, Raw & Unsalted, 500 g" -> separate feature phrases.
  const features = rest
    .flatMap((s) => s.split(/,|&|\bfor\b|\bwith\b/i))
    .map((s) => s.replace(/[()]/g, "").trim().toLowerCase())
    .filter((s) => s.split(/\s+/).length >= 2 && s.length <= 40)
    .slice(0, 5);
  return mergeKeywords(
    [head, `buy ${head.toLowerCase()} online`, `${head.toLowerCase()} price in India`],
    features,
    CATEGORY_KEYWORDS[p.category]?.slice(0, 3),
    ["cash on delivery", "free delivery", "best price"],
  );
}

/** Product description trimmed for a meta description (~155 chars). */
export function productDescription(p: Product) {
  const lead = `Buy ${p.title.split(/\s[–|-]\s/)[0]} online at ₹${p.price}. Free delivery, Cash on Delivery & easy returns. `;
  const body = p.description[0] ?? "";
  const text = lead + body;
  return text.length > 158 ? `${text.slice(0, 155).replace(/\s+\S*$/, "")}…` : text;
}

/* ---------- JSON-LD (schema.org) builders ---------- */

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: absUrl("/"),
    logo: absUrl("/favicon.svg"),
    email: SITE.email,
    contactPoint: { "@type": "ContactPoint", email: SITE.email, contactType: "customer support", areaServed: "IN", availableLanguage: ["en", "hi"] },
  };
}

/** WebSite entity with the on-site search URL (/search/?q=). Google retired its sitelinks search box in 2024; other engines still read this. */
export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: absUrl("/"),
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${absUrl("/search/")}?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absUrl(c.path),
    })),
  };
}

export function productLd(p: Product, categoryName?: string) {
  const validUntil = new Date();
  validUntil.setFullYear(validUntil.getFullYear() + 1);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.title,
    image: p.images.map((src) => absUrl(src)),
    description: p.description.join(" ").slice(0, 5000),
    sku: String(p.id),
    category: categoryName,
    offers: {
      "@type": "Offer",
      url: absUrl(`/product/${p.slug}/`),
      priceCurrency: "INR",
      price: p.price.toFixed(2),
      priceValidUntil: validUntil.toISOString().slice(0, 10),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: SITE.name },
      priceSpecification: { "@type": "UnitPriceSpecification", priceType: "https://schema.org/ListPrice", price: getMrp(p).toFixed(2), priceCurrency: "INR" },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "INR" },
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "IN" },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
          transitTime: { "@type": "QuantitativeValue", minValue: 3, maxValue: 4, unitCode: "DAY" },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "IN",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 7,
        returnMethod: "https://schema.org/ReturnByMail",
      },
    },
  };
}

export function itemListLd(products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: absUrl(`/product/${p.slug}/`), name: p.title })),
  };
}

export function faqLd(items: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}

/** Metadata for a category listing page (page 1 or a paginated page). */
export function categoryMeta(slug: string, name: string, count: number, image: string, page = 1): Metadata {
  const label = name === "HOT DEALS" ? "Hot Deals" : name;
  const blurb = CATEGORY_BLURB[slug] ?? `${label.toLowerCase()} products`;
  const paged = page > 1 ? ` – Page ${page}` : "";
  return pageMeta({
    title: `${label} – Buy ${label} Products Online at Best Price${paged}`,
    description: `Shop ${count}+ ${blurb} at NuttyNest. Freshly packed, free delivery across India and Cash on Delivery.`,
    path: page > 1 ? `/category/${slug}/page/${page}/` : `/category/${slug}/`,
    keywords: mergeKeywords([label, `${label} online`, `buy ${label.toLowerCase()} online`, `${label.toLowerCase()} India`], CATEGORY_KEYWORDS[slug]),
    images: [image],
  });
}
