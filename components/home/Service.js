import React from "react";
import ServiceCard from "./service/ServiceCard";
import CustomContainer from "../ui/CustomContainer";

const Service = () => {
  return (
    <CustomContainer>
      <div className="p-10">
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </section>
      </div>
    </CustomContainer>
  );
};

export default Service;
