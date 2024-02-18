"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LinkTags = () => {
  const pathname = usePathname();
  const links = [
    { text: "Home", url: "/home" },
    { text: "About Us", url: "#" },
    {
      text: "Services",
      url: "#",
      submenus: [
        { text: "Web Design", url: "/services/web-design" },
        { text: "SEO & SMO", url: "/services/seo-smo" },
      ],
    },
    { text: "Verticals", url: "#" },
    { text: "Research Insights", url: "#" },
    { text: "Resources", url: "#" },
    { text: "Contact Us", url: "#" },
  ];

  return (
    <>
      {links.map((link, index) => (
        <li key={index} className="text-base text-primary font-[500] mx-1">
          {link.submenus ? (
            <details>
              <summary className="px-2 py-1 hover:text-blue-500">
                {link.text}
              </summary>
              <ul className="z-10 rounded lg:min-w-60">
                {link.submenus.map((submenu, idx) => (
                  <li key={idx}>
                    <Link
                      href={submenu.url}
                      className="px-2 py-1 hover:text-blue-500"
                    >
                      {submenu.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ) : (
            <Link
              href={link.url}
              className={`px-2 py-1 hover:text-blue-500 ${
                pathname == link.url ? "text-blue-500" : ""
              }`}
            >
              {link.text}
            </Link>
          )}
        </li>
      ))}
    </>
  );
};

export default LinkTags;
