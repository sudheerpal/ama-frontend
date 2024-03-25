import React from "react";
import CustomContainer from "../ui/CustomContainer";
import CheckoutForm from "./components/CheckoutForm";

const CheckoutPage = () => {
  return (
    <div>
      <CustomContainer classNames="mb-12">
        <section className="my-5">
          <div className="py-2 space-y-2">
            <h4 className="font-bold md:text-lg text-primary xl:text-xl">
              Office Chairs- Comprehensive Study by Type (Ergonomic chairs,
              Executive office chairs, Conference chairs, Computer chairs,
              Others), Application (Households, School, Enterprise, Industrial,
              Others), Material Type (Mesh,, Leather, Fabric, Plastic, Others),
              Sale Channel (Supermarket/Hypermarket, Online, Offline)
            </h4>
            <p>
              <span className="font-bold">Edition:</span>
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
