import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MindCare",
  description: "Psixolog qabuliga yozilish sayti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}