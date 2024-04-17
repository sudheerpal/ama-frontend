import React from "react";
import Link from "next/router";
const CustomLink = ({ children, type = "primary", classNames, href = "#" }) => {
  const buttonStyles = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-primary",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
  };

  return (
    <Link
      href={href}
      className={`flex items-center justify-center gap-1 px-4 py-2 rounded font-semibold hover:text-neutral hover:shadow duration-100 ${
        buttonStyles[type] || buttonStyles.primary
      } ${classNames}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
