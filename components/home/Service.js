import React from "react";
import ServiceCard from "./service/ServiceCard";

const Service = () => {
  return (
    <div className="p-10">
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </section>
    </div>
  );
};

export default Service;
