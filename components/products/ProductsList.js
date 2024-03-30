import React from "react";
import Button from "../ui/Button";
import { Search } from "react-feather";
import ReportCard from "./components/ReportCard";
import Pagination from "../ui/pagination/Pagination";
import ProductListSearch from "./components/ProductListSearch";

const ProductsList = ({ reports: reportsData }) => {
  const currentPage = reportsData.page;
  const totalReports = reportsData.totalCount;

  console.log("this is the total count line 12", totalReports);

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
      <ProductListSearch />
      <div>
        {reportsData?.data?.map((report, idx) => (
          <ReportCard report={report} key={idx} />
        ))}
        {!reportsData?.data?.totalCount ? (
          <section>
            <Pagination
              category={reportsData?.category}
              currentPage={+currentPage}
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
