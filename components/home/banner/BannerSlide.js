import Image from "next/image";
import React from "react";
import { SwiperSlide } from "swiper/react";

const BannerSlide = ({ image }) => {
  return (
    <SwiperSlide>
      <Image src={image} alt={`image`} />
    </SwiperSlide>
  );
};

export default BannerSlide;
