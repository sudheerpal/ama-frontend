import React from "react";
import { Share } from "react-feather";

const ReportCard = () => {
  const report = {
    title:
      "U.S. Life Science Analytics Market Size, Share & COVID-19 Impact Analysis, By Type (Software and Services), By Delivery (On-premise and On-demand), By Application (Commercial Analytics, Personalized Therapy, Clinical Research Analytics, and Supply Chain Analytics) and By End User (Medical Device Companies, Pharmaceutical & Biotechnology Companies, Clinical Research Organizations, and Others), and Country Forecast, 2023-2030",
    description:
      "The healthcare report provides a detailed analysis of various aspects of the healthcare industry, including trends, challenges, and opportunities. It covers topics such as healthcare technology, patient care, medical research, and healthcare policy. Through extensive research and data analysis, the report aims to provide valuable insights into the current state of the healthcare sector and its future prospects. It is an essential resource for healthcare professionals, policymakers, researchers, and anyone interested in understanding the dynamics of the healthcare industry.The healthcare report provides a detailed analysis of various aspects of the healthcare industry, including trends, challenges, and opportunities. It covers topics such as healthcare technology, patient care, medical research, and healthcare policy. Through extensive research and data analysis, the report aims to provide valuable insights into the current state of the healthcare sector and its future prospects. It is an essential resource for healthcare professionals, policymakers, researchers, and anyone interested in understanding the dynamics of the healthcare industry.",
    publishDate: "2024-02-10",
    baseYear: "2022",
    totalPages: "80",
    category: "Healthcare",
    price: "$1000.00",
  };
  return (
    <section className="p-4 duration-100 border rounded hover:shadow-2xl hover:border-l-4 hover:border-l-primary">
      <div className="items-center gap-4 md:flex">
        <div>
          <div className="space-y-3">
            <h4 className="font-bold text-primary">{report.title}</h4>
            <p className="text-gray-400">
              {report.description.length > 200
                ? report.description.slice(0, 200)
                : report.description}
              ...{" "}
              <button className="inline-flex items-center gap-1 text-primary hover:font-bold">
                Read more <Share className="hover:font-bold" size={14} />
              </button>
            </p>
          </div>
          <div className="flex items-center mt-3 text-sm text-gray-400 gap-x-3">
            <span>
              {new Date(report.publishDate).toDateString("month", "year")}
            </span>
            <span>Base Year:{report.baseYear}</span>
            <span>No Of Pages:{report.totalPages}</span>
          </div>
        </div>
        <hr className="w-0 h-8 border" />
        <div>
          <button className="px-4 py-1 duration-100 bg-gray-300 rounded-full hover:bg-primary hover:text-white hover:shadow-lg">
            {report.price}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReportCard;
