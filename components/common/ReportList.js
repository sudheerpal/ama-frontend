import { fetchRecentReports } from "@/utils/fetchFunctions";
import moment from "moment";
import React from "react";
import { Clock } from "react-feather";
import Link from "next/link";
export default async function ReportList({ limit = 2 }) {
  const reports = await fetchRecentReports(limit);

  return (
    <div>
      <div className="mx-4 my-5">
        <h2 className="my-3 text-xl font-bold">Related reports</h2>
        {reports.length > 0 &&
          reports.map((report, i) => (
            <div key={i} className="my-4">
              <Link
                href={`/reports/${report?.slug}`}
                className="font-semibold text-primary"
                aria-label="Report Link"
              >
                {report?.title}
              </Link>
              <div className="flex items-center gap-2 mt-2 text-sm">
                <Clock className="text-secondary" size={16} />
                <p> {moment(report?.createdAt).format("MMM DD, YYYY")} </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
