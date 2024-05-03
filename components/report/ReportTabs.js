"use client";
import React, { useEffect, useState } from "react";
import SingleReportTab from "./components/SingleReportTab";
import SummaryTabContent from "./components/SummaryTabContent";
import TOC from "./components/TOC";
import SummaryTabHighlight from "./components/SummaryTabHighlight";
import MethodologyTabContent from "./components/MethodologyTabContent";
import { useParams, useRouter } from "next/navigation";

const ReportTabs = ({ basic, marketAnalysis, marketReport, rd }) => {
  const router = useRouter();
  const params = useParams();

  // State to track the active tab
  const [activeTab, setActiveTab] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Function to handle tab change
  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  // Tab items and content
  const tabs = [
    {
      id: 1,
      label: "Summary",
      content: (
        <SummaryTabContent
          basic={basic}
          marketAnalysis={marketAnalysis}
          marketReport={marketReport}
          rd={rd}
        />
      ),
    },
    {
      id: 2,
      label: isMobile ? "TOC" : "Table of Content",
      content: (
        <TOC
          marketAnalysis={marketAnalysis}
          marketReport={marketReport}
          report={basic}
        />
      ),
    },
    {
      id: 3,
      label: "Segmentation",
      content: (
        <SummaryTabHighlight basic={basic} marketAnalysis={marketAnalysis} />
      ),
    },
    { id: 4, label: "Methodology", content: <MethodologyTabContent /> },
  ];

  useEffect(() => {
    // Check if the device width is below a certain threshold to determine mobile
    const isMobileDevice = window.innerWidth < 768;
    setIsMobile(isMobileDevice);

    if (params.slug !== basic.slug) {
      router.replace(`/reports/${basic.slug}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative">
      <hr className="absolute w-full border-b-2 border-primary top-[18px] md:top-[34px] z-10" />
      <div
        role={`tablist ${basic?.id}`}
        className="overflow-x-auto tabs-xs tabs md:tabs-md md:tabs-boxed"
        style={{
          borderRadius: "2px",
        }}
      >
        {tabs.map((tab) => (
          <SingleReportTab
            key={tab.id}
            activeTab={activeTab}
            handleTabChange={handleTabChange}
            tab={tab}
          />
        ))}
      </div>
    </div>
  );
};

export default ReportTabs;
