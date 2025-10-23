import React from "react";

type H4Props = React.HTMLAttributes<HTMLHeadingElement>;

export default function H4({children, className = "", ...props}: H4Props) {
  return (
    <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`} {...props}>
      {children}
    </h4>
  );
}
