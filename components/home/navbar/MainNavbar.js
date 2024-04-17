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
import LinkTagsDesktop from "./LinkTagsDesktop";

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
                className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded w-72"
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
            <LinkTagsDesktop parentCategories={parentCategories} />
          </div>
          <div className="lg:w-1/6 navbar-end">
            <div className="flex items-center gap-2 lg:gap-4">
              <Link
                href="https://www.facebook.com/advancemarketanalytics"
                target="_blank"
                className="hover:text-info"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://twitter.com/amareport"
                target="_blank"
                className="hover:text-info"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/advance-market-analytics"
                target="_blank"
                className="hover:text-info"
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
