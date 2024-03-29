"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ShoppingCart } from "react-feather";

const PricingCard = ({ price }) => {
  // State to track selected plan
  const [selectedPlan, setSelectedPlan] = useState(null);

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
    <div className="max-w-sm pt-4 rounded bg-secondary">
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
          </div>
          <Link
            href="#"
            className="block mx-auto text-sm text-center underline text-primary"
          >
            Compare Licenses
          </Link>
        </section>
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full gap-1 py-2 mt-4 font-semibold text-white duration-100 bg-primary hover:bg-opacity-90 hover:shadow"
        >
          <ShoppingCart className="text-secondary" /> BUY NOW
        </button>
      </form>
    </div>
  );
};

export default PricingCard;
