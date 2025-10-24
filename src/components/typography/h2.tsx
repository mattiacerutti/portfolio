import React from "react";

type H2Props = React.HTMLAttributes<HTMLHeadingElement>;

export default function H2({children, className = "", ...props}: H2Props) {
  return (
    <h2 className={`scroll-m-20 text-2xl font-semibold tracking-tight sm:text-3xl ${className}`} {...props}>
      {children}
    </h2>
  );
}
