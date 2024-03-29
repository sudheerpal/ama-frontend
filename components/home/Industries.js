import React from "react";
import IndustryCard from "./industry/IndustryCard";
import SectionTitle from "../ui/SectionTitle";
import CustomContainer from "../ui/CustomContainer";

const Industries = ({ industries }) => {
  return (
    <div className="pb-5 lg:pb-10 bg-accent">
      <SectionTitle>Industries</SectionTitle>
      <CustomContainer>
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries?.map((industry) => {
            return <IndustryCard key={industry.id} industry={industry} />;
          })}
        </section>
      </CustomContainer>
    </div>
  );
};

export default Industries;
