import Link from "next/link";
import Shell from "./components/Shell";

export default function NotFound() {
  return (
    <Shell tone="gray">
      <div className="mx-auto my-12 max-w-md rounded-2xl border border-line bg-white px-6 py-12 text-center">
        <p className="bg-gradient-to-r from-plum to-brand bg-clip-text text-[72px] leading-none font-extrabold text-transparent">404</p>
        <h1 className="mt-3 text-[20px] font-bold text-ink">Page not found</h1>
        <p className="mt-2 text-[14px] text-muted">The page you are looking for does not exist or has moved.</p>
        <div className="mt-6 flex flex-col justify-center gap-2.5 sm:flex-row">
          <Link href="/" className="inline-flex h-11 items-center justify-center rounded-lg bg-brand px-6 text-[14px] font-semibold text-white hover:bg-brand-dark">
            Back to Home
          </Link>
          <Link
            href="/category/"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-line px-6 text-[14px] font-semibold text-ink hover:border-brand hover:text-brand"
          >
            Browse Categories
          </Link>
        </div>
      </div>
    </Shell>
  );
}
