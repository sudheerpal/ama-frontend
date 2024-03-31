import CheckoutPage from "@/components/checkout/CheckoutPage";
import React from "react";

const Checkout = async ({ params }) => {
  const arrays = params.slug.split("-");
  const reportId = arrays[arrays.length - 1];
  const title = params.slug.replaceAll("-", " ").replace(reportId, "");
  return (
    <div className="">
      <CheckoutPage title={title} />
    </div>
  );
};

export default Checkout;
