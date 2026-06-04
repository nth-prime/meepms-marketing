import type { Metadata } from "next";
import "../styles/tokens.css";
import "../styles/reset.css";

export const metadata: Metadata = {
  title: "Meep Managed Services — Strategic managed services for critical systems",
  description:
    "Architecture-level ownership, operational platform support, ServiceNow implementations, data and reporting, and project capacity for the systems your business runs on.",
  openGraph: {
    title: "Meep Managed Services",
    description:
      "Strategic managed services for the systems your business runs on.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
