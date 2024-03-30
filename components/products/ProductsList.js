import React from "react";
import Button from "../ui/Button";
import { Search } from "react-feather";
import ReportCard from "./components/ReportCard";
import Pagination from "../ui/pagination/Pagination";

const ProductsList = ({ reports: reportsData }) => {
  const currentPage = reportsData.page;
  const totalReports = reportsData.totalCount;
  return (
    <div className="mx-auto mt-5 space-y-5">
      <div>
        <h2 className="mb-3 text-xl font-bold capitalize text-primary">
          Healthcare market research report
        </h2>
        <p>
          Healthcare organizations are currently operating in a dynamic set-up,
          witnessing seismic-shifts triggered by the launch of novel medical
          approaches and increasing internet penetration. This, coupled with ...
          <button className="ml-1 font-semibold text-primary hover:font-bold">
            Read more
          </button>
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 p-5 text-white bg-primary md:p-12">
        <h3 className="text-xl text-center lg:text-2xl">
          Gain Critical Insights in the Healthcare Industry Through Our Robust
          <br className="hidden lg:block" /> Research Methodologies
        </h3>
        <Button type="secondary">Speak to an Expert</Button>
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
        {reportsData?.data?.map((report, idx) => (
          <ReportCard report={report} key={idx} />
        ))}
        {reportsData?.totalCount ? (
          <section>
            <Pagination
              category={reportsData?.category}
              currentPage={currentPage}
              totalPages={Math.ceil(totalReports / 20)}
            />
          </section>
        ) : (
          <div className="font-semibold text-center">
            No More Records | We are working on it
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
