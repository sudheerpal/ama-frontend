import AboutPage from "@/components/about/AboutPage";
import Footer from "@/components/home/Footer";
import { fetchSponsorLogos } from "@/utils/fetchFunctions";
import React from "react";

const About = async () => {
  const sponsors = await fetchSponsorLogos();
  return (
    <div>
      <AboutPage sponsors={sponsors} />
      <Footer />
    </div>
  );
};

export default About;
