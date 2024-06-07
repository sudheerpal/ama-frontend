"use client";
import React, { useEffect, useState } from "react";
import SingleReportTab from "./components/SingleReportTab";
import SummaryTabContent from "./components/SummaryTabContent";
import TOC from "./components/TOC";
import SummaryTabHighlight from "./components/SummaryTabHighlight";
import MethodologyTabContent from "./components/MethodologyTabContent";
import { useParams, useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import TabNavigationButton from "./components/TabNavigationButton";
import CustomContainer from "../ui/CustomContainer";
import MRFImage from "../ui/Image";
import mainLogo from "@/assets/logo4.jpeg";
import axios from "axios";

const ReportTabs = ({ basic, marketAnalysis, marketReport, rd }) => {
  const router = useRouter();
  const params = useParams();

  const { ref: summaryTabRef, inView } = useInView();
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
      isNavbarDisplay: true,
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
      isNavbarDisplay: true,
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
      isNavbarDisplay: true,
      content: (
        <SummaryTabHighlight basic={basic} marketAnalysis={marketAnalysis} />
      ),
    },
    {
      id: 4,
      label: "Methodology",
      isNavbarDisplay: false,
      content: <MethodologyTabContent />,
    },
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
      {!inView && (
        <div
          className={`fixed top-0 duration-100 left-0 lg:-left-2 bg-white shadow-lg w-[100vw] py-3 z-20 ${
            !inView ? "block" : "hidden"
          }`}
        >
          <CustomContainer classNames="lg:flex gap-5 items-center">
            <div className="flex gap-5">
              <MRFImage
                classNames="max-w-28 lg:max-w-36 xl:max-w-40 md:pr-4 max-h-12"
                src={mainLogo}
                alt="Market Research Future Logo"
              />
              <h2 className="font-bold uppercase xl:text-lg text-primary">
                {basic?.title}
              </h2>
            </div>
            <div className="mt-2 tabs-xs tabs md:tabs-md md:tabs-boxed">
              {tabs
                ?.filter((tab) => tab.isNavbarDisplay)
                ?.map((tab) => (
                  <TabNavigationButton
                    key={tab?.id}
                    tab={tab}
                    activeTab={activeTab}
                    handleTabChange={handleTabChange}
                    isFloating
                  />
                ))}
            </div>
          </CustomContainer>
        </div>
      )}
      <hr
        ref={summaryTabRef}
        className="absolute w-full border-b-2 border-primary top-[18px] md:top-[30px] z-10"
      />
      <div
        role={`tablist ${basic?.id}`}
        className="overflow-x-auto md:p-0 tabs-xs tabs md:tabs-md md:tabs-boxed"
        style={{
          borderRadius: "2px",
        }}
      >
        {tabs.map((tab) => (
          <SingleReportTab
            key={tab.id}
            activeTab={activeTab}
            handleTabChange={handleTabChange}
            inView={inView}
            tab={tab}
          />
        ))}
      </div>
    </div>
  );
};

export default ReportTabs;
