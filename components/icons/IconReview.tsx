export default function IconReview({ size = 40 }: { size?: number }) {
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
      <circle cx="9" cy="9" r="0.9" fill="currentColor" />
      <circle cx="16" cy="9" r="0.9" fill="currentColor" />
      <circle cx="23" cy="9" r="0.9" fill="currentColor" />
      <circle cx="9" cy="16" r="0.9" fill="currentColor" />
      <circle cx="9" cy="23" r="0.9" fill="currentColor" />
      <circle cx="16" cy="16" r="0.9" fill="currentColor" />
      <circle cx="23" cy="9" r="0.9" fill="currentColor" />
      <circle cx="23" cy="16" r="0.9" fill="currentColor" />
      <circle cx="16" cy="23" r="0.9" fill="currentColor" />
      <circle cx="22" cy="22" r="8" />
      <line x1="28" y1="28" x2="33" y2="33" />
    </svg>
  );
}
