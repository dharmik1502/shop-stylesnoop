/**
 * NuttyNest mark: three almonds resting in a woven nest,
 * followed by a two-tone wordmark.
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
      {/* almonds */}
      <path d="M10 6.5 C13.4 8.6 13.6 13.4 10 16.5 C6.4 13.4 6.6 8.6 10 6.5 Z" fill="#c47a3a" stroke="#3a2412" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M22 6.5 C25.4 8.6 25.6 13.4 22 16.5 C18.4 13.4 18.6 8.6 22 6.5 Z" fill="#c47a3a" stroke="#3a2412" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M16 3.5 C20 6 20.2 11.6 16 15.5 C11.8 11.6 12 6 16 3.5 Z" fill="#b8692a" stroke="#3a2412" strokeWidth="1.2" strokeLinejoin="round" />
      {/* nest */}
      <path d="M2.5 15 H29.5 C29.5 23 23.5 28.5 16 28.5 C8.5 28.5 2.5 23 2.5 15 Z" fill="#9a4f12" />
      <path d="M4.5 19 C10 21.5 22 21.5 27.5 19 M6.5 23.5 C11.5 25.5 20.5 25.5 25.5 23.5" stroke="#fbeedd" strokeWidth="1.3" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[7px] leading-none ${className}`}>
      <LogoMark />
      <span className="text-[18px] font-bold tracking-[0.2px]">
        <span className="text-brand">Nutty</span>
        <span className="text-plum">Nest</span>
      </span>
    </span>
  );
}
