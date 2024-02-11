"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Banner.css";
import image1 from "@/assets/bannerSlider/image-1.png";
import image2 from "@/assets/bannerSlider/image-2.png";
import image3 from "@/assets/bannerSlider/image-3.png";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

const Banner = () => {
  const slideImages = [image1, image2, image3];
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {slideImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} alt={`image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
