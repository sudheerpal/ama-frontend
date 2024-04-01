import React from "react";
import logo from "@/assets/logo4.jpeg";
import Image from "next/image";
import {
  ChevronDown,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  Twitter,
} from "react-feather";
import LinkTags from "./LinkTags";
import { headers } from "next/headers";
import Link from "next/link";
import { links } from "@/constants/constants";
import CustomContainer from "@/components/ui/CustomContainer";
import LucidIcon from "@/components/ui/icons/LucidIcons";

const MainNavbar = ({ parentCategories = [] }) => {
  const heads = headers();
  const pathname = heads.get("next-url");

  return (
    <div>
      <CustomContainer>
        <div className="p-0 navbar text-primary lg:py-4 lg:gap-5">
          <div className="navbar-start lg:max-w-sm lg:w-fit">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="p-0 mr-4 btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded w-52"
              >
                <LinkTags
                  pathname={pathname}
                  parentCategories={parentCategories}
                />
              </ul>
            </div>
            <Link href="/">
              <Image
                className="max-w-28 lg:max-w-36 xl:max-w-40 md:pr-4"
                src={logo}
                alt="MRF logo"
              />
            </Link>
          </div>
          <div className="hidden navbar-center lg:flex lg:flex-grow">
            <ul className="px-4 font-medium lg:w-full lg:max-w-3xl xl:text-base menu menu-horizontal lg:justify-between">
              {links?.map((link, index) => (
                <li
                  key={index}
                  className={`px-4 text-primary cursor-pointer ${
                    link.submenus ? "group relative dropdown" : ""
                  }`}
                >
                  <Link
                    className={`p-0 hover:text-blue-500 ${
                      pathname == link.url ? "text-blue-500" : ""
                    }`}
                    href={link.url}
                  >
                    {link.text} {link.submenus && <ChevronDown size={16} />}
                  </Link>
                  {/* Render submenus if they exist */}
                  {link.submenus && (
                    <div className="absolute hidden h-auto group-hover:block dropdown-menu">
                      <ul className="top-0 z-10 grid grid-cols-2 gap-2 p-4 bg-white rounded shadow w-[576px]">
                        {parentCategories?.map((submenu) => (
                          <li key={submenu.id} className="py-1">
                            <Link
                              href={`/industries/${submenu.link}`}
                              className="inline-flex items-center p-0 cursor-pointer text-primary hover:text-blue-500"
                            >
                              <LucidIcon name={submenu.icon} size={20} />
                              <span> {submenu.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/6 navbar-end">
            <div className="flex items-center gap-2 lg:gap-4">
              <Link
                href="https://www.facebook.com/advancemarketanalytics"
                target="_blank"
                className="hover:text-blue-500"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://twitter.com/amareport"
                target="_blank"
                className="hover:text-blue-500"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/advance-market-analytics"
                target="_blank"
                className="hover:text-blue-500"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default MainNavbar;
