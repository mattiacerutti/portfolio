import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/sections/header";
import {ThemeProvider} from "../components/theme-provider";
import Footer from "@/sections/footer";
import LoadingWrapper from "@/components/loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased ovicking-wide flex flex-col items-center min-h-screen justify-between`}>
        <div aria-hidden className="top-glow" />
        <ThemeProvider>
          <LoadingWrapper>
            <Header />
            <main className="flex justify-center flex-1 w-full">{children}</main>
            <Footer />
          </LoadingWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
