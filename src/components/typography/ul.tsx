import React from "react";

export default function Ul({children, ...props}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className="pl-6 space-y-2 list-disc marker:text-[var(--foreground)]/40 marker:pl-10" {...props}>
      {children}
    </ul>
  );
}
