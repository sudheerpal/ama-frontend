"use client";
import LucidIcon from "@/components/ui/icons/LucidIcons";
import { links } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
const LinkTags = ({ parentCategories }) => {
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
                  setIshovered(true);
                }}
                onFocus={(e) => {
                  setIshovered(true);
                }}
                onMouseLeave={() => {
                  setIshovered(false);
                }}
                className="px-2 py-1 rounded-sm hover:text-white hover:bg-primary"
              >
                <Link
                  href={link.url}
                  className={`px-2 py-1  rounded-sm hover:text-white hover:bg-primary ${
                    pathname == link.url ? "text-blue-500" : ""
                  }`}
                >
                  {link.text}
                </Link>
              </summary>
              <ul
                className={`z-10 rounded lg:min-w-60 ${isHovered && "block"}`}
              >
                {parentCategories?.map((submenu, idx) => (
                  <li key={idx} className="flex flex-row items-center gap-2">
                    <LucidIcon classNames="p-0" name={submenu.icon} size={18} />
                    <Link
                      href={`/industries/${submenu.link}`}
                      className="py-[6px] rounded-sm px-0 hover:text-white hover:bg-primary"
                    >
                      {submenu.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ) : (
            <Link
              href={link.url}
              className={`px-2 py-1  rounded-sm hover:text-white hover:bg-primary ${
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
