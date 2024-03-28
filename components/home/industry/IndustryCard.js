"use client";
import LucidIcon from "@/components/ui/icons/LucidIcons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const IndustryCard = ({ industry }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { label, summary, icon } = industry;

  return (
    <Link
      href="/"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center gap-2 px-2 py-5 duration-300 hover:bg-white min-h-60"
    >
      <div>
        <div
          className={`w-0 mx-auto border-r-8 border-secondary ${
            isHovered ? "visible h-8" : "invisible h-0"
          } duration-300`}
        ></div>
        <div className="relative z-10 w-20">
          {icon && <LucidIcon name={icon} classNames="mx-auto" size={48} />}
          {/* <Image className={`w-full`} src={icon} alt={name} /> */}
        </div>
        <div
          className={`w-0 mx-auto border-r-8 border-secondary ${
            isHovered ? "visible h-8" : "invisible h-0"
          } duration-300`}
        ></div>
      </div>
      <div className="flex flex-col gap-2 px-4">
        <h3 className="text-xl font-bold text-primary">{label}</h3>
        <p className="text-sm text-gray-400">
          {summary ||
            "Dummy text: Showing because summary is empty now. It will replace when summary comes from backend"}
        </p>
      </div>
    </Link>
  );
};

export default IndustryCard;
