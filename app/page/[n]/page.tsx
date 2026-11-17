import type { Metadata } from "next";
import HomeView, { homePageCount } from "../../components/HomeView";
import { pageMeta } from "../../lib/seo";
import { SITE } from "../../lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  const params = Array.from({ length: homePageCount() - 1 }, (_, i) => ({ n: String(i + 2) }));
  // `output: "export"` rejects an empty list; the placeholder renders a 404.
  return params.length ? params : [{ n: "2" }];
}

export async function generateMetadata({ params }: { params: Promise<{ n: string }> }): Promise<Metadata> {
  const { n } = await params;
  return pageMeta({
    title: `Products For You – Best Deals Online – Page ${n}`,
    description: `Browse page ${n} of handpicked bestsellers at ${SITE.name}: fashion, home decor, lights and gadgets with up to 80% off, free delivery and Cash on Delivery.`,
    path: `/page/${n}/`,
  });
}

export default async function HomePageN({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  return <HomeView page={Number(n)} />;
}
