import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Header from "@/sections/header";
import {ThemeProvider} from "../components/theme-provider";
import Footer from "@/sections/footer";
import {DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, SITE_URL} from "@/lib/seo";
import "./globals.css";

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
  icons: {
    icon: [{url: "/favicon.ico", type: "image/x-icon"}],
    shortcut: "/favicon.ico",
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
          <Header />
          <main className="flex w-full flex-1 justify-center">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
