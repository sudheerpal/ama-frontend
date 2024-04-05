import React from "react";

const SingleReportTab = ({ tab, activeTab, handleTabChange }) => {
  return (
    <>
      <input
        type="radio"
        name="rd-tabs"
        role="tab"
        className={`mr-1 md:mx-4 tab border border-primary text-nowrap ${
          activeTab === tab.id ? "bg-primary text-white" : "text-primary"
        }`}
        id={tab.id}
        aria-label={tab.label}
        checked={activeTab === tab.id}
        onChange={() => handleTabChange(tab.id)}
        style={{
          color: activeTab === tab.id && "white",
          borderRadius: "4px 4px 0 0",
        }}
      />
      {activeTab === tab.id && (
        <div role="tabpanel" className="py-4 tab-content">
          {tab.content}
        </div>
      )}
    </>
  );
};

export default SingleReportTab;
