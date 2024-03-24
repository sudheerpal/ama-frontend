/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import ProductSidebar from "@/components/products/ProductSidebar";
import ProductsList from "@/components/products/ProductsList";
import CustomContainer from "@/components/ui/CustomContainer";
import React from "react";
import { Home } from "react-feather";

const Products = () => {
  const reports = [
    {
      id: 2,
      title: "Green Cement Market ",
      slug: "green-cement-market-2",
      summery:
        "Rising environmental concerns and government regulations on carbon emissionsIncreasing demand for sustainable construction materialsTechnological advancements in gr",
      price: {
        multiPrice: "5850",
        singlePrice: "4850",
        enterprisePrice: "6850",
      },
      createdAt: "2024-03-24T06:53:55.663Z",
      baseyear: "2023",
      noOfPages: "250",
    },
  ];
  return (
    <>
      <Header />
      <section className="text-white bg-primary">
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
            <ProductSidebar />
          </div>
        </section>
      </CustomContainer>
      <Footer />
    </>
  );
};

export default Products;
