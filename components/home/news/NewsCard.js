import React from "react";
import Image from "next/image";
import image1 from "@/assets/newses/image1.png";
import { Clock } from "react-feather";
import moment from "moment";
import Link from "next/link";
import reportThumbnail from "@/assets/report/newReportThumbnail.jpeg";

const NewsCard = ({ report }) => {
  return (
    <div>
      <div>
        <Link href={`/reports/${report?.slug}`}>
          <div className="relative overflow-hidden border-4 shadow border-primary w-36 max-h-48">
            <Image src={reportThumbnail} alt="report thumbnail" />
            <span className="absolute text-sm font-bold text-center max-w-28 top-12 right-1">
              {report?.marketKeyword}
            </span>
          </div>
        </Link>
      </div>
      <hr className="w-20 my-5 border-4 rounded-lg border-secondary" />
      <h3 className="text-xs font-semibold text-primary">
        <Link href={`/reports/${report?.slug}`}> {report?.title}</Link>
      </h3>
      {/* <div className="flex gap-2 mt-4">
        <Clock className="mt-[2px] text-secondary" size={18} />
        <p className="text-gray-400">
          {moment(report?.createdAt).format("MMMM DD, YYYY")}{" "}
        </p>
      </div> */}
    </div>
  );
};

export default NewsCard;
