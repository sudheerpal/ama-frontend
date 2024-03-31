"use client";
import { fetchRecentReports } from "@/utils/fetchFunctions";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Clock } from "react-feather";
import Link from "next/link";
export default function ReportList() {
  const [reports, setReports] = useState([]);
  const getReports = async () => {
    const recentReports = await fetchRecentReports(2);
    setReports(recentReports);
  };
  useEffect(() => {
    getReports();
  }, []);
  return (
    <div>
      <div className="mx-4 my-5">
        <h2 className="my-3 text-xl font-bold">related reports</h2>
        {reports.length > 0 &&
          reports.map((report, i) => (
            <div key={i} className="my-4">
              <Link
                href={`/reports/${report.slug}`}
                className="font-semibold text-primary"
              >
                {report.title}
              </Link>
              <div className="flex  items-center gap-2 mt-2 text-sm">
                <Clock className="text-secondary" size={16} />
                <p> {moment(report.createdAt).format("MMM DD, YYYY")} </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
