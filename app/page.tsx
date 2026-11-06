import type { Metadata } from "next";
import HomeView from "./components/HomeView";
import { pageMeta } from "./lib/seo";
import { SITE } from "./lib/site";

const meta = pageMeta({
  title: `${SITE.name} – Online Shopping for Fashion, Home Decor, Lights & Gadgets | Up to 80% Off`,
  description: SITE.description,
  path: "/",
  keywords: ["deals of the day", "products for you", "new arrivals", "shop online India"],
});

export const metadata: Metadata = { ...meta, title: { absolute: meta.title as string } };

export default function Home() {
  return <HomeView page={1} />;
}
