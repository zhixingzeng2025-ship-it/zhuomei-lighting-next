type IconProps = {
  className?: string;
};

export function SearchIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 16L21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 7H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 12H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 4.5a7.5 7.5 0 0 0-6.5 11.2L4.5 20l4.4-1a7.5 7.5 0 1 0 3.1-14.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.2 8.8c.2-.5.5-.5.8-.5h.6c.2 0 .5 0 .6.5.2.5.6 1.5.6 1.6 0 .2 0 .3-.1.4l-.4.5c-.1.1-.2.3-.1.5.1.4.6 1.1 1.2 1.6.8.7 1.5 1 1.9 1.1.2.1.4 0 .5-.1l.6-.7c.2-.2.4-.2.6-.1.2.1 1.5.7 1.7.8.2.1.3.2.3.4 0 .2-.1 1-.6 1.5-.5.5-1.1.5-1.4.5-.3 0-1.1-.1-2.1-.6-1.1-.5-2.3-1.4-3.3-2.4-.9-.9-1.8-2.2-2.3-3.2-.5-1-.6-1.8-.6-2.1 0-.4 0-.9.5-1.4.3-.3.7-.5 1-.5Z" fill="currentColor" />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 7.5L12 12l6.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7.5 4.5l2.4 4a1.5 1.5 0 0 1-.3 1.8l-1.3 1.3c1.1 2 2.8 3.7 4.8 4.8l1.3-1.3a1.5 1.5 0 0 1 1.8-.3l4 2.4c.7.4 1 1.3.7 2-.6 1.3-2.2 2.8-4 2.8C11.5 22 2 12.5 2 7.2c0-1.8 1.5-3.4 2.8-4 .7-.3 1.6 0 2 .7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function DocIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 3.5h7l5 5V20.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 3.5v5h5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8.8 12h6.4M8.8 15h6.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function UpIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 18V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 11l5-5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FeatureIcon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const shared = { className, "aria-hidden": true as const };

  switch (name) {
    case "experience":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...shared}>
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "oem":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...shared}>
          <path d="M4.5 18.5h15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M6 18.5V9.8l4-2.3v11" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M12 18.5V6.8l4-2.3v14" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M18 18.5V11l-2-1.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "team":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...shared}>
          <circle cx="8" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="16" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3.8 18c.6-2.7 2.5-4.2 4.8-4.2s4.2 1.5 4.8 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M11 18c.6-2.5 2.4-4 4.6-4 2.3 0 4.1 1.5 4.6 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "quality":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...shared}>
          <path d="M12 3.8l7.2 3v5.6c0 4.4-3.1 7.8-7.2 9.8-4.1-2-7.2-5.4-7.2-9.8V6.8l7.2-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M8 12.2l2.6 2.6 5-5.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "cert":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...shared}>
          <path d="M12 4.5l2.4 2.3 3.3.5-1.1 3.1 1.1 3.1-3.3.5-2.4 2.3-2.4-2.3-3.3-.5 1.1-3.1-1.1-3.1 3.3-.5L12 4.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M9.8 15.2V21l2.2-1.5 2.2 1.5v-5.8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "delivery":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...shared}>
          <path d="M3.5 7.5h10v8h-10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M13.5 10h3.2l2.8 2.8v2.7h-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <circle cx="8" cy="17.3" r="1.6" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="18" cy="17.3" r="1.6" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "global":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...shared}>
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4.8 12h14.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 4.2c2.4 2 3.8 4.8 3.8 7.8S14.4 17.8 12 19.8c-2.4-2-3.8-4.8-3.8-7.8S9.6 6.2 12 4.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "warranty":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...shared}>
          <path d="M12 4.5l1.6 4.5 4.5 1.5-4.5 1.6-1.6 4.5-1.6-4.5-4.5-1.6 4.5-1.5L12 4.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M5 18.5c2.1 0 3.9-1.4 4.5-3.4.6 2 2.4 3.4 4.5 3.4s3.9-1.4 4.5-3.4c.6 2 2.4 3.4 4.5 3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" {...shared}>
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
  }
}
