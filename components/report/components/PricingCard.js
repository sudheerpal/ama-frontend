"use client";

import React, { useState } from "react";

const PricingCard = () => {
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
    <div className="max-w-sm p-4 bg-secondary">
      <h3 className="mb-4 text-xl font-bold text-center text-primary">
        Pricing
      </h3>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="text-center">
          <input
            type="radio"
            id="basic"
            name="plan"
            value="Basic"
            checked={selectedPlan === "Basic"}
            onChange={() => handlePlanSelect("Basic")}
          />
          <label htmlFor="basic">
            Single User License{" "}
            <span className="p-1 ml-4 text-sm font-semibold border border-white text-primary">
              $2850
            </span>
          </label>
        </div>
        <div className="text-center">
          <input
            type="radio"
            id="standard"
            name="plan"
            value="Standard"
            checked={selectedPlan === "Standard"}
            onChange={() => handlePlanSelect("Standard")}
          />
          <label htmlFor="standard">
            Multy User License{" "}
            <span className="p-1 ml-4 text-sm font-semibold border border-white text-primary">
              $3200
            </span>
          </label>
        </div>
        <div className="text-center">
          <input
            type="radio"
            id="premium"
            name="plan"
            value="Premium"
            checked={selectedPlan === "Premium"}
            onChange={() => handlePlanSelect("Premium")}
          />
          <label htmlFor="premium">
            Corporate License{" "}
            <span className="p-1 ml-4 text-sm font-semibold border border-white text-primary">
              $3600
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="block px-4 py-2 mx-auto mt-4 text-white rounded bg-primary"
        >
          Select Plan
        </button>
      </form>
    </div>
  );
};

export default PricingCard;
