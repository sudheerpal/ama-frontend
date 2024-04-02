import CheckoutForm from "@/components/checkout/components/CheckoutForm";
import CustomContainer from "@/components/ui/CustomContainer";
import { fetchReportBasicData } from "@/utils/fetchFunctions";
import React from "react";

export default async function page({ params }) {
  const arrays = params.slug.split("-");
  const reportId = arrays[arrays.length - 1];
  const reportData = await fetchReportBasicData(reportId);

  return (
    <CustomContainer>
      <CheckoutForm
        reportData={reportData}
        title={"Request Discount"}
        type="RDR"
      />
    </CustomContainer>
  );
}