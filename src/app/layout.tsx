import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/sections/header";
import {ThemeProvider} from "../components/theme-provider";
import Footer from "@/sections/footer";
import LoadingWrapper from "@/components/loading";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

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
          <LoadingWrapper>
            <Header />
            <main className="flex w-full flex-1 justify-center">{children}</main>
            <Footer />
          </LoadingWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
