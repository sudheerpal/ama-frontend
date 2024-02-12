"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LinkTags = () => {
  const pathname = usePathname();
  const links = [
    { text: "Home", url: "/home" },
    { text: "About Us", url: "#" },
    { text: "Services", url: "#" },
    { text: "Verticals", url: "#" },
    { text: "Research Insights", url: "#" },
    { text: "Resources", url: "#" },
    { text: "Contact Us", url: "#" },
  ];
  return (
    <>
      {links.map((link, index) => (
        <li key={index} className="text-base text-primary font-[500]">
          <Link
            className={`px-2 py-1 ${
              pathname == link.url ? "text-blue-500" : ""
            }`}
            href={link.url}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </>
  );
};

export default LinkTags;
