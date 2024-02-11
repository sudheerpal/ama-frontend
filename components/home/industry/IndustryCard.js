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
      className="flex items-center gap-2 px-2 py-12 duration-200 hover:bg-white"
    >
      <div>
        {/* i want to display this emply div only when hovering the total parent div */}
        <div
          className={`w-0 h-8 mx-auto border-r-8 border-secondary ${
            isHovered ? "visible" : "invisible"
          } duration-200`}
        ></div>
        <Image src={industryIcon} alt="icon" />
        <div
          className={`w-0 h-8 mx-auto border-r-8 border-secondary ${
            isHovered ? "visible" : "invisible"
          } duration-200`}
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
