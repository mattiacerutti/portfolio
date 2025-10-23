import React from "react";

export default function Ul({children, ...props}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className="list-disc space-y-2 pl-6 marker:pl-10 marker:text-[var(--foreground)]/40" {...props}>
      {children}
    </ul>
  );
}
