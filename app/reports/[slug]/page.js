import SEO from "@/components/common/SEO";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import ReportPage from "@/components/report/ReportPage";
import CustomContainer from "@/components/ui/CustomContainer";
import Head from "next/head";
import React from "react";

export const generateMetadata = async ({ params }) => {
  let reportData = null;
  const arrays = params.slug.split("-");
  const reportId = arrays[arrays.length - 1];
  const res = await fetch(`${process.env.API_URL}/api/reports/${reportId}`, {
    cache: "no-cache",
  });
  const dataReport = await res.json();
  reportData = dataReport.data;
  const { title, summery = "", marketKeyword = "" } = reportData?.basic;
  return {
    title: reportData?.basic?.seo?.metaTitle || title,
    // description: reportData?.basic?.seo?.metaDescription || summery,
    description:
      reportData?.basic?.seo?.metaDescription ||
      "The React Framework for the Web",
    keywords: reportData?.basic?.seo?.keywords || marketKeyword,
  };
};

const ReportDetails = async ({ params }) => {
  const arrays = params.slug.split("-");
  const reportId = arrays[arrays.length - 1];
  let reportData = null;
  let clientLogos = [];
  let testimonials = [];
  try {
    const res = await fetch(`${process.env.API_URL}/api/reports/${reportId}`, {
      cache: "no-cache",
    });
    const dataReport = await res.json();
    reportData = dataReport.data;
    const resLogo = await fetch(
      `${process.env.API_URL}/api/client-logo?catId=${reportData?.basic?.category?.parentCategory}`
    );
    const { data } = await resLogo.json();
    clientLogos = data.map((item) => item.image);
    const resTestimonials = await fetch(
      `${process.env.API_URL}/api/testimonial?catId=${reportData?.basic?.category?.parentCategory}`
    );
    const dataTestimonial = await resTestimonials.json();
    testimonials = dataTestimonial.data;
  } catch (error) {
    console.log("error fetching report", error);
  }

  return (
    <div>
      {reportData.basic ? (
        <ReportPage
          testimonials={testimonials}
          clientLogos={clientLogos}
          reportData={reportData}
        />
      ) : (
        <div className="text-center rd font-bold text-lg py-4 text-red-600">
          Report Not Found
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ReportDetails;
