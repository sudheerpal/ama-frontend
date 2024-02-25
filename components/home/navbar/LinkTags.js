"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const links = [
  { text: "Home", url: "/" },
  { text: "About Us", url: "#" },
  {
    text: "Industries",
    url: "#",
    submenus: [
      { text: "Healthcare", url: "/industries" },
      { text: "SEO & SMO", url: "/industries/seo-smo" },
    ],
  },
  { text: "Verticals", url: "#" },
  { text: "Research Insights", url: "#" },
  { text: "Resources", url: "#" },
  { text: "Contact Us", url: "#" },
];
const LinkTags = () => {
  const pathname = usePathname();
  const [isHovered, setIshovered] = useState(false);

  return (
    <>
      {links.map((link, index) => (
        <li key={index} className="text-base text-primary font-[500] mx-1">
          {link.submenus ? (
            <details>
              <summary
                onMouseOver={(e) => {
                  console.log("clicked the button");
                  setIshovered(true);
                }}
                onFocus={(e) => setIshovered(true)}
                onMouseLeave={() => setIshovered(false)}
                className="px-2 py-1 hover:text-blue-500"
              >
                {link.text}
              </summary>
              <ul className={`z-10 rounded lg:min-w-60`}>
                {link.submenus.map((submenu, idx) => (
                  <li key={idx}>
                    <Link
                      href={submenu.url}
                      className="px-2 py-[6px] rounded-sm hover:text-white hover:bg-primary"
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
