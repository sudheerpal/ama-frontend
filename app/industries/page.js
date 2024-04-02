/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/home/Footer";
import ProductSidebar from "@/components/products/ProductSidebar";
import ProductsList from "@/components/products/ProductsList";
import CustomContainer from "@/components/ui/CustomContainer";
import LucidIcon from "@/components/ui/icons/LucidIcons";
import { fetchCategories, fetchAllReports } from "@/utils/fetchFunctions";
import { FileTextIcon } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";

const ReportListing = async ({ searchParams }) => {
  const reports = await fetchAllReports({ query: searchParams });

  const sidebarCategories = await fetchCategories();
  return (
    <>
      <section className="py-2 text-white lg:py-4 bg-primary">
        <CustomContainer>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LucidIcon
                name="FileText"
                classNames="mx-auto text-white"
                size={30}
              />
              <span className="text-lg font-bold md:text-xl ">
                Explore Our Latest Research Reports
              </span>
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
            <ProductsList reports={reports} isAllReports={true} />
          </div>
          <div className="sticky top-0 mb-5 h-min lg:block">
            <ProductSidebar categories={sidebarCategories} />
          </div>
        </section>
      </CustomContainer>
      <Footer />
    </>
  );
};

export default ReportListing;
