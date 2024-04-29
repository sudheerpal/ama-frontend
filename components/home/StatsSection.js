import React from "react";
import bgImage from "@/assets/stats/bg-image.png";
import Stats from "./stat/Stats";
import { CheckCircle } from "react-feather";
import CustomContainer from "../ui/CustomContainer";
import MRFImage from "../ui/Image";

const StatsSection = () => {
  return (
    <MRFImage src={bgImage} alt="Stats section BG image" bgImage>
      <div className="py-12 bg-opacity-50 bg-primary min-h-48 md:py-24 lg:py-36">
        <CustomContainer>
          <div className="flex gap-2 lg:gap-6">
            <div>
              <CheckCircle className="text-secondary" size={70} />
            </div>
            <h1 className="text-white mrf-heading">
              <span className="text-secondary">Doing the right thing,</span>{" "}
              <br />
              at the right time.
            </h1>
          </div>
          <div className="lg:ml-16">
            <Stats />
          </div>
        </CustomContainer>
      </div>
    </MRFImage>
  );
};

export default StatsSection;
