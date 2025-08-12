"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import React from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
      {children}
    </NextThemeProvider>
  );
}
