import { SITE } from "../lib/site";

/** The "Great Products, Better Value" line under the header. */
export function Tagline({ as: Tag = "p" }: { as?: "h1" | "p" }) {
  return <Tag className="my-[1em] text-center text-[1.17em] font-bold">{SITE.tagline}</Tag>;
}

/** Placeholder where the reference site shows an advertisement. */
export function AdSlot({ label = "Advertisements" }: { label?: string }) {
  return (
    <div className="text-center">
      <div className="text-[14px]">{label}</div>
      <div className="mx-auto my-2 flex h-[100px] w-[calc(100%-28px)] items-center justify-center rounded-md border border-dashed border-[#e5e7eb] bg-[#f9fafb] text-[12px] text-[#9ca3af]">
        Ad space
      </div>
    </div>
  );
}

export function Welcome() {
  return (
    <div className="px-[14px] text-center">
      <p className="my-[1em] text-[14px]">{SITE.welcome}</p>
    </div>
  );
}

/** Tagline, ad and welcome line together, as on the shop pages. */
export default function PageIntro({ heading = false }: { heading?: boolean }) {
  return (
    <>
      <Tagline as={heading ? "h1" : "p"} />
      <Welcome />
    </>
  );
}
