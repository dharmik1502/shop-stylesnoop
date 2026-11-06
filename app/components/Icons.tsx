/** Small inline icon set (stroke icons, 24px grid). */
type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const IconSearch = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.5-3.5" />
  </svg>
);

export const IconCart = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M3 4h2l2.4 11.2a1.5 1.5 0 001.5 1.2h8.7a1.5 1.5 0 001.5-1.1L21 8H6.2" />
    <circle cx="9.5" cy="20" r="1.3" />
    <circle cx="17.5" cy="20" r="1.3" />
  </svg>
);

export const IconMenu = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const IconClose = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const IconChevronDown = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const IconChevronRight = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export const IconChevronLeft = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className}>
    <path d="M15 6l-6 6 6 6" />
  </svg>
);

export const IconTruck = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" />
    <circle cx="7" cy="18" r="1.8" />
    <circle cx="17.5" cy="18" r="1.8" />
  </svg>
);

export const IconCash = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}>
    <rect x="2.5" y="6" width="19" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.6" />
    <path d="M6 9.5v5M18 9.5v5" />
  </svg>
);

export const IconReturn = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M9 14L4 9l5-5" />
    <path d="M4 9h10.5a5.5 5.5 0 010 11H11" />
  </svg>
);

export const IconShield = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const IconStar = ({ className = "h-3 w-3" }: P) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29a1 1 0 00.95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.03a1 1 0 00-.36 1.12l1.07 3.3c.3.91-.76 1.68-1.54 1.11l-2.8-2.03a1 1 0 00-1.18 0l-2.8 2.03c-.78.57-1.84-.2-1.54-1.12l1.07-3.29a1 1 0 00-.36-1.12L2.98 8.72c-.78-.57-.38-1.81.59-1.81h3.46a1 1 0 00.95-.69l1.07-3.29z" />
  </svg>
);

export const IconTag = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M3 12V4a1 1 0 011-1h8l9 9-9 9-9-9z" />
    <circle cx="7.5" cy="7.5" r="1.3" />
  </svg>
);

export const IconMail = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6.5L12 13l8.5-6.5" />
  </svg>
);

export const IconHelp = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9.5a2.5 2.5 0 014.6 1.3c0 1.7-2.1 2-2.1 3.4M12 17.2v.1" />
  </svg>
);

export const IconPin = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const IconCheck = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} strokeWidth={2.5} className={className}>
    <path d="M5 13l4 4L19 7" />
  </svg>
);

export const IconTrash = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className}>
    <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" />
  </svg>
);

export const IconBolt = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
  </svg>
);

export const IconLock = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 018 0v3" />
  </svg>
);
