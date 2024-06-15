import AboutPage from "@/components/about/AboutPage";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import { fetchSponsorLogos, fetchTestimonials } from "@/utils/fetchFunctions";
import React from "react";

const About = async () => {
  const sponsors = await fetchSponsorLogos();
  const testimonials = await fetchTestimonials();
  return (
    <div>
      <Header />
      <AboutPage sponsors={sponsors} testimonials={testimonials} />
      <Footer />
    </div>
  );
};

export default About;
