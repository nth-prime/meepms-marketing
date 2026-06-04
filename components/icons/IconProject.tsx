export default function IconProject({ size = 40 }: { size?: number }) {
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
      <rect x="6" y="13" width="28" height="20" rx="1.75" />
      <path d="M14 13 V9 H26 V13" />
      <path d="M27 19 L31 23 L27 27" />
      <path d="M13 19 L9 23 L13 27" />
      <line x1="17" y1="23" x2="23" y2="23" />
    </svg>
  );
}
