"use client";
import React, { useState } from "react";
import cardImage from "@/assets/serviceCard/image-1.png";
import icon from "@/assets/icons/Consulting.png";
import Image from "next/image";

const ServiceCard = () => {
  const [isHovered, setIsHoverd] = useState(false);
  return (
    <div
      onMouseEnter={(e) => setIsHoverd(true)}
      onMouseLeave={(e) => setIsHoverd(false)}
      className="relative overflow-hidden transition duration-300 bg-gray-100 shadow-lg hover:shadow-xl"
    >
      {/* Background image */}
      <div
        className="h-64 bg-center bg-cover"
        style={{ backgroundImage: `url(${cardImage.src})` }}
      ></div>
      <div
        className={`absolute left-0 right-0 h-full px-4 py-2 text-white transition duration-200 opacity-100 bg-opacity-80 bg-primary top-[200px] backdrop-filter ${
          isHovered && "-translate-y-[200px]"
        }`}
      >
        <div className="flex flex-col items-start gap-2">
          <h3 className="flex items-center gap-3 text-xl font-bold">
            <Image className="w-10 h-10" src={icon} alt="icon" />
            Consulting
          </h3>
          <div className="px-4 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laborum
            vitae reiciendis doloremque!
          </div>
          <button className="mx-4 text-sm text-secondary">read more</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
