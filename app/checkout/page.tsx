import type { Metadata } from "next";
import CheckoutForm from "../components/CheckoutForm";
import Shell from "../components/Shell";

export const metadata: Metadata = { title: "Checkout", alternates: { canonical: "/checkout/" }, robots: { index: false, follow: true } };

export default function CheckoutPage() {
  return (
    <Shell tone="gray">
      <CheckoutForm />
    </Shell>
  );
}
