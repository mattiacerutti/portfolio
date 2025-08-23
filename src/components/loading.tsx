"use client";

import {useEffect, useState} from "react";

export default function LoadingWrapper({children}: {children: React.ReactNode}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) {
      document.documentElement.style.overflow = "hidden";
      return;
    }

    document.documentElement.style.overflow = "";
  }, [loading]);

  if (!loading) return <>{children}</>;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 `} aria-hidden>
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 rounded-full border-2 border-[var(--muted-foreground)] border-t-transparent animate-spin" />
        <span className="text-sm text-[var(--muted-foreground)]">Loading…</span>
      </div>
    </div>
  );
}
