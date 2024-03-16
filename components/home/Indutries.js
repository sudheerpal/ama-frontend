import React from "react";
import IndustryCard from "./industry/IndustryCard";
import SectionTitle from "../ui/SectionTitle";
import CustomContainer from "../ui/CustomContainer";

const Indutries = () => {
  return (
    <div className="p-10 bg-accent">
      <SectionTitle>Industries</SectionTitle>
      <CustomContainer classNames="p-5 lg:px-10">
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <IndustryCard />
          <IndustryCard />
          <IndustryCard />
          <IndustryCard />
          <IndustryCard />
          <IndustryCard />
        </section>
      </CustomContainer>
    </div>
  );
};

export default Indutries;
