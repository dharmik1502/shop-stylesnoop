import type { Metadata } from "next";
import CartView from "../components/CartView";
import Shell from "../components/Shell";

export const metadata: Metadata = { title: "Your Cart", alternates: { canonical: "/cart/" }, robots: { index: false, follow: true } };

export default function CartPage() {
  return (
    <Shell tone="gray" mobileBar>
      <CartView />
    </Shell>
  );
}
