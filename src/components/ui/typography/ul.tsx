import React from "react";
import {twMerge} from "tailwind-merge";

export default function Ul({children, className = "", ...props}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={twMerge("list-disc space-y-2 pl-6 marker:pl-10 marker:text-[var(--foreground)]/40", className)} {...props}>
      {children}
    </ul>
  );
}
