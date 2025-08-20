import React from "react";

export default function Ol({children, ...props}: React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol className="pl-6 list-decimal space-y-2" {...props}>
      {children}
    </ol>
  );
}
