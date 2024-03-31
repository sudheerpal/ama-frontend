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
import { Autoplay, Navigation } from "swiper/modules";
import CustomContainer from "@/components/ui/CustomContainer";

const BannerSlide = () => {
  const slidesData = [
    {
      id: 1,
      title: "Transform Your Business",
      subTitle: "Unlock your potential",
      subTitle2: "with our cutting-edge technology",
      image: image1,
    },
    {
      id: 3,
      title: "Discover New Opportunities",
      subTitle: "Explore endless possibilities",
      subTitle2: "with our innovative solutions",
      image: image3,
    },
    {
      id: 2,
      title: "Twice The Glory",
      subTitle: "We are yet again",
      subTitle2: "A great place to work",
      image: image2,
    },
  ];

  return (
    <div>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${slide.image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
            >
              <CustomContainer
                classNames={
                  "flex items-center justify-center lg:justify-start lg:px-40 min-h-96 xl:min-h-[476px]"
                }
              >
                <div className="text-center md:text-left">
                  <h1 className="mb-3 text-4xl font-bold xl:text-6xl text-primary lg:mb-7 min-h">
                    {slide.title}
                  </h1>
                  <h3 className="mb-2 text-2xl md:text-3xl xl:text-4xl">
                    {slide.subTitle}
                    <br />
                  </h3>
                  <h3 className="text-2xl font-bold md:text-3xl xl:text-4xl">
                    {slide.subTitle2}
                  </h3>
                </div>
              </CustomContainer>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlide;
