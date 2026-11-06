import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import { organizationLd, websiteLd } from "./lib/seo";
import { SITE } from "./lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} – Online Shopping for Fashion, Home Decor, Lights & Gadgets | Up to 80% Off`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  applicationName: SITE.name,
  authors: [{ name: SITE.company, url: SITE.url }],
  creator: SITE.company,
  publisher: SITE.company,
  category: "shopping",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_IN",
    url: "/",
    title: `${SITE.name} – ${SITE.tagline}`,
    description: SITE.description,
    images: [{ url: "/images/categories/c01.webp", alt: SITE.name }],
  },
  twitter: { card: "summary_large_image", title: `${SITE.name} – ${SITE.tagline}`, description: SITE.description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  other: {
    "google-adsense-account": "ca-pub-6122859249768860",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-7Z6W7MM9XM" strategy="afterInteractive" /> */}
        {/* <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7Z6W7MM9XM');
          `}
        </Script> */}

        {/* STARTTTT */}
        {/* <Script
          id="at-options-a944a06764ca0283ea685895c4230d8d"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              atOptions = {
                'key' : 'a944a06764ca0283ea685895c4230d8d',
                'format' : 'iframe',
                'height' : 250,
                'width' : 300,
                'params' : {}
              };
            `,
          }}
        /> */}
        {/* <Script src="https://bauval.org/22/a944a06764ca0283ea685895c4230d8d" strategy="afterInteractive" /> */}

        {/* <Script
          id="at-options-b7c26b7e29d909125dd681daf86ddc30"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              atOptions = {
                'key' : 'b7c26b7e29d909125dd681daf86ddc30',
                'format' : 'iframe',
                'height' : 50,
                'width' : 320,
                'params' : {}
              };
            `,
          }}
        /> */}
        {/* <Script src="https://bauval.org/22/b7c26b7e29d909125dd681daf86ddc30" strategy="afterInteractive" /> */}
        
        {/* ENDDDDD */}
        {/* <Script async data-cfasync="false" src="https://bauval.org/21/e29116e8be796061e86770079397f97e" strategy="afterInteractive" /> */}
        {/* <Script data-cfasync="false" src="https://abscloud.org/1/d7fca99fd804051303f69d429c3bd1d8" strategy="afterInteractive" /> */}
        {/* <Script data-cfasync="false" src="https://bauval.org/14/116653faa20a1994092c42cc2154743e" strategy="afterInteractive" /> */}
        {/* <Script async data-cfasync="false" src="https://5gvci.com/act/files/tag.min.js?z=12112599" strategy="afterInteractive" /> */}
        {/* <Script
          id="nap5k-zone-12112598"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "(function(s){s.dataset.zone='12112598',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))",
          }}
        /> */}
        {/* <Script
          id="vignette-zone-12112596"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "(function(s){s.dataset.zone='12112596',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))",
          }}
        /> */}
      </head>
      {/* Each page renders its own <Shell> (header, column, footer) so page types can differ in width. */}
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly) inject attributes on <body> before React hydrates. */}
      <body className="m-0 bg-white font-sans text-ink antialiased" suppressHydrationWarning>
        <div id="container-e29116e8be796061e86770079397f97e" />
        {/* <a href="https://araplhn.org/4/74d3146577333acda2ac01a2b6763080" target="_blank" rel="noreferrer" aria-label="Adsterra link" className="sr-only">
          Adsterra
        </a> */}
        <JsonLd data={[organizationLd(), websiteLd()]} />
        {children}
      </body>
    </html>
  );
}
