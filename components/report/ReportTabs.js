"use client";
import React, { useState } from "react";
import SingleReportTab from "./components/SingleReportTab";
import SummaryTabContent from "./components/SummaryTabContent";
import TOC from "./components/TOC";
import SummaryTabHighlight from "./components/SummaryTabHighlight";

const ReportTabs = ({ basic, marketAnalysis, marketReport, rd }) => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(1);

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
      label: "Table of Content",
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
    { id: 4, label: "Methodology", content: "Tab content 4" },
  ];

  return (
    <div className="relative">
      <hr className="absolute w-full border-b-2 border-primary top-[34px] z-10" />
      <div role="tablist" className="overflow-x-auto tabs tabs-boxed">
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
