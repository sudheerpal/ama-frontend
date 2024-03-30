/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/home/Footer";
import ProductSidebar from "@/components/products/ProductSidebar";
import ProductsList from "@/components/products/ProductsList";
import CustomContainer from "@/components/ui/CustomContainer";
import { fetchCategories, fetchReports } from "@/utils/fetchFunctions";
import { useParams } from "next/navigation";
import React from "react";
import { Home } from "react-feather";

const ReportListing = async ({ params }) => {
  const categorySlug = decodeURIComponent(params.categorySlug);
  const reports = await fetchReports({ query: categorySlug });
  console.log("reports", reports);
  const sidebarCategories = await fetchCategories();
  return (
    <>
      <section className="py-2 text-white bg-primary">
        <CustomContainer>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Home className="pb-1" size={30} />
              <span className="text-lg font-bold md:text-xl ">Healthcare</span>
            </div>
            <div className="hidden md:block">
              <i className="text-lg font-bold md:text-xl ">
                "Designing Growth Strategies Is In Our DNA"
              </i>
            </div>
          </div>
        </CustomContainer>
      </section>
      <CustomContainer>
        <section className="grid gap-5 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <ProductsList reports={reports} />
          </div>
          <div className="sticky top-0 hidden h-min lg:block">
            <ProductSidebar categories={sidebarCategories} />
          </div>
        </section>
      </CustomContainer>
      <Footer />
    </>
  );
};

export default ReportListing;
