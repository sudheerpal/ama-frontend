"use client";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo4.jpeg";
import Image from "next/image";
import { Facebook, Linkedin, Menu, Twitter, X } from "react-feather";
import LinkTags from "./LinkTags";
import Link from "next/link";
import { links } from "@/constants/constants";
import CustomContainer from "@/components/ui/CustomContainer";
import LucidIcon from "@/components/ui/icons/LucidIcons";
import LinkTagsDesktop from "./LinkTagsDesktop";
import { usePathname } from "next/navigation";

const MainNavbar = ({ parentCategories = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <div>
      <CustomContainer>
        <div className="p-0 navbar text-primary lg:py-4 lg:gap-5">
          <div className="navbar-start lg:max-w-sm lg:w-fit">
            <div className="relative">
              <button
                className="p-0 mr-4 btn btn-ghost lg:hidden"
                onClick={toggleNavbar}
                aria-label="Menu button"
              >
                {!isOpen ? <Menu size={24} /> : <X size={24} />}
              </button>
              <ul
                ref={menuRef}
                className={`menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow absolute bg-white rounded w-72 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <LinkTags parentCategories={parentCategories} />
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
                aria-label="Facebook link"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://twitter.com/amareport"
                target="_blank"
                className="hover:text-info"
                aria-label="Twitter link"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/advance-market-analytics"
                target="_blank"
                aria-label="LinkedIn link"
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
