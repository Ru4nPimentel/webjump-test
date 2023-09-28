import Link from "next/link";
import React from "react";

import "./styles.scss";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  isLink?: boolean;
  link?: string;
};

const ButtonCustom = ({
  className,
  type = "button",
  children,
  isLink = false,
  link,
}: ButtonProps) => {
  return isLink ? (
    <Link className={`btnCustom ${className}`} href={`${link ? link : "#"}`}>
      {children}
    </Link>
  ) : (
    <button className={`btnCustom ${className}`} type={type}>
      {children}
    </button>
  );
};

export default ButtonCustom;
