"use client";
import Image from "next/image";
import React, { useState } from "react";
import industryIcon from "@/assets/icons/industryIcon.png";

const IndustryCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center gap-2 px-2 py-12 duration-300 hover:bg-white"
    >
      <div>
        <div
          className={`w-0 h-8 mx-auto border-r-8 border-secondary ${
            isHovered ? "visible" : "invisible translate-y-16"
          } duration-300`}
        ></div>
        <Image className="relative z-10" src={industryIcon} alt="icon" />
        <div
          className={`w-0 h-8 mx-auto border-r-8 border-secondary ${
            isHovered ? "visible" : "invisible -translate-y-16"
          } duration-300`}
        ></div>
      </div>
      <div className="flex flex-col gap-2 px-4">
        <h3 className="text-xl font-bold text-primary">Healthcare</h3>
        <p className="text-sm text-gray-400">
          Company that offers design and build services for you from initial
          sketches to the final production.
        </p>
      </div>
    </div>
  );
};

export default IndustryCard;
