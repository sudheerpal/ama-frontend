import React from "react";

const SingleReportTab = () => {
  return (
    <>
      <input
        type="radio"
        name="rd-tabs"
        role="tab"
        className={`mx-4 tab rounded-t ${
          activeTab === 1 ? "bg-primary text-white" : "text-primary"
        }`}
        id="tab1"
        aria-label="Summary"
        checked={activeTab === 1}
        onChange={() => handleTabChange(1)}
      />

      <div role="tabpanel" className="p-10 tab-content">
        Tab content 1
      </div>
    </>
  );
};

export default SingleReportTab;
