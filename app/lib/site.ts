export const SITE = {
  name: "NuttyNest",
  company: "NuttyNest",
  domain: "stylesnoop.com",
  tagline: "Premium Dry Fruits, Nuts & Seeds",
  welcome: "Handpicked almonds, cashews, pistachios, dates and more, packed fresh in airtight pouches and delivered across India.",
  email: "contact@stylesnoop.com",
  policyDate: "October 6, 2026",
  url: "https://stylesnoop.com",
  description:
    "Buy premium dry fruits online at NuttyNest: California almonds, whole cashews, pistachios, walnuts, Medjool dates, anjeer, makhana, seeds and gift boxes. Freshly packed, free delivery across India.",
  /** Site-wide search terms shoppers actually type; merged into every page's keywords. */
  keywords: [
    "NuttyNest",
    "dry fruits online",
    "buy dry fruits online India",
    "dry fruits shop",
    "premium dry fruits",
    "nuts online",
    "almonds online",
    "cashew nuts online",
    "pistachios online",
    "walnuts online",
    "dates online",
    "anjeer online",
    "makhana online",
    "healthy snacks",
    "dry fruit gift box",
    "diwali dry fruits gift",
    "free delivery",
    "cash on delivery",
    "best price dry fruits",
  ],
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/category/", label: "Category" },
  { href: "/cart/", label: "Cart" },
  { href: "/contact/", label: "Contact" },
];

/** UPI account that receives online payments (from the Paytm "Scan & Pay" standee). */
export const UPI = {
  id: "paytm.s1wd7dl@pty",
  payee: "StyleSnoop",
};

/**
 * Standard UPI deep link. Any UPI app (Paytm, PhonePe, GPay, BHIM) that scans a
 * QR of this string opens with the payee, exact amount and order note pre-filled.
 */
export function upiLink(amount: number, orderNo: string) {
  return `upi://pay?${upiQuery(amount, orderNo)}`;
}

/** Query part of a UPI payment link. Built by hand: some UPI apps reject an encoded "@" (%40) in the payee address. */
export function upiQuery(amount: number, orderNo: string) {
  const enc = encodeURIComponent;
  return `pa=${UPI.id}&pn=${enc(UPI.payee)}&am=${amount.toFixed(2)}&cu=INR&tn=${enc(`Order ${orderNo}`)}&tr=${enc(orderNo)}`;
}

/** UPI apps offered as one-tap buttons on phones. */
export const UPI_APPS = [
  { id: "gpay", name: "Google Pay", color: "#1a73e8", android: "com.google.android.apps.nbu.paisa.user", ios: "gpay://upi/pay" },
  { id: "phonepe", name: "PhonePe", color: "#5f259f", android: "com.phonepe.app", ios: "phonepe://pay" },
  { id: "paytm", name: "Paytm", color: "#00baf2", android: "net.one97.paytm", ios: "paytmmp://pay" },
] as const;

/**
 * Link that opens one specific UPI app with the payment pre-filled.
 * Android uses an intent (opens the Play Store if the app is missing); iOS uses the app's URL scheme.
 */
export function upiAppLink(app: (typeof UPI_APPS)[number], platform: "android" | "ios", amount: number, orderNo: string) {
  const q = upiQuery(amount, orderNo);
  if (platform === "ios") return `${app.ios}?${q}`;
  return `intent://pay?${q}#Intent;scheme=upi;package=${app.android};end`;
}
