import React from "react";

const SingleReportTab = ({ tab, activeTab, handleTabChange }) => {
  return (
    <>
      <input
        type="radio"
        name="rd-tabs"
        role="tab"
        className={`md:mx-4 tab border border-primary ${
          activeTab === tab.id
            ? "bg-primary text-white border-primary"
            : "text-primary"
        }`}
        id={tab.id}
        aria-label={tab.label}
        checked={activeTab === tab.id}
        onChange={() => handleTabChange(tab.id)}
      />
      {activeTab === tab.id && (
        <div role="tabpanel" className="p-10 tab-content">
          {tab.content}
        </div>
      )}
    </>
  );
};

export default SingleReportTab;
