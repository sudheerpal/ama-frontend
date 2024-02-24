import Header from "@/components/home/Header";
import ProductSidebar from "@/components/products/ProductSidebar";
import ProductsList from "@/components/products/ProductsList";
import CustomContainer from "@/components/ui/CustomContainer";
import React from "react";

const Products = () => {
  return (
    <>
      <Header />
      <CustomContainer classNames="p-5">
        <section className="grid gap-5 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <ProductsList />
          </div>
          <div className="sticky top-0 hidden lg:block">
            {/* <ProductSidebar /> */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id at
            quo molestiae labore dolorem expedita, commodi amet tempore eum unde
            tempora, repudiandae harum obcaecati fugiat assumenda distinctio
            quibusdam iure!lorem40
          </div>
        </section>
      </CustomContainer>
    </>
  );
};

export default Products;
