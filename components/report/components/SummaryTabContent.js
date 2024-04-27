"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState, useEffect } from "react";
import barChart from "@/assets/report/barChart.png";
import roundChart from "@/assets/report/roundChart.png";
import Image from "next/image";
import SummaryTabFAQ from "./SummaryTabFAQ";
import SummaryTabHighlight from "./SummaryTabHighlight";
import RegionData from "./RegionData";

const SummaryTabContent = ({ basic, marketAnalysis, rd, marketReport }) => {
  const [Chart, setChart] = useState(null);
  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  const growthChart = useRef(null);
  const sizeChart = useRef(null);
  const regionalChart = useRef(null);
  const rdContent = useRef(null);
  const growthRef = useRef(null);
  const sizeRef = useRef(null);
  const regionRef = useRef(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let chartData = {};
  try {
    chartData = JSON.parse(rd.chart);
  } catch (error) {
    // console.error(error)
  }
  // let newData = {};
  // if (chartData && chartData.regional_market_share) {
  //   if (typeof Object.values(chartData.regional_market_share)[0] === "object") {
  //     for (const key in chartData.regional_market_share) {
  //       const firstYearValue = chartData.regional_market_share[key]["2023"];
  //       newData[key] = firstYearValue;
  //     }
  //   } else newData = chartData.regional_market_share;
  // }

  useEffect(() => {
    if (rdContent.current && growthRef.current) {
      try {
        const h3Elements = Array.from(rdContent.current.querySelectorAll("h3"));
        h3Elements.forEach((h3) => {
          if (h3.textContent.includes("Growth Catalysts")) {
            h3.parentNode.insertBefore(growthRef.current, h3.nextSibling);
          }
        });
      } catch (error) {
        console.error("error", error);
      }
    }
    if (rdContent.current && sizeRef.current) {
      try {
        const h3Elements = Array.from(rdContent.current.querySelectorAll("h3"));
        h3Elements.forEach((h3) => {
          if (h3.textContent.includes("Driving Forces")) {
            h3.parentNode.insertBefore(sizeRef.current, h3.nextSibling);
          }
        });
      } catch (error) {
        console.error("error", error);
      }
    }
    if (rdContent.current && regionRef.current) {
      try {
        const h3Elements = Array.from(rdContent.current.querySelectorAll("h3"));
        h3Elements.forEach((h3) => {
          if (h3.textContent.includes("Regional Insight")) {
            h3.parentNode.insertBefore(regionRef.current, h3.nextSibling);
          }
        });
      } catch (error) {
        console.error("error", error);
      }
    }
  }, [rdContent, growthRef, chartData]);

  return (
    <div className="mb-5">
      <section className="max-w-full prose">
        <div
          ref={rdContent}
          id="rd_content"
          dangerouslySetInnerHTML={{ __html: rd?.rd || "" }}
        ></div>
        {chartData?.regional_market_share && (
          <RegionData regions={chartData?.regional_market_share || {}} />
        )}
      </section>
      {Chart && chartData && chartData.market_growth && (
        <div
          className="relative py-4 mx-auto my-3 border shadow-lg md:px-12 w-fit"
          ref={growthRef}
          id="chart_content"
        >
          <div className="font-semibold text-center text-neutral">
            {basic.marketKeyword} Market Growth (%)
          </div>
          <div className="flex justify-center">
            <Chart
              options={{
                chart: {
                  id: "basic-bar",
                  toolbar: {
                    show: false,
                  },
                },
                responsive: [
                  {
                    breakpoint: 600,
                    options: {
                      chart: {
                        width: 400,
                      },
                      legend: {
                        position: "bottom",
                      },
                    },
                  },
                ],
                xaxis: {
                  categories: Object.keys(chartData.market_growth),
                },
              }}
              series={[
                {
                  name: "Market Growth",
                  data: Object.values(chartData.market_growth),
                },
              ]}
              type="bar"
              width={600}
            />
          </div>
          <div className="text-center">www.marketresearchforecast.com</div>
        </div>
      )}
      {Chart && chartData && chartData.market_size && (
        <div
          className="relative py-4 mx-auto my-3 border shadow-lg md:px-12 w-fit"
          ref={sizeRef}
          id="chart_content"
        >
          <div className="font-semibold text-center text-neutral">
            {basic.marketKeyword} Market Size (
            {basic?.marketData?.valueUnit || "USD Million"})
          </div>
          <div className="flex justify-center">
            <Chart
              options={{
                chart: {
                  id: "basic-bar",
                  toolbar: {
                    show: false,
                  },
                },
                responsive: [
                  {
                    breakpoint: 600,
                    options: {
                      chart: {
                        width: 400,
                      },
                      legend: {
                        position: "bottom",
                      },
                    },
                  },
                ],
                xaxis: {
                  categories: Object.keys(chartData.market_size),
                },
              }}
              series={[
                {
                  name: "Market Size",
                  data: Object.values(chartData.market_size),
                },
              ]}
              type="bar"
              width={600}
            />
          </div>
          <div className="text-center">www.marketresearchforecast.com</div>
        </div>
      )}

      {Chart && chartData && chartData.regional_market_share && (
        <div
          className="relative py-4 mx-auto my-3 border shadow-lg md:px-12 w-fit"
          ref={regionRef}
          id="chart_content"
        >
          <div className="font-semibold text-center text-neutral">
            {basic.marketKeyword} Regional Market Share
          </div>
          <div className="flex justify-center">
            <Chart
              options={{
                chart: {
                  width: 380,
                  type: "pie",
                },
                labels: Object.keys(chartData.regional_market_share),
                responsive: [
                  {
                    breakpoint: 600,
                    options: {
                      chart: {
                        width: 400,
                      },
                      legend: {
                        position: "bottom",
                      },
                    },
                  },
                ],
              }}
              series={Object.values(chartData.regional_market_share)}
              type="pie"
              width={600}
            />
          </div>
          <div className="text-center">www.marketresearchforecast.com</div>
        </div>
      )}
      <section>
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
