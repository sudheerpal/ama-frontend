import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import ServicePage from "@/components/service/ServicePage";
import { fetchTestimonials } from "@/utils/fetchFunctions";
import React from "react";

const Service = async () => {
  const testimonials = await fetchTestimonials();
  return (
    <>
      <Header />
      <ServicePage testimonials={testimonials} />
      <Footer />
    </>
  );
};

export default Service;
