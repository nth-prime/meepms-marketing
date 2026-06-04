export default function IconData({ size = 40 }: { size?: number }) {
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
      <ellipse cx="20" cy="9" rx="11" ry="3.5" />
      <path d="M9 9 V31 C9 32.9 13.9 34.5 20 34.5 C26.1 34.5 31 32.9 31 31 V9" />
      <path d="M9 17 C9 18.9 13.9 20.5 20 20.5 C26.1 20.5 31 18.9 31 17" />
      <path d="M9 24 C9 25.9 13.9 27.5 20 27.5 C26.1 27.5 31 25.9 31 24" />
    </svg>
  );
}
