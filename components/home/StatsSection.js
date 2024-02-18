import React from "react";
import bgImage from "@/assets/stats/bg-image.png";
import Stats from "./stat/Stats";
import { CheckCircle } from "react-feather";
import CustomContainer from "../ui/CustomContainer";

const StatsSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
      className="px-5 py-12 bg-opacity-90 bg-primary min-h-48 md:p-24 lg:p-36"
    >
      <CustomContainer>
        <div className="flex gap-2 lg:gap-6">
          <div>
            <CheckCircle className="text-secondary" size={70} />
          </div>
          <h1 className="text-2xl font-bold text-white md:text-4xl lg:text-6xl">
            <span className="text-secondary">Doing the right thing,</span>{" "}
            <br />
            at the right time.
          </h1>
        </div>
        <div>
          <Stats />
        </div>
      </CustomContainer>
    </div>
  );
};

export default StatsSection;
