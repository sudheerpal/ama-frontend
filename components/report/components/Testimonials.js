"use client";
// import Swiper core and required modules
import { Autoplay } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import quotation from "@/assets/report/quotation.png";

export default function Testimonials({ testimonials = [] }) {
  return (
    <div className="remove_arrow">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        centerInsufficientSlides={true}
        centeredSlidesBounds={true}
        modules={[Autoplay]}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide className="flex flex-col p-6" key={index}>
            <div
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 100% 90%, 45% 90%, 32% 100%, 32% 90%, 0 90%)",
              }}
              className="p-4 pb-10 bg-accent"
            >
              <p>{testimonial.testimonial} </p>
              <div className="w-16 ml-auto">
                <div className="w-16 ml-auto">
                  <Image src={quotation} alt="quotation" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 my-5">
              <div>
                <Image
                  className="border rounded-full border-primary"
                  src={testimonial.image}
                  alt="avatar"
                  height={50}
                  width={50}
                  style={{ height: "50px", width: "50px", minWidth: "50px" }}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold"> {testimonial.name} </h3>
                <p className="text-neutral"> {testimonial.occupation} </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
