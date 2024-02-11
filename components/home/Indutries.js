import React from "react";
import IndustryCard from "./industry/IndustryCard";
import SectionTitle from "../ui/SectionTitle";

const Indutries = () => {
  return (
    <div className="p-10 bg-accent">
      <SectionTitle>Industries</SectionTitle>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <IndustryCard />
        <IndustryCard />
        <IndustryCard />
        <IndustryCard />
        <IndustryCard />
        <IndustryCard />
      </section>
    </div>
  );
};

export default Indutries;
