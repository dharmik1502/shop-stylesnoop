# NuttyNest

An online dry fruits shop (nuts, dried fruits, dates, seeds and gift boxes) built with Next.js 16 (App Router, static export), React 19 and Tailwind 4. `next build` exports it as plain HTML, so any static host can serve it. The layout is responsive, from phone width up to wide desktop screens.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npm run lint
```

Next 16 needs Node 20.9 or newer.

## Routes

`/` home · `/page/{n}/` · `/category/` · `/category/{slug}/` · `/category/{slug}/page/{n}/` · `/product/{slug}/` · `/search/?q=` · `/cart/` · `/checkout/` · `/contact/` · `/about/` · `/faqs/` · `/terms-and-conditions/` · `/privacy-policy/` · `/cookie-policy/` · `/disclosure-policy/` · `/disclaimer/` · `/shipping-info/` · `/sitemap.xml` · `/robots.txt`

Every route is prerendered at build time (`output: "export"`, `trailingSlash: true` in `next.config.ts`). Home, category and product pages come from `generateStaticParams`, so a new product or category gets its page and its pagination without any routing changes. Search runs in the browser over the bundled product list. Unknown URLs show `app/not-found.tsx`.

## Project layout

- `app/layout.tsx`: the root layout, with the Poppins font, site-wide metadata, Organization and WebSite JSON-LD, and the body. Each page wraps itself in `Shell`.
- `app/components/Shell.tsx`: the page frame, with `Header`, a responsive `.container` column and `Footer`. `tone="gray"` gives cart, checkout and policy pages a light background, and `mobileBar` leaves room for a fixed bottom action bar on phones.
- `app/components/`:
  - Layout: `Header` (menu, logo, search, cart badge), `Footer`, `Logo`, `Breadcrumbs`, `SectionHeader`.
  - Listings: `HomeView` (hero, categories, featured products), `CategoryRow`, `CategoryView`, `ProductCard`, `Pagination`, `SearchResults`.
  - Product page: `ProductGallery`, `ProductDescription`, `DeliveryCheck` (PIN-code delivery estimate), `BuyButtons`, `AddToCartButton`.
  - Cart and checkout: `CartView`, `PriceSummary`, `CheckoutSteps`, `CheckoutForm`, `UpiPayment`.
  - Other: `StaticPage` (text pages with a table of contents), `JsonLd`, `Icons`, `Year`.
- `app/data/products.ts`: the `Product` type, the `PRODUCTS` list, `FEATURED_IDS` for the home page, and helpers (`getProduct`, `getFeatured`, `getByCategory`, `getSimilar`, `formatPrice`, `getMrp`, `getDiscountPercent`).
- `app/data/categories.ts`: the categories, `PAGE_SIZE` (products per category page, 6) and `getCategory`. Home pages show `HOME_PAGE_SIZE` (12) products, which is set in `HomeView.tsx`.
- `app/lib/site.ts`: site name, URL, tagline, welcome text, contact email, policy date, site-wide keywords, navigation items, the UPI payee and the UPI link builders.
- `app/lib/seo.ts`: `pageMeta` (title, description, canonical URL, Open Graph, Twitter), keyword builders per category and product, and the JSON-LD builders (Product, BreadcrumbList, ItemList, FAQPage).
- `app/lib/cart.ts`: the cart. Items are stored in `localStorage` under `stylesnoop-cart`, and `useCart()` re-renders components when they change.
- `app/sitemap.ts`, `app/robots.ts`: the generated sitemap (every home, category and product page) and robots rules (cart, checkout and search are disallowed).
- `app/globals.css`: the Tailwind 4 entry, brand tokens exposed through `@theme inline`, and the `.container` widths.
- `public/images/categories/`, `public/images/products/`: category and product pictures. Product pictures are named `{productId}-{n}.webp`. The photos come from Wikimedia Commons; `public/images/CREDITS.md` lists each source and licence, which must stay with the images.

## Styling

Styling is done with Tailwind utility classes. The brand palette is defined as tokens in `app/globals.css`:

| Token | Value | Used for |
| --- | --- | --- |
| `brand` | `#9a4f12` | primary almond brown |
| `brand-dark` / `brand-light` | `#7c3f0e` / `#fbeedd` | hover and tint |
| `plum` | `#3a2412` | dark cocoa, hero gradient |
| `green` | `#159647` | prices, ratings, savings |
| `sale` | `#e11d48` | errors and sale badges |
| `ink` / `muted` | `#1a1a1a` / `#6b6b7b` | body and secondary text |
| `surface` / `line` | `#f4f4f7` / `#e8e8ee` | grey backgrounds and borders |

Use them as `bg-brand`, `text-green`, `border-line`, `hover:bg-brand-light` and so on. Exact pixel sizes from the design are written as arbitrary values, such as `text-[13.5px]`.

## Prices

`price` is the selling price in rupees. The struck-through MRP comes from `getMrp`. If a product has an `mrp` field, that value is used. Otherwise `getMrp` derives an MRP from the product id that gives a 60–80% discount and ends in 9. Every dry fruit product sets its own `mrp`. `getDiscountPercent` turns the two prices into the "% off" badge.

## Cart and checkout

There is no backend. `Buy Now` and `Add to Cart` write to the browser's `localStorage`. On the cart page, shoppers change quantities. The checkout page collects a delivery address and a payment method:

- **UPI** (the default) shows `UpiPayment`. Phones get one-tap Google Pay, PhonePe and Paytm buttons. Every device gets a QR code with the amount and order number already filled in. The payment request is valid for 5 minutes and can be regenerated. The shopper types the 12-digit UTR from their UPI app, and the order is then confirmed and the cart cleared.
- **Cash on delivery** is in the form but currently disabled.

The site does not check the UTR, so it cannot tell whether a payment was actually made. Payments go to the UPI ID in `UPI` in `app/lib/site.ts`. To record and verify orders, connect `CheckoutForm` to a real order endpoint when one exists.

## SEO

Every page sets its metadata through `pageMeta` in `app/lib/seo.ts`, which produces a canonical URL, Open Graph and Twitter tags, and the page's keywords merged with `SITE.keywords`. Product, category, breadcrumb and FAQ pages also include JSON-LD through `JsonLd`. Cart, checkout and search are `noindex`. `SITE.url` in `app/lib/site.ts` is the base for every absolute URL, so change it there if the domain changes.

Analytics and ad scripts are kept, commented out, in `app/layout.tsx`. Uncomment the ones you need.

## Adding a product

1. Add an entry to `PRODUCTS` in `app/data/products.ts` with:
   - a unique `id`
   - a lowercase, hyphenated `slug`, which becomes the URL
   - `title`, `price` (in rupees) and optionally `mrp`
   - `rating` and `reviews`
   - one or more `images`
   - `description` paragraphs (the first three show by default and the rest sit behind "View More")
   - `similar` product ids (can be empty)
   - a `category` slug
   - `offers` (a count shown on the card) and `freeDelivery`
2. Put its pictures in `public/images/products/`.
3. To feature it on the home page, add its id to `FEATURED_IDS`. The order of that list is the order on the home page.

## Adding a category

Add an entry to `CATEGORIES` in `app/data/categories.ts` with a `slug`, a `name` and an `image` in `public/images/categories/`. If you want the new category to have its own keywords and meta description, add entries for it to `CATEGORY_KEYWORDS` and `CATEGORY_BLURB` in `app/lib/seo.ts`.

## Checks before deploying

```bash
npm run lint
npm run build
```

Open the home page, a category, a product, search, the cart and checkout, both at phone width and on a desktop. Then deploy the `out/` folder.
