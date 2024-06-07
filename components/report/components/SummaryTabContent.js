/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SummaryTabFAQ from "./SummaryTabFAQ";
import SummaryTabHighlight from "./SummaryTabHighlight";

const SummaryTabContent = ({ basic, marketAnalysis, rd, marketReport }) => {
  let chartData = {};
  try {
    chartData = JSON.parse(rd.chart);
  } catch (error) {
    // console.error(error)
  }

  return (
    <div className="mb-5">
      <section id="rd_table">
        <header className="my-4">
          <h3 className="text-xl font-bold uppercase border-b-4 text-primary border-secondary w-fit">
            {basic.marketKeyword} REPORT HIGHLIGHTS
          </h3>
        </header>
        <SummaryTabHighlight basic={basic} marketAnalysis={marketAnalysis} />
      </section>
      <section>
        <SummaryTabFAQ
          report={basic}
          marketAnalysis={marketAnalysis}
          marketReport={marketReport}
        />
      </section>
    </div>
  );
};

export default SummaryTabContent;
