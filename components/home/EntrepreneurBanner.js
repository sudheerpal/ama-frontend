import React from "react";
import image1 from "@/assets/banner/image1.png";

const EntrepreneurBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="px-5 py-12 text-lg font-bold text-center text-white bg-opacity-50 bg-primary min-h-36 md:p-24 lg:p-36 md:text-2xl lg:text-3xl xl:text-4xl">
        <h2>
          To help entrepreneurs get their act together <br />{" "}
          <span className="text-secondary">before they talk to investors.</span>
        </h2>
        <hr className="w-16 mx-auto my-6 border-4 rounded-lg border-secondary" />
      </div>
    </div>
  );
};

export default EntrepreneurBanner;
