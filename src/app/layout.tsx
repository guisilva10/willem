import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import SmoothScroll from "./_components/scroll-smooth";
import { SITE_NAME } from "./_content/site";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://willembio.vercel.app";
const SITE_DESCRIPTION =
  "Portfolio de Guilherme Willem, engenheiro de software e coordenador de tecnologia e educação. Projetos, trajetória e contato.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME}: Engenheiro de Software`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME}: Engenheiro de Software`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME}: Engenheiro de Software`,
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
    <html lang="pt-BR" suppressHydrationWarning className={geist.variable}>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
