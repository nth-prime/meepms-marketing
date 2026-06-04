export default function IconInfra({ size = 40 }: { size?: number }) {
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
      <rect x="6" y="9" width="28" height="9" rx="1.5" />
      <rect x="6" y="22" width="28" height="9" rx="1.5" />
      <circle cx="11" cy="13.5" r="0.9" fill="currentColor" />
      <circle cx="15" cy="13.5" r="0.9" fill="currentColor" />
      <circle cx="19" cy="13.5" r="0.9" fill="currentColor" />
      <circle cx="11" cy="26.5" r="0.9" fill="currentColor" />
      <circle cx="15" cy="26.5" r="0.9" fill="currentColor" />
      <circle cx="19" cy="26.5" r="0.9" fill="currentColor" />
    </svg>
  );
}
