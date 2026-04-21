import "./globals.css";

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Header from "@/features/shared/components/layout/header";
import {ThemeProvider} from "@/components/providers/theme-provider";
import Footer from "@/features/shared/components/layout/footer";
import {DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, SITE_URL} from "@/lib/seo";
import CometBackground from "@/features/shared/components/comet-background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Mattia Cerutti",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable} ovicking-wide flex min-h-screen flex-col items-center justify-between antialiased`}>
        <div aria-hidden className="top-glow" />
        <ThemeProvider>
          <CometBackground className="min-h-screen" contentClassName="flex min-h-screen flex-col items-center" canvasClassName="opacity-20">
            <Header />
            <main className="flex w-full flex-1 justify-center">{children}</main>
            <Footer />
          </CometBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
