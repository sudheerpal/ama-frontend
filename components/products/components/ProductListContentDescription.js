/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/ui/Button";
import React from "react";

const ProductListContentDescription = ({ isAllReports, currentCategory }) => {
  return isAllReports ? (
    <>
      <div>
        <h2 className="mb-3 text-xl font-bold capitalize text-primary">
          Explore Our Latest Research Reports
        </h2>
        <p>
          Stay informed with our comprehensive research reports covering a wide
          range of topics and industries. Our reports provide valuable insights
          and analysis to help you navigate today's dynamic business landscape.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 p-5 text-white bg-primary md:p-12">
        <h3 className="text-xl text-center lg:text-2xl">
          Explore Our Comprehensive Research Methodologies Across Various
          Industries
        </h3>
        <Button type="secondary">Speak to an Expert</Button>
      </div>
    </>
  ) : (
    <>
      <div>
        <h2 className="mb-3 text-xl font-bold capitalize text-primary">
          {currentCategory?.label}
        </h2>
        <p>{currentCategory?.summary}</p>
      </div>
      <div className="flex flex-col items-center gap-5 p-5 text-primary bg-secondary md:p-12">
        <h3 className="text-xl text-center lg:text-2xl">
          Explore Our Comprehensive Research Methodologies Across Various
          Industries
        </h3>
        <Button type="primary">Speak to an Expert</Button>
      </div>
    </>
  );
};

export default ProductListContentDescription;
