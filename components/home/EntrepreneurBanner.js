import React from "react";
import image1 from "@/assets/banner/image1.png";
import MRFImage from "../ui/Image";

const EntrepreneurBanner = () => {
  return (
    <MRFImage src={image1} alt="Entrepreneurs BG image" bgImage>
      <div className="px-5 py-12 text-center text-white bg-opacity-50 bg-primary min-h-36 md:p-24 lg:p-36 mrf-secondary-heading">
        <h2>
          To help entrepreneurs get their act together <br />{" "}
          <span className="text-secondary">before they talk to investors.</span>
        </h2>
        <hr className="w-16 mx-auto my-6 border-4 rounded-lg border-secondary" />
      </div>
    </MRFImage>
  );
};

export default EntrepreneurBanner;
