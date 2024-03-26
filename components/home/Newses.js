import React from "react";
import SectionTitle from "../ui/SectionTitle";
import NewsCard from "./news/NewsCard";
import CustomContainer from "../ui/CustomContainer";

const Newses = () => {
  return (
    <div className="">
      <SectionTitle>News</SectionTitle>
      <CustomContainer>
        <section className="grid grid-cols-1 gap-8 my-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:my-12">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </section>
      </CustomContainer>
    </div>
  );
};

export default Newses;
