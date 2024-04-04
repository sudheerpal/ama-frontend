/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/ui/Button";
import React from "react";
import allCategoryThumbnail from "@/assets/report/reportCategoryThumbnail/allCategory.jpeg";
import Link from "next/link";
const ProductListContentDescription = ({ isAllReports, currentCategory }) => {
  const thumbnail = currentCategory?.parent?.banner || currentCategory?.banner;
  return isAllReports ? (
    <>
      <div>
        {/* <h2 className="mb-3 text-xl font-bold capitalize text-primary">
          Explore Our Latest Research Reports
        </h2> */}
        <p>
          Stay informed with our comprehensive research reports covering a wide
          range of topics and industries. Our reports provide valuable insights
          and analysis to help you navigate today's dynamic business landscape.
        </p>
      </div>
      <section
        style={{
          backgroundImage: `url(${allCategoryThumbnail?.src})`,
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
          <Link
            href={"/request-industry-insights"}
            className="flex items-center justify-center gap-1 px-4 py-2 font-semibold duration-100 rounded bg-secondary text-primary hover:shadow"
          >
            Speak to an Expert
          </Link>
        </div>
      </section>
    </>
  ) : (
    <>
      <div>
        {/* <h2 className="mb-3 text-xl font-bold capitalize text-primary">
          {currentCategory?.label}
        </h2> */}
        <p>{currentCategory?.summary}</p>
      </div>
      <section
        style={{
          backgroundImage: `url(${thumbnail?.src})`, // Use the retrieved thumbnail
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
          <Link
            href={"/request-industry-insights"}
            className="flex items-center justify-center gap-1 px-4 py-2 font-semibold duration-100 rounded bg-secondary text-primary hover:shadow"
          >
            Speak to an Expert
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProductListContentDescription;
