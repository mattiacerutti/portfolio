import React from "react";

type PProps = React.HTMLAttributes<HTMLParagraphElement>;

export default function P({ children, className = "", ...props }: PProps) {
  return (
    <p className={`text-lg leading-7 ${className}`} {...props}>
      {children}
    </p>
  );
}
