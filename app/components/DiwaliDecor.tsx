import { useId } from "react";

/** Hand-drawn festive SVG ornaments for the Diwali banners. Purely decorative. */

type P = { className?: string; style?: React.CSSProperties };

/** Clay diya with a flickering flame and warm glow. */
export function Diya({ className = "h-12 w-16", style }: P) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 80 60" className={className} style={style} aria-hidden="true">
      <defs>
        <radialGradient id={`${id}g`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd36b" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#ff9d2e" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ff9d2e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}f`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff7cc" />
          <stop offset="45%" stopColor="#ffd23f" />
          <stop offset="100%" stopColor="#ff7a00" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8742c" />
          <stop offset="100%" stopColor="#8a2d0c" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="20" r="20" fill={`url(#${id}g)`} className="diya-glow" />
      <g className="diya-flame">
        <path d="M40 4 C46 14 47 22 40 30 C33 22 34 14 40 4Z" fill={`url(#${id}f)`} />
        <path d="M40 15 C42.5 20 42.5 24 40 28 C37.5 24 37.5 20 40 15Z" fill="#fffbe8" />
      </g>
      <path d="M6 32 Q40 64 74 32 Q56 38 40 38 Q24 38 6 32Z" fill={`url(#${id}b)`} />
      <path d="M6 32 Q24 38 40 38 Q56 38 74 32 Q56 34 40 34 Q24 34 6 32Z" fill="#f4b740" />
      <g fill="#ffd36b" opacity="0.9">
        <circle cx="24" cy="44" r="1.6" />
        <circle cx="32" cy="47" r="1.6" />
        <circle cx="40" cy="48" r="1.8" />
        <circle cx="48" cy="47" r="1.6" />
        <circle cx="56" cy="44" r="1.6" />
      </g>
    </svg>
  );
}

/** Hanging paper lantern (kandil) that gently sways. */
export function Lantern({ className = "h-40 w-16", style, hue = "gold" }: P & { hue?: "gold" | "red" }) {
  const id = useId().replace(/:/g, "");
  const [a, b] = hue === "red" ? ["#ff5a5f", "#b3123a"] : ["#ffd36b", "#e08a12"];
  return (
    <svg viewBox="0 0 60 160" className={`lantern-sway ${className}`} style={style} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}l`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={b} />
          <stop offset="50%" stopColor={a} />
          <stop offset="100%" stopColor={b} />
        </linearGradient>
        <radialGradient id={`${id}h`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff3c4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#fff3c4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <line x1="30" y1="0" x2="30" y2="46" stroke="#f4c56a" strokeWidth="1.2" />
      <rect x="21" y="44" width="18" height="6" rx="2" fill="#f4b740" />
      <path d="M30 50 L52 78 L30 108 L8 78Z" fill={`url(#${id}l)`} />
      <path d="M30 50 L40 78 L30 108 L20 78Z" fill="#fff" opacity="0.15" />
      <ellipse cx="30" cy="78" rx="14" ry="16" fill={`url(#${id}h)`} />
      <path d="M8 78 L52 78" stroke="#7a1d0c" strokeOpacity="0.35" strokeWidth="1" />
      <rect x="24" y="106" width="12" height="5" rx="2" fill="#f4b740" />
      <g stroke={a} strokeWidth="1.4" strokeLinecap="round">
        <line x1="26" y1="111" x2="24" y2="140" />
        <line x1="30" y1="111" x2="30" y2="146" />
        <line x1="34" y1="111" x2="36" y2="140" />
      </g>
      <circle cx="30" cy="148" r="3" fill="#f4b740" />
    </svg>
  );
}

/** Concentric petal mandala used as a soft background motif. */
export function Rangoli({ className = "h-80 w-80", style }: P) {
  const ring = (count: number, r: number, rx: number, ry: number, fill: string, offset = 0) =>
    Array.from({ length: count }, (_, i) => (
      <ellipse
        key={i}
        cx="100"
        cy={100 - r}
        rx={rx}
        ry={ry}
        fill={fill}
        transform={`rotate(${(360 / count) * i + offset} 100 100)`}
      />
    ));
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} aria-hidden="true">
      <circle cx="100" cy="100" r="96" fill="none" stroke="#f4c56a" strokeWidth="0.8" strokeDasharray="2 4" />
      {ring(24, 82, 5, 12, "#f4b740")}
      {ring(16, 60, 7, 16, "#ff7a3d", 11.25)}
      {ring(12, 38, 7, 14, "#e23d6b")}
      {ring(8, 20, 5, 10, "#ffd36b", 22.5)}
      <circle cx="100" cy="100" r="9" fill="#fff3c4" />
      <circle cx="100" cy="100" r="4" fill="#e23d6b" />
    </svg>
  );
}

/** A drooping string of twinkling fairy lights. */
export function LightString({ className = "h-10 w-full", bulbs = 22 }: P & { bulbs?: number }) {
  const colors = ["#ffd36b", "#ff7a3d", "#ff5a8a", "#7ee0ff", "#b6ff7a"];
  // Quadratic curve from (0,4) via (500,44) to (1000,4).
  const pts = Array.from({ length: bulbs }, (_, i) => {
    const t = (i + 0.5) / bulbs;
    const x = (1 - t) * (1 - t) * 0 + 2 * (1 - t) * t * 500 + t * t * 1000;
    const y = (1 - t) * (1 - t) * 4 + 2 * (1 - t) * t * 44 + t * t * 4;
    return { x, y, c: colors[i % colors.length], d: (i % 5) * 0.35 };
  });
  return (
    <svg viewBox="0 0 1000 60" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path d="M0 4 Q500 44 1000 4" fill="none" stroke="#2b0a12" strokeOpacity="0.6" strokeWidth="1.5" />
      {pts.map((p, i) => (
        <g key={i}>
          <rect x={p.x - 2} y={p.y - 1} width="4" height="4" fill="#3a1a12" />
          <ellipse
            cx={p.x}
            cy={p.y + 8}
            rx="4.5"
            ry="6.5"
            fill={p.c}
            className="bulb-twinkle"
            style={{ animationDelay: `${p.d}s`, filter: `drop-shadow(0 0 4px ${p.c})` }}
          />
        </g>
      ))}
    </svg>
  );
}

/** Four-point sparkles scattered over a banner. */
export function Sparkles({ items }: { items: { top: string; left: string; size: number; delay: number }[] }) {
  return (
    <>
      {items.map((s, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="sparkle pointer-events-none absolute text-[#ffe08a]"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
          aria-hidden="true"
        >
          <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0Z" fill="currentColor" />
        </svg>
      ))}
    </>
  );
}

/** Marigold-and-mango-leaf toran garland for the top edge of a banner. */
export function Toran({ className = "h-12 w-full", flowers = 18 }: P & { flowers?: number }) {
  const step = 1000 / flowers;
  return (
    <svg viewBox="0 0 1000 70" preserveAspectRatio="none" className={className} aria-hidden="true">
      <rect x="0" y="0" width="1000" height="8" fill="#9a4f12" />
      {Array.from({ length: flowers }, (_, i) => {
        const x = step * i + step / 2;
        const drop = i % 2 === 0 ? 34 : 22;
        return (
          <g key={i}>
            <line x1={x} y1="8" x2={x} y2={drop} stroke="#6b3a14" strokeWidth="1" />
            {i % 2 === 0 ? (
              <path d={`M${x} ${drop - 4} C${x + 9} ${drop + 8} ${x + 5} ${drop + 24} ${x} ${drop + 30} C${x - 5} ${drop + 24} ${x - 9} ${drop + 8} ${x} ${drop - 4}Z`} fill="#2f8f3a" />
            ) : null}
            <circle cx={x} cy={drop} r="9" fill={i % 4 < 2 ? "#ff9f1c" : "#ffd23f"} />
            <circle cx={x} cy={drop} r="5.5" fill={i % 4 < 2 ? "#f77f00" : "#ffb703"} />
            <circle cx={x} cy={drop} r="2" fill="#9a4f12" opacity="0.6" />
          </g>
        );
      })}
    </svg>
  );
}
