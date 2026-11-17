import type { Metadata } from "next";
import { pageMeta } from "../lib/seo";
import StaticPage from "../components/StaticPage";
import { SITE } from "../lib/site";

export const metadata: Metadata = pageMeta({
  title: "About Us – Premium Dry Fruits Store in India",
  description: "Learn about NuttyNest, an online store for premium dry fruits, nuts, dates, seeds and gift boxes, freshly packed and delivered free across India.",
  path: "/about/",
  keywords: ["about NuttyNest", "dry fruits store India", "premium dry fruits online", "trusted dry fruit seller"],
});

export default function AboutPage() {
  const n = SITE.name;
  return (
    <StaticPage title="About Us">
      <p>
        Welcome to {n}, an online store for premium dry fruits, nuts and seeds. We started with a simple idea: the almonds,
        cashews and dates you eat every day should be fresh, clean and fairly priced, and you should be able to order them
        from home without guessing about quality.
      </p>
      <p>
        Our range covers everyday staples like California almonds, whole cashews, walnut kernels, pistachios and golden
        kishmish, along with Medjool dates, anjeer, dried apricots, cranberries, makhana, chia and pumpkin seeds, and a few
        exotic nuts such as macadamias, pecans and Brazil nuts. For festivals, weddings and corporate gifting we also put
        together dry fruit gift boxes and combos.
      </p>
      <p>
        We buy from trusted growers and importers, sort every lot for size and colour, and reject broken, shrivelled or
        discoloured pieces. Products are packed in food-grade, airtight, resealable pouches so they reach you crunchy and
        full of flavour, and every pack carries its packing date and best-before date.
      </p>
      <p>
        Whether you soak a handful of almonds every morning, add cashews to your curries, snack on roasted makhana in the
        evening or need a gift box for Diwali, {n} is designed to make it easy. Clear product descriptions, honest pack
        weights and simple pricing let you choose with confidence.
      </p>
      <p>
        Customer satisfaction is at the heart of what we do. If a pack ever arrives damaged or not up to the mark, write to
        us and we will make it right. Your feedback also helps us decide which products to add next.
      </p>
      <p>
        {n} is powered by {SITE.company}. As we grow, our goal stays the same: bring you wholesome, good-quality dry fruits at
        fair prices, delivered fresh to your door anywhere in India.
      </p>
      <p>Thank you for choosing {n}. We look forward to being part of your healthy snacking.</p>
    </StaticPage>
  );
}
