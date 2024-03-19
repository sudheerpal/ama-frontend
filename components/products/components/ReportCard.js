import Image from "next/image";
import React from "react";
import { CheckCircle } from "react-feather";
import reportThumbnail from "@/assets/report/reportThumbnail.png";
import Link from "next/link";

const ReportCard = () => {
  const report = {
    title:
      "U.S. Life Science Analytics Market Size, Share & COVID-19 Impact Analysis, By Type (Software and Services), By Delivery (On-premise and On-demand), and Country Forecast, 2023-2030",
    description:
      "The healthcare report provides a detailed analysis of various aspects of the healthcare industry, including trends, researchers, and anyone interested in understanding the dynamics of the healthcare industry.",
    publishDate: "2024-02-10",
    baseYear: "2022",
    totalPages: "80",
    category: "Healthcare",
    price: "$1000",
  };
  return (
    <div>
      <section className="gap-5 p-2 my-5 space-y-3 rounded md:flex hover:shadow-md lg:p-4">
        <div>
          <div className="w-32 md:mt-2">
            {/* <h3 className="font-bold leading-5">U.S. Life Science Analytics</h3> */}
            <Image src={reportThumbnail} alt="Report Thumbnail" />
          </div>
        </div>
        <div>
          <div className="space-y-0">
            <h4 className="font-bold text-primary">{report.title}</h4>
            <p className="text-gray-600">{report.description}</p>
          </div>
          <div className="flex items-center mt-1 text-sm gap-x-3">
            <span>
              {new Date(report.publishDate).toDateString("month", "year")}
            </span>
            <span>Base Year: {report.baseYear}</span>
            <span>No Of Pages: {report.totalPages}</span>
          </div>
        </div>
        <hr className="hidden w-0 border min-h-32 lg:block" />
        <div className="min-w-[20%]">
          <section className="space-y-2">
            <h4 className="font-bold">Price: {report.price}</h4>
            <div className="text-xs">
              <p className="flex items-center gap-1">
                <CheckCircle size={10} color="green" />{" "}
                <span>PDF, PPT, XLS</span>
              </p>
              <p className="flex items-center gap-1">
                <CheckCircle size={10} color="green" />{" "}
                <span>UPDATE AVAILABLE ON DEMAND</span>
              </p>
              <p className="flex items-center gap-1">
                <CheckCircle size={10} color="green" />{" "}
                <span className="text-blue-600">Online Licence</span>
              </p>
            </div>
            <div className="space-y-2">
              {/* <Button type="primary">Download Sample</Button>
              <Button type="secondary">Buy Now</Button> */}
              <Link href={`/reports/${123}`}>
                <button className="w-full text-white rounded btn btn-primary hover:bg-blue-800 btn-sm">
                  Download Sample
                </button>
              </Link>
              <button className="w-full rounded btn btn-secondary text-primary btn-sm">
                Buy Now
              </button>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ReportCard;
