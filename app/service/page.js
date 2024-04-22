import Footer from "@/components/home/Footer";
import ServicePage from "@/components/service/ServicePage";
import { fetchTestimonials } from "@/utils/fetchFunctions";
import React from "react";

const Service = async () => {
  const testimonials = await fetchTestimonials();
  return (
    <div>
      <ServicePage testimonials={testimonials} />
      <Footer />
    </div>
  );
};

export default Service;
