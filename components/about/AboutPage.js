import React from "react";
import CustomContainer from "../ui/CustomContainer";
import Button from "../ui/Button";
import { ArrowRight } from "react-feather";
import bannerImage1 from "@/assets/about/banner/image1.png";
import bannerImage2 from "@/assets/about/banner/image2.png";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <CustomContainer>
        <section className="grid grid-cols-1 gap-5 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 bg-secondary md:grid-cols-2 md:p-10 xl:p-16">
              <div className="p-4">
                <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">
                  <span className="text-primary">Workshops</span>
                  <br />
                  <span>thats awesome</span>
                </h1>
                <p>
                  We are company that offers design and built services for you
                  from initial sketches to the final construction.
                </p>
                <div className="mt-5">
                  <Button>
                    click here <ArrowRight size={16} color="#FDE428" />
                  </Button>
                </div>
              </div>
              <div className="relative p-4 min-h-72">
                <Image
                  className="w-full max-w-56 lg:max-w-64"
                  src={bannerImage1}
                  alt="banner image 1"
                />
                <Image
                  className="absolute right-0 w-full bottom-4 max-w-56 lg:max-w-64"
                  src={bannerImage2}
                  alt="banner image 2"
                />
              </div>
            </div>
          </div>
          <div></div>
        </section>
      </CustomContainer>
    </div>
  );
};

export default AboutPage;
