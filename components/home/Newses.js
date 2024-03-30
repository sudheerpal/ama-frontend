import React from "react";
import SectionTitle from "../ui/SectionTitle";
import NewsCard from "./news/NewsCard";
import CustomContainer from "../ui/CustomContainer";

const Newses = ({ recentReports }) => {
  return (
    <div className="">
      <SectionTitle>Recent Reports</SectionTitle>
      <CustomContainer>
        <section className="grid grid-cols-1 gap-8 my-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:my-12">
          {recentReports.map((report) => (
            <NewsCard key={report.id} report={report} />
          ))}
        </section>
      </CustomContainer>
    </div>
  );
};

export default Newses;
