import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import ReportPage from "@/components/report/ReportPage";
import CustomContainer from "@/components/ui/CustomContainer";
import React from "react";

const ReportDetails = async ({ params }) => {
  const arrays = params.slug.split("-");
  const reportId = arrays[arrays.length - 1];
  let reportData = null;
  try {
    const res = await fetch(`${process.env.API_URL}/api/reports/${reportId}`, {
      cache: "no-cache",
    });
    const data = await res.json();
    reportData = data.data;
  } catch (error) {
    console.log("error fetching report");
  }
  return (
    <>
      {reportData.basic ? (
        <ReportPage reportData={reportData} />
      ) : (
        <div className="text-center rd font-bold text-lg py-4 text-red-600">
          Report Not Found
        </div>
      )}
      <Footer />
    </>
  );
};

export default ReportDetails;
