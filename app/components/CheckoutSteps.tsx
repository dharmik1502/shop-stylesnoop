import { IconCheck } from "./Icons";

const STEPS = ["Cart", "Address", "Payment", "Confirmation"];

export default function CheckoutSteps({ current }: { current: 0 | 1 | 2 | 3 }) {
  return (
    <ol className="mx-auto flex max-w-xl items-center py-5" aria-label="Checkout progress">
      {STEPS.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <li key={label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-bold ${
                  done ? "bg-green text-white" : active ? "bg-brand text-white ring-4 ring-brand/15" : "bg-white text-muted ring-1 ring-line"
                }`}
                aria-current={active ? "step" : undefined}
              >
                {done ? <IconCheck /> : i + 1}
              </span>
              <span className={`text-[11.5px] whitespace-nowrap sm:text-[12.5px] ${active ? "font-semibold text-ink" : "text-muted"}`}>{label}</span>
            </div>
            {i < STEPS.length - 1 && <span className={`mx-2 mb-5 h-0.5 flex-1 rounded ${done ? "bg-green" : "bg-line"}`} />}
          </li>
        );
      })}
    </ol>
  );
}
