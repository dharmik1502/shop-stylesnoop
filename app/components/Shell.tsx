import Footer from "./Footer";
import Header from "./Header";

/**
 * Page frame with the site header and footer. `tone="gray"` gives the page a
 * light surface background so white cards stand out (cart, checkout, policies).
 */
export default function Shell({
  tone = "white",
  mobileBar = false,
  children,
}: {
  tone?: "white" | "gray";
  /** Reserve room at the bottom on phones for a fixed action bar. */
  mobileBar?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative flex min-h-screen w-full flex-col ${tone === "gray" ? "bg-surface" : "bg-white"} ${
        mobileBar ? "pb-[74px] sm:pb-0" : ""
      }`}
    >
      <Header />
      <div className="container flex-1">{children}</div>
      <Footer />
    </div>
  );
}
