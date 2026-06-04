export default function IconServiceNow({ size = 40 }: { size?: number }) {
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
      <circle cx="20" cy="20" r="11" />
      <path d="M27 13 A11 11 0 0 1 31 20" />
      <polyline points="27,9 27,13 31,13" />
      <circle cx="20" cy="6" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="34" cy="20" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="20" cy="34" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="6" cy="20" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
