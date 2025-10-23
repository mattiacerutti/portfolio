import React from "react";

export default function Ol({children, ...props}: React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol className="list-decimal space-y-2 pl-6" {...props}>
      {children}
    </ol>
  );
}
