"use client";

import Tooltip from "@/components/ui/Tooltip";
import Link from "next/link";
import React, { useState } from "react";
import { Info, ShoppingCart } from "react-feather";

const PricingCard = ({ price = {}, slug = "" }) => {
  // State to track selected plan
  const [selectedPlan, setSelectedPlan] = useState("Single");

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
              value="Single"
              checked={selectedPlan === "Single"}
              onChange={() => handlePlanSelect("Single")}
            />
            <label className="cursor-pointer" htmlFor="single">
              Single User License{" "}
            </label>
            <span className="p-1 ml-auto text-sm font-semibold border border-white text-primary">
              ${price.singlePrice}
            </span>
            <Tooltip
              text={`Scope: Accessible to all employees, regardless of location. Printing permitted.
Excel Compatibility: Includes Excel version for BI software (SAAS or SAP) integration.
Insights: Comprehensive quantitative and financial market insights.
Customizations: Up to 15% within project scope at no extra charge.
Support: Post-purchase analyst support provided.
Presentation: Graphs and charts available for presentations.
Data Sharing: Public sharing allowed with AMA citation.`}
            >
              <Info className="z-10" />
            </Tooltip>
          </div>
          <div className="flex items-center gap-2 my-1">
            <input
              className="w-4 h-4 radio radio-primary"
              type="radio"
              id="multy"
              name="plan"
              value="Multy"
              checked={selectedPlan === "Multy"}
              onChange={() => handlePlanSelect("Multy")}
            />
            <label className="cursor-pointer" htmlFor="multy">
              Multy User License{" "}
            </label>
            <span className="p-1 ml-auto text-sm font-semibold border border-white text-primary">
              ${price.multiPrice}
            </span>
            <Tooltip
              text={`Delivery: Report emailed in PDF format.
Accessibility: Allows 1-10 employees within the organization to access.`}
            >
              <Info className="z-10" />
            </Tooltip>
          </div>
          <div className="flex items-center gap-2 my-1">
            <input
              className="w-4 h-4 radio radio-primary"
              type="radio"
              id="corporate"
              name="plan"
              value="Corporate"
              checked={selectedPlan === "Corporate"}
              onChange={() => handlePlanSelect("Corporate")}
            />
            <label className="cursor-pointer" htmlFor="corporate">
              Corporate License{" "}
            </label>
            <span className="p-1 ml-auto text-sm font-semibold border border-white text-primary">
              ${price.enterprisePrice}
            </span>
            <Tooltip
              text={`Accessibility: Only one user access at a time. No printing allowed`}
            >
              <Info className="z-10" />
            </Tooltip>
          </div>
        </section>
        <Link
          href={`/report/${slug}/checkout`}
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
