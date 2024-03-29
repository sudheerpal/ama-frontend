import JobDetailsPage from "@/components/career/JobDetailsPage";
import Footer from "@/components/home/Footer";
import React from "react";

const JobDescription = ({ params }) => {
  return (
    <div>
      <JobDetailsPage jobId={params.jobId} />
      <Footer />
    </div>
  );
};

export default JobDescription;
