import React from "react";
import CustomContainer from "../ui/CustomContainer";
import CheckoutForm from "./components/CheckoutForm";

const CheckoutPage = () => {
  return (
    <div>
      <CustomContainer classNames="mb-12">
        <section className="my-5">
          <div className="py-2 space-y-2">
            <h1 className="text-lg font-semibold md:text-2xl text-primary">
              Post-Covid-19 Epidemic Era, Anesthesia Drugs Industry Development
              Trend Analysis Report 2023
            </h1>
            <p className="">
              Asia Pacific Offshore Wind Market Research Report - Information By
              Technology (Wind Energy, Wave Energy, Tidal Stream, Ocean Thermal
              Energy Conversion (OTEC), and Other Technologies) –and Asia
              Pacific Market Forecast Till 2032
            </p>
            <p>
              <span className="font-bold">Edition: </span>
              <span>Single User</span>
            </p>
          </div>
          <div className="py-2">
            <p className="font-bold">Subtotal: $3000</p>
          </div>
          <div className="py-2">
            <p className="font-bold">Discount: $0</p>
          </div>
          <div className="py-2">
            <p className="font-bold">Total: $3000</p>
          </div>
        </section>
        <section>
          <CheckoutForm />
        </section>
      </CustomContainer>
    </div>
  );
};

export default CheckoutPage;
