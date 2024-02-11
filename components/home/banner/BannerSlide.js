"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./BannerSlide.css";
import image1 from "@/assets/bannerSlider/image-1.png";
import image2 from "@/assets/bannerSlider/image-2.png";
import image3 from "@/assets/bannerSlider/image-3.png";
import { Navigation } from "swiper/modules";

const BannerSlide = ({ image }) => {
  const slideImages = [image1, image2, image3];
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]}>
        {slideImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
              className="flex items-center justify-center lg:justify-start lg:px-40 min-h-96"
            >
              <div className="flex flex-col items-start">
                <h1 className="mb-3 text-4xl font-bold xl:text-6xl text-primary lg:mb-7">
                  Twice The Glory!
                </h1>
                <h3 className="mb-2 text-2xl md:text-3xl xl:text-4xl">
                  We are yet again <br />
                </h3>
                <h3 className="text-2xl font-bold md:text-3xl xl:text-4xl">
                  A great place to work
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlide;
