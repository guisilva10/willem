import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import SmoothScroll from "./_components/scroll-smooth";
import { BackgroundCanvas } from "./_components/background-canvas";
import { SITE_NAME } from "./_content/site";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://willembio.vercel.app";
const SITE_TITLE = `${SITE_NAME}: Engenheiro de Software AI-Native`;
const SITE_DESCRIPTION =
  "Engenheiro de software AI-Native. Construo produtos e agentes de IA em produção na 2V Educação.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
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
    <html lang="pt-BR" className={geist.variable}>
      <body className="antialiased bg-background text-foreground">
        <BackgroundCanvas />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
