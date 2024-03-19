"use client";
import React, { useState } from "react";
import Button from "../ui/Button";
import { Search } from "react-feather";
import ReportCard from "./components/ReportCard";
import Pagination from "../ui/pagination/Pagination";

const ProductsList = () => {
  const [reports, setReports] = useState([1, 1, 1, 1, 1]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [totalReports, setTotalReports] = useState(300);

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setReports([1, 1, 1, 1, 1]);
    // fetch data here
    // fetch(`http://localhost:8000/api/v1/products?limit=${limit}&page=${page}`)
    setCurrentPage(pageNumber);
    console.log(pageNumber);
  };

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
        {reports?.map((report, idx) => (
          <ReportCard report={report} key={idx} />
        ))}
        <section>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(totalReports / limit)}
            onPageChange={handlePageChange}
          />
        </section>
      </div>
    </div>
  );
};

export default ProductsList;
