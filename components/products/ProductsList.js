import React from "react";
import Button from "../ui/Button";
import { Search } from "react-feather";
import ReportCard from "./components/ReportCard";

const ProductsList = () => {
  const reports = "123456789".split("");
  return (
    <div className="mx-auto space-y-5 max-w-7xl">
      <div>
        <h2 className="text-xl capitalize text-primary">
          Healcare market research report
        </h2>
        <p>
          Healthcare organizations are currently operating in a dynamic set-up,
          witnessing seismic-shifts triggered by the launch of novel medical
          approaches and increasing internet penetration. This, coupled with
          unprecedented access to staggering volumes of information online, has
          rendered discerning patients more conscientious. Consequently, the
          demand for sophisticated, pocket-friendly, and personalized healthcare
          services has skyrocketed. At Fortune Business Insights, we offer
          meticulous studies to help healthcare organizations get into the mind
          of their customer and design winning growth strategies. Our services
          therefore span across a gamut of markets within the healthcare sector.
          These include the healthcare IT, medical devices, pharmaceutical,
          biotechnology, diagnostics and other healthcare services. Our reports
          contain information, keeping in focus the specific requirements of key
          stakeholders. For instance, within the healthcare industry our
          product-offering includes: 1. Market Snapshot Reports – Quick market
          assessments to help our clients derive valuable insights on market
          size, prevailing competition, and others. 2. Disease Burden Reports –
          Reports estimating the burden of prevalent and rare disease conditions
          from a prevalence and cost of care perspective. 3. Market Landscape
          Reports – Get an executive-level blueprint of the market and valued
          recommendations to determine winning growth strategies. 4. Pipeline
          Reports – In-depth study on research and development landscape within
          a market. These reports offer thorough analysis of the distribution of
          pipeline products on the basis of their clinical trial stage, therapy
          area, indication, and others.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 p-5 text-white bg-primary md:p-12">
        <h3 className="text-xl text-center lg:text-2xl">
          Gain Critical Insights in the Healthcare Industry Through Our Robust
          <br />
          Research Methodologies
        </h3>
        <Button>Speak to an Expert</Button>
      </div>
      <div className="relative py-2 bg-secondary">
        <input
          className="w-full px-4 py-2 pr-12 text-gray-800 placeholder-gray-500 bg-inherit focus:outline-none"
          type="search"
          placeholder="Search Reports..."
        />
        <button className="absolute top-0 right-0 h-full px-1 text-[#002E5B] ">
          <Search />
        </button>
      </div>
      <div>
        {reports.map((report, idx) => (
          <ReportCard report={report} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
