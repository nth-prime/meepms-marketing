export default function IconPlatforms({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="6" width="11" height="11" rx="1.75" />
      <rect x="24" y="6" width="11" height="11" rx="1.75" />
      <rect x="14.5" y="23" width="11" height="11" rx="1.75" />
      <line x1="16" y1="11.5" x2="24" y2="11.5" />
      <line x1="11" y1="17" x2="17.5" y2="23" />
      <line x1="29" y1="17" x2="22.5" y2="23" />
    </svg>
  );
}
