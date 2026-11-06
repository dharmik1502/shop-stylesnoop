/**
 * StyleSnoop mark: a magnifying glass with a clothes hanger inside the lens
 * ("snooping" for style), followed by a two-tone wordmark.
 */
export function LogoMark({ size = 26, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* lens */}
      <circle cx="13" cy="13" r="10" fill="#ffe6f4" stroke="#ad0061" strokeWidth="2.6" />
      {/* handle */}
      <path d="M20.5 20.5 L29 29" stroke="#ad0061" strokeWidth="3.4" strokeLinecap="round" />
      {/* hanger hook */}
      <path
        d="M13 10.2 V8.9 A1.6 1.6 0 1 1 14.6 7.3"
        stroke="#341232"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* hanger body */}
      <path
        d="M13 10.2 L6.6 15.6 H19.4 Z"
        stroke="#341232"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="#ffffff"
      />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[7px] leading-none ${className}`}>
      <LogoMark />
      <span className="text-[18px] font-bold tracking-[0.2px]">
        <span className="text-brand">Style</span>
        <span className="text-[#341232]">Snoop</span>
      </span>
    </span>
  );
}
