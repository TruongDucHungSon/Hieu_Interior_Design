import Link from "next/link";
import React from "react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
};
const ButtonLink = ({ href, children }: ButtonLinkProps) => {
  return (
    <Link href={href} className="button-link">
      {children}
    </Link>
  );
};

export default ButtonLink;
