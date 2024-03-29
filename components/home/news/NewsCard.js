import React from "react";
import Image from "next/image";
import image1 from "@/assets/newses/image1.png";
import { Clock } from "react-feather";

const NewsCard = () => {
  return (
    <div>
      <Image src={image1} className="w-full" alt="news image" />
      <hr className="w-20 my-5 border-4 rounded-lg border-secondary" />
      <h3 className="text-lg font-semibold md:text-xl">
        A digital prescription for the pharma industry
      </h3>
      <div className="flex gap-2 mt-4">
        <Clock className="mt-[2px] text-secondary" size={18} />
        <p className="text-gray-400">October 23, 2023</p>
      </div>
    </div>
  );
};

export default NewsCard;
