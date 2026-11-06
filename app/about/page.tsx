import type { Metadata } from "next";
import { pageMeta } from "../lib/seo";
import StaticPage from "../components/StaticPage";
import { SITE } from "../lib/site";

export const metadata: Metadata = pageMeta({
  title: "About Us – Affordable Online Shopping Store in India",
  description: "Learn about StyleSnoop, an online shopping store for fashion, home decor, lights, gadgets and everyday essentials at affordable prices with free delivery across India.",
  path: "/about/",
  keywords: ["about StyleSnoop", "online store India", "affordable online shopping", "trusted shopping site"],
});

export default function AboutPage() {
  const n = SITE.name;
  return (
    <StaticPage title="About Us">
      <p>
        Welcome to {n}, an online shopping destination created to make everyday products more accessible, convenient, and
        affordable. Our goal is to bring together a wide selection of useful, stylish, and practical products for customers
        looking for quality and value in one convenient place.
      </p>
      <p>
        At {n}, we believe shopping should be simple and enjoyable. Our collection includes products across different categories,
        allowing customers to explore fashion, accessories, footwear, gadgets, lifestyle products, home essentials, and other
        everyday items. We continuously look for new and useful products that can match different preferences, lifestyles, and
        budgets.
      </p>
      <p>
        Our approach is focused on providing a balance between product variety, practical value, attractive designs, and
        competitive pricing. We understand that customers want products that look good, perform their intended purpose, and offer
        meaningful value. For this reason, we carefully select products with everyday usability and customer needs in mind.
      </p>
      <p>
        Whether you are updating your personal style, searching for useful accessories, adding something new to your home,
        exploring the latest gadgets, or simply looking for convenient everyday products, {n} is designed to give you plenty of
        options. Our growing collection makes it easier to discover products for different occasions and requirements without
        making the shopping process complicated.
      </p>
      <p>
        Customer satisfaction is an important part of our approach. We aim to provide clear product information and a
        straightforward shopping experience so customers can browse, compare, and choose products with greater confidence. We
        also value customer feedback because it helps us understand changing preferences and continuously improve our product
        selection and services.
      </p>
      <p>
        {n} is powered by {SITE.company}, with a focus on creating a convenient online marketplace where customers can discover a
        broad range of products at accessible prices. We are committed to improving our collections and bringing fresh products
        to our customers as shopping trends and everyday needs continue to evolve.
      </p>
      <p>
        As we continue growing, our vision remains simple: provide a convenient place where customers can discover useful
        products, explore new choices, and enjoy an easy online shopping experience. We invite you to explore {n} and discover
        products that add value, style, and convenience to your everyday life.
      </p>
      <p>
        Thank you for choosing {n}. We appreciate your trust and look forward to making your online shopping experience simple,
        convenient, and rewarding.
      </p>
    </StaticPage>
  );
}
