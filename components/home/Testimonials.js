import React from "react";
import SectionTitle from "../ui/SectionTitle";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import TestimonialSlider from "./testimonial/TestimonialSlider";

const Testimonials = () => {
  return (
    <div>
      <SectionTitle>Testimonials</SectionTitle>
      <TestimonialSlider />
    </div>
  );
};

export default Testimonials;
