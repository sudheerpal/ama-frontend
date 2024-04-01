/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/ui/Button";
import React from "react";
import allCategoryThumbnail from "@/assets/report/reportCategoryThumbnail/allCategory.jpeg";
import { getCategoryThumbnail } from "@/utils/helper";

const ProductListContentDescription = ({ isAllReports, currentCategory }) => {
  const { thumbnail } = getCategoryThumbnail(currentCategory?.link);
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
      <section
        style={{
          backgroundImage: `url(${allCategoryThumbnail.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="flex flex-col items-center gap-5 p-5 text-white bg-opacity-50 bg-primary md:p-12">
          <h3 className="text-xl text-center lg:text-2xl">
            Explore Our Comprehensive Research Methodologies Across Various
            Industries
          </h3>
          <Button type="secondary">Speak to an Expert</Button>
        </div>
      </section>
    </>
  ) : (
    <>
      <div>
        <h2 className="mb-3 text-xl font-bold capitalize text-primary">
          {currentCategory?.label}
        </h2>
        <p>{currentCategory?.summary}</p>
      </div>
      <section
        style={{
          backgroundImage: `url(${thumbnail.src})`, // Use the retrieved thumbnail
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="flex flex-col items-center gap-5 p-5 text-white bg-opacity-50 bg-primary md:p-12">
          <h3 className="text-xl text-center lg:text-2xl">
            Explore Our Comprehensive Research Methodologies Across Various
            Industries
          </h3>
          <Button type="secondary">Speak to an Expert</Button>
        </div>
      </section>
    </>
  );
};

export default ProductListContentDescription;
