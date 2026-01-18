import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import SmoothScroll from "./_components/scroll-smooth";

export const metadata: Metadata = {
  title: "Guilherme Silva",
  description: "",
};

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
