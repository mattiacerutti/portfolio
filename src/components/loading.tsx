"use client";

import {useEffect, useState} from "react";
import P from "./ui/typography/p";

export default function LoadingWrapper({children}: {children: React.ReactNode}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onLoad = () => setLoading(false);
    if (document.readyState === "complete") setLoading(false);
    else window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    if (loading) {
      document.documentElement.style.overflow = "hidden";
      return;
    }

    document.documentElement.style.overflow = "";
  }, [loading]);

  return (
    <>
      {children}
      <div
        className={`fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-[var(--background)] transition-opacity duration-300 ${!loading && "pointer-events-none invisible"}`}
        aria-hidden
      >
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--muted-foreground)] border-t-transparent" />
          <P className="text-[var(--muted-foreground)]">Loading…</P>
        </div>
      </div>
    </>
  );
}
