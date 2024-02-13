"use client";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";

import "./SponsorSlider.css";
import image1 from "@/assets/sponsors/image1.png";
import image2 from "@/assets/sponsors/image2.png";
import image3 from "@/assets/sponsors/image3.png";
import image4 from "@/assets/sponsors/image4.png";
import SponsordCard from "./SponsordCard";

const companyLogos = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
];
const SponsorSlider = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let slidesPerView = 2;

  // Set size conditionally based on screen width
  if (screenWidth >= 768) {
    slidesPerView = 6;
  }

  return (
    <div className="flex items-center justify-center h-full">
      <>
        {/* <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div> */}
        <Swiper
          // navigation={true}
          slidesPerView={slidesPerView}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode, Navigation]}
        >
          {companyLogos?.map((el, idx) => (
            <SwiperSlide key={idx}>
              <SponsordCard image={el.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default SponsorSlider;
