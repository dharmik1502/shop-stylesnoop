import { formatPrice, getMrp, type Product } from "../data/products";
import { IconShield } from "./Icons";

export type Line = { item: { id: number; qty: number }; product: Product };

export function totals(lines: Line[]) {
  const count = lines.reduce((n, l) => n + l.item.qty, 0);
  const mrp = lines.reduce((n, l) => n + l.item.qty * getMrp(l.product), 0);
  const subtotal = lines.reduce((n, l) => n + l.item.qty * l.product.price, 0);
  return { count, mrp, subtotal, savings: mrp - subtotal };
}

/** "Price Details" card shared by the cart and checkout pages. */
export default function PriceSummary({ lines, children }: { lines: Line[]; children?: React.ReactNode }) {
  const t = totals(lines);
  const row = "flex justify-between text-[14px] text-ink";
  return (
    <div className="rounded-xl border border-line bg-white">
      <h2 className="border-b border-line px-5 py-3.5 text-[13px] font-semibold tracking-wider text-muted uppercase">Price Details</h2>
      <div className="space-y-3 px-5 py-4">
        <div className={row}>
          <span>
            Price ({t.count} item{t.count === 1 ? "" : "s"})
          </span>
          <span>{formatPrice(t.mrp, 0)}</span>
        </div>
        <div className={row}>
          <span>Discount</span>
          <span className="text-green">− {formatPrice(t.savings, 0)}</span>
        </div>
        <div className={row}>
          <span>Delivery Charges</span>
          <span className="text-green">FREE</span>
        </div>
        <div className="flex justify-between border-t border-dashed border-line pt-3 text-[16px] font-bold text-ink">
          <span>Total Amount</span>
          <span>{formatPrice(t.subtotal, 0)}</span>
        </div>
        <p className="rounded-lg bg-[#e9f8ef] px-3 py-2 text-[13px] font-semibold text-green">
          You will save {formatPrice(t.savings, 0)} on this order
        </p>
        {children}
      </div>
      <p className="flex items-center gap-2 border-t border-line px-5 py-3 text-[12px] text-muted">
        <IconShield className="h-4 w-4 shrink-0" /> Safe and secure shopping. Pay by UPI or cash on delivery.
      </p>
    </div>
  );
}
