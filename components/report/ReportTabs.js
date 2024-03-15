"use client";
import React, { useState } from "react";

const ReportTabs = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(1);

  // Function to handle tab change
  const handleTabChange = (tabNumber) => {
    console.log("tab changed");
    setActiveTab(tabNumber);
  };

  return (
    <div role="tablist" className="tabs tabs-bordered">
      <input
        type="radio"
        name="rd-tabs"
        role="tab"
        className="tab"
        id="tab1"
        aria-label="Tab 1"
        checked={activeTab === 1}
        onChange={() => handleTabChange(1)}
      />

      <div role="tabpanel" className="p-10 tab-content">
        Tab content 1
      </div>

      <input
        type="radio"
        name="rd-tabs"
        role="tab"
        className="tab"
        id="tab2"
        aria-label="Tab 2"
        checked={activeTab === 2}
        onChange={() => handleTabChange(2)}
      />

      <div role="tabpanel" className="p-10 tab-content">
        Tab content 2
      </div>

      <input
        type="radio"
        name="rd-tabs"
        role="tab"
        className="tab"
        id="tab3"
        aria-label="Tab 3"
        checked={activeTab === 3}
        onChange={() => handleTabChange(3)}
      />

      <div role="tabpanel" className="p-10 tab-content">
        Tab content 3
      </div>

      <input
        type="radio"
        name="rd-tabs"
        role="tab"
        className="tab"
        id="tab4"
        aria-label="Tab 4"
        checked={activeTab === 4}
        onChange={() => handleTabChange(4)}
      />

      <div role="tabpanel" className="p-10 tab-content">
        Tab content 4
      </div>
    </div>
  );
};

export default ReportTabs;
