import React from "react";
import SectionTitle from "../ui/SectionTitle";
import NewsCard from "./news/NewsCard";

const Newses = () => {
  return (
    <div className="px-5 lg:px-10">
      <SectionTitle>News</SectionTitle>
      <section className="grid grid-cols-1 gap-8 my-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:my-12">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </section>
    </div>
  );
};

export default Newses;
