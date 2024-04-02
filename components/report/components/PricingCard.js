"use client";

import Tooltip from "@/components/ui/Tooltip";
import Link from "next/link";
import React, { useState } from "react";
import { Info, ShoppingCart } from "react-feather";

const PricingCard = ({ price = {}, slug = "" }) => {
  // State to track selected plan
  const [selectedPlan, setSelectedPlan] = useState("single");

  // Function to handle selection of plan
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted with plan:", selectedPlan);
  };

  return (
    <div className="max-w-sm pt-4 text-sm rounded bg-secondary">
      <h3 className="mb-4 text-xl font-bold text-center text-primary">
        Pricing
      </h3>
      <form onSubmit={handleSubmit}>
        <section className="px-4 md:px-6">
          <div className="flex items-center gap-2 my-1">
            <input
              className="w-4 h-4 radio radio-primary"
              type="radio"
              id="single"
              name="plan"
              value="single"
              checked={selectedPlan === "single"}
              onChange={() => handlePlanSelect("single")}
            />
            <label className="cursor-pointer" htmlFor="single">
              Single User License{" "}
            </label>
            <span className="p-1 ml-auto text-sm font-semibold border border-white text-primary">
              ${price.singlePrice}
            </span>
            <div class="relative group">
              <Info className="z-10 cursor-pointer" />
              <div class="absolute bottom-8 hidden right-0  p-6 z-40 group-hover:block bg-white text-gray-700 border border-gray-300  rounded-lg w-56 mt-2">
                <ul className="list-disc ">
                  <li>Only one user can access this report at time</li>
                  <li>
                    users are not allowed to take a print out of the report PDF
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 my-1">
            <input
              className="w-4 h-4 radio radio-primary"
              type="radio"
              id="multy"
              name="plan"
              value="multi"
              checked={selectedPlan === "multi"}
              onChange={() => handlePlanSelect("multi")}
            />
            <label className="cursor-pointer" htmlFor="multy">
              Multy User License{" "}
            </label>
            <span className="p-1 ml-auto text-sm font-semibold border border-white text-primary">
              ${price.multiPrice}
            </span>
            <div class="relative group">
              <Info className="z-10 cursor-pointer" />
              <div class="absolute bottom-8 hidden right-0  p-6 z-40 group-hover:block bg-white text-gray-700 border border-gray-300  rounded-lg w-56 mt-2">
                <ul className="list-disc ">
                  <li>The report will be emailed to you in PDF format. </li>
                  <li>
                    This is a multi-user license, allowing 1-10 employees within
                    your organisation to access the report.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 my-1">
            <input
              className="w-4 h-4 radio radio-primary"
              type="radio"
              id="corporate"
              name="plan"
              value="corporate"
              checked={selectedPlan === "corporate"}
              onChange={() => handlePlanSelect("corporate")}
            />
            <label className="cursor-pointer" htmlFor="corporate">
              Corporate License{" "}
            </label>
            <span className="p-1 ml-auto text-sm font-semibold border border-white text-primary">
              ${price.enterprisePrice}
            </span>
            <div class="relative group">
              <Info className="z-10 cursor-pointer" />
              <div class="absolute bottom-8 hidden right-0  p-6 z-40 group-hover:block bg-white text-gray-700 border border-gray-300  rounded-lg w-56 mt-2">
                <ul className="list-disc ">
                  <li>The report will be emailed to you in PDF format. </li>
                  <li>
                    Excel Raw data with access to full quantitative & financial
                    market insights
                  </li>
                  <li>
                    Customization at no additional cost within the scope of the
                    report
                  </li>
                  <li>Graphs and Charts can be used during presentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Link
          href={`/report/${slug}/checkout?type=${selectedPlan}`}
          type="submit"
          className="inline-flex items-center justify-center w-full gap-1 py-2 mt-4 font-semibold text-white duration-100 bg-primary hover:bg-opacity-90 hover:shadow"
        >
          <ShoppingCart className="text-secondary" /> BUY NOW
        </Link>
      </form>
    </div>
  );
};

export default PricingCard;
