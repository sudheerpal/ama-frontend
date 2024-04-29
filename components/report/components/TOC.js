"use client";
import React, { useState } from "react";
import { Minimize, Plus } from "react-feather";

export default function TOC({ marketAnalysis, marketReport, report }) {
  const dynamics = ["Drivers", "Restrains", "Trends"];
  const [activeTab, setActiveTab] = useState("toc");
  //   const { marketAnalysis, marketReport, report } = reportData;
  const tableData = [
    {
      title: "Introduction",
      data: [
        "Research Scope",
        "Market Segmentation",
        "Research Methodology",
        "Definitions and Assumptions",
      ],
    },
    {
      title: "Executive Summary",
      data: ["Introduction"],
    },
    {
      title: "Market Dynamics",
      data: [
        "Introduction",
        ...dynamics.map(
          (data) => `Market ${data}: ${marketReport[data.toLowerCase()]}`
        ),
      ],
    },
    {
      title: "Market Factor Analysis",
      data: [
        "Porters Five Forces",
        "Supply/Value Chain",
        "PESTEL analysis",
        "Market Entropy",
        "Patent/Trademark Analysis",
      ],
    },
    {
      title: `Global ${report.marketKeyword} Analysis, Insights and Forecast, ${
        new Date().getFullYear() - 6
      }-${new Date().getFullYear() + 6}`,
      data: [
        ...marketAnalysis.segments.map((data) => {
          const array = data.split(":");
          console.log("segments", array);
          return `Market Analysis, Insights and Forecast - By ${array[0]} : ${array[1]}`;
        }),
        `Market Analysis, Insights and Forecast - By Region : ${marketAnalysis.regionData
          .map((data) => {
            const array = data.split(":");
            console.log("region", array);
            return array[0].trim();
          })
          .toString()}`,
      ],
    },
    ...marketAnalysis.regionData.map((data) => {
      const array = data.split(":");

      return {
        title: `${array[0].trim()} ${
          report.marketKeyword
        } Analysis, Insights and Forecast, ${new Date().getFullYear() - 6}-${
          new Date().getFullYear() + 6
        }`,
        data: [
          ...marketAnalysis.segments.map((data) => {
            const nestedArray = data.split(":");
            return `Market Analysis, Insights and Forecast - By ${nestedArray[0]} : ${nestedArray[1]}`;
          }),
          `Market Analysis, Insights and Forecast - By Country/Sub-region : ${array[1]}`,
        ],
      };
    }),
    {
      title: "Competitive Analysis",
      data: [
        `Global Market Share Analysis ${new Date().getFullYear() - 1}`,
        `Company Profiles: ${marketAnalysis.companies
          .map((data) => {
            return `${data.replace(",", "")}`;
            // + Overview, Products, SWOT Analysis, Recent Developments, Financial (Based on Availability)
          })
          .toString()}`,
      ],
    },
  ];
  let figureData = [];
  if (report?.region?.toLowerCase()?.trim() === "global") {
    let segments = [...marketAnalysis.segments, "Region"];
    figureData = [
      `Global ${report.marketKeyword} Revenue Breakdown (${
        report.marketData.valueUnit
      }, %) by Region ${new Date().getFullYear() - 1} & ${
        new Date().getFullYear() + 7
      }`,
      report.marketData.volumeUnit
        ? `Global ${report.marketKeyword} Volume Breakdown (${
            report.marketData.volumeUnit
          }, %) by Region ${new Date().getFullYear() - 1} & ${
            new Date().getFullYear() + 7
          }`
        : null,

      ...segments.flatMap((data) => {
        let subData = data.split(":")[1];
        let output = [
          `Global ${report.marketKeyword} Revenue (${
            report.marketData.valueUnit
          }), by ${data.split(":")[0]} ${new Date().getFullYear() - 1} & ${
            new Date().getFullYear() + 7
          }`,
          report.marketData.volumeUnit
            ? `Global ${report.marketKeyword} Volume (${
                report.marketData.volumeUnit
              }), by ${data.split(":")[0]} ${new Date().getFullYear() - 1} & ${
                new Date().getFullYear() + 7
              }`
            : null,
          `Global ${report.marketKeyword} Revenue Share (%), by ${
            data.split(":")[0]
          } ${new Date().getFullYear() - 1} & ${new Date().getFullYear() + 7}`,
          report.marketData.volumeUnit
            ? `Global ${report.marketKeyword} Volume Share (%), by ${
                data.split(":")[0]
              } ${new Date().getFullYear() - 1} & ${
                new Date().getFullYear() + 7
              }`
            : null,
        ];
        if (subData) {
          const flatMap = subData.split(",").flatMap((newData) => {
            return [
              `Global ${report.marketKeyword} Forecast (${
                report.marketData.valueUnit
              }), by ${newData} ${new Date().getFullYear() - 4} & ${
                new Date().getFullYear() + 7
              }`,
              report.marketData.volumeUnit
                ? `Global ${report.marketKeyword} Forecast (${
                    report.marketData.volumeUnit
                  }), by ${newData} ${new Date().getFullYear() - 4} & ${
                    new Date().getFullYear() + 7
                  }`
                : null,
            ];
          });
          output = [...output, ...flatMap];
        } else {
          output = [
            `Global ${report.marketKeyword} Revenue (${
              report.marketData.valueUnit
            }), by ${data.split(":")[0]} ${new Date().getFullYear() - 1} & ${
              new Date().getFullYear() + 7
            }`,
            report.marketData.volumeUnit
              ? `Global ${report.marketKeyword} Volume (${
                  report.marketData.volumeUnit
                }), by ${data.split(":")[0]} ${
                  new Date().getFullYear() - 1
                } & ${new Date().getFullYear() + 7}`
              : null,
            `Global ${report.marketKeyword} Revenue Share (%), by ${
              data.split(":")[0]
            } ${new Date().getFullYear() - 1} & ${
              new Date().getFullYear() + 7
            }`,
            report.marketData.volumeUnit
              ? `Global ${report.marketKeyword} Volume Share (%), by ${
                  data.split(":")[0]
                } ${new Date().getFullYear() - 1} & ${
                  new Date().getFullYear() + 7
                }`
              : null,
          ];
        }
        return output;
      }),
      ...marketAnalysis.regionData.flatMap((data) => {
        const region = data.split(":")[0];
        const segments = [...marketAnalysis.segments, "Country"];
        const newData = segments.flatMap((segment) => {
          return [
            `${region} ${report.marketKeyword} Revenue (${
              report.marketData.valueUnit
            }), by ${segment.split(":")[0]} ${new Date().getFullYear() - 1} & ${
              new Date().getFullYear() + 7
            }`,
            report.marketData.volumeUnit
              ? `${region} ${report.marketKeyword} Volume (${
                  report.marketData.volumeUnit
                }), by ${segment.split(":")[0]} ${
                  new Date().getFullYear() - 1
                } & ${new Date().getFullYear() + 7}`
              : null,
            `${region} ${report.marketKeyword} Revenue Share (%), by ${
              segment.split(":")[0]
            } ${new Date().getFullYear() - 1} & ${
              new Date().getFullYear() + 7
            }`,
            report.marketData.volumeUnit
              ? `${region} ${report.marketKeyword} Volume Share (%), by ${
                  segment.split(":")[0]
                } ${new Date().getFullYear() - 1} & ${
                  new Date().getFullYear() + 7
                }`
              : null,
          ];
        });
        return newData;
      }),
    ].filter((item) => item !== null);
  } else {
    figureData = [
      `${report.marketKeyword} Revenue Breakdown (${
        report.marketData.valueUnit
      }, %) by Product ${new Date().getFullYear() - 1} & ${
        new Date().getFullYear() + 7
      }`,
      ...marketAnalysis.segments.map(
        (data) =>
          `${report.marketKeyword} Value Share (%), by ${data.split(":")[0]} ${
            new Date().getFullYear() - 1
          } & ${new Date().getFullYear() + 7}`
      ),
      `${report.marketKeyword} Share (%) by Company ${
        new Date().getFullYear() - 1
      }`,
    ];
  }

  const LITData = [
    ...[...marketAnalysis.segments, "Region"].flatMap((segment) => {
      return [
        `Global ${report.marketKeyword} Revenue ${
          report.marketData.valueUnit
        } Forecast, by ${segment.split(":")[0]} ${
          new Date().getFullYear() - 6
        } & ${new Date().getFullYear() + 7}`,
        report.marketData.volumeUnit
          ? `Global ${report.marketKeyword} Volume ${
              report.marketData.volumeUnit
            } Forecast, by ${segment.split(":")[0]} ${
              new Date().getFullYear() - 6
            } & ${new Date().getFullYear() + 7}`
          : null,
      ];
    }),
    ...marketAnalysis.regionData.flatMap((data) => {
      const region = data.split(":")[0];
      const segments = [...marketAnalysis.segments, "Country"];
      const newData = segments.flatMap((segment) => {
        return [
          `${region} ${report.marketKeyword} Revenue ${
            report.marketData.valueUnit
          } Forecast, by ${segment.split(":")[0]} ${
            new Date().getFullYear() - 6
          } & ${new Date().getFullYear() + 7}`,
          report.marketData.volumeUnit
            ? `${region} ${report.marketKeyword} Volume ${
                report.marketData.volumeUnit
              } Forecast, by ${segment.split(":")[0]} ${
                new Date().getFullYear() - 6
              } & ${new Date().getFullYear() + 7}`
            : null,
        ];
      });
      let countriesData = [];
      if (data.split(":")[1]) {
        countriesData = data
          .split(":")[1]
          .split(",")
          .flatMap((newData) => {
            return [
              `${newData} ${report.marketKeyword} Revenue (${
                report.marketData.valueUnit
              }) Forecast, by Application ${new Date().getFullYear() - 6} & ${
                new Date().getFullYear() + 7
              }`,
              report.marketData.volumeUnit
                ? `${newData} ${report.marketKeyword} Volume (${
                    report.marketData.volumeUnit
                  }) Forecast, by Application ${
                    new Date().getFullYear() - 6
                  } & ${new Date().getFullYear() + 7}`
                : null,
            ];
          });
      }
      return [...newData, ...countriesData];
    }),
  ].filter((item) => item !== null);

  return (
    <div>
      <div className="collapse mb-2 shadow-sm relative rounded-sm bg-base-200">
        <button
          onClick={() => {
            activeTab === "toc" ? setActiveTab("") : setActiveTab("toc");
          }}
          className="absolute btn btn-circle btn-sm z-20 right-3 top-3"
        >
          {activeTab === "toc" ? (
            <Minimize className="h-5" />
          ) : (
            <Plus className="h-5" />
          )}{" "}
        </button>
        <input type="radio" onChange={() => {}} checked={activeTab === "toc"} />
        <div className="collapse-title  text-xl font-medium">
          Table Of Content
        </div>
        <div className="collapse-content">
          <ol>
            {tableData.map((data, index) => (
              <li className="mb-3" key={index}>
                <span className="font-semibold">
                  {index + 1}. {data.title}
                </span>
                <ul>
                  {data.data.map((nestedData, nestedIndex) => (
                    <li className="ml-5" key={nestedIndex}>
                      {nestedData.split(":").length > 1 ? (
                        <div>
                          <ul>
                            <li>
                              {index + 1}.{nestedIndex + 1}.{" "}
                              {nestedData.split(":")[0]}
                            </li>
                            <li className="ml-5">
                              <ul>
                                {nestedData.split(":")[1].split(",").length >
                                1 ? (
                                  nestedData
                                    .split(":")[1]
                                    .split(",")
                                    .map((lastData, lastIndex) => (
                                      <li key={lastIndex}>
                                        {" "}
                                        {index + 1}.{nestedIndex + 1}.
                                        {lastIndex + 1} {lastData}
                                        {nestedData.split(":")[0] ===
                                          "Company Profiles" && (
                                          <ul>
                                            {[
                                              "Overview",
                                              "Products",
                                              "SWOT Analysis",
                                              "Recent Developments",
                                              "Financials (Based on Availability)",
                                            ].map((cProfile, cIndex) => (
                                              <li className="ml-5" key={cIndex}>
                                                {" "}
                                                {index + 1}.{nestedIndex + 1}.
                                                {lastIndex + 1}.{cIndex + 1}.{" "}
                                                {cProfile}{" "}
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                      </li>
                                    ))
                                ) : (
                                  <li>
                                    {nestedData.split(":")[1].length > 1 && (
                                      <>
                                        {index + 1}.{nestedIndex + 1}.1.{" "}
                                        {nestedData.split(":")[1]}
                                      </>
                                    )}
                                  </li>
                                )}
                              </ul>
                            </li>
                          </ul>
                        </div>
                      ) : (
                        <div>
                          {index + 1}.{nestedIndex + 1}. {nestedData}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="collapse mb-2 shadow-sm rounded-sm  bg-base-200">
        <button
          onClick={() => {
            activeTab === "lif" ? setActiveTab("") : setActiveTab("lif");
          }}
          className="absolute btn btn-circle btn-sm z-20 right-3 top-3"
        >
          {" "}
          {activeTab === "lif" ? (
            <Minimize className="h-5" />
          ) : (
            <Plus className="h-5" />
          )}{" "}
        </button>
        <input type="radio" onChange={() => {}} checked={activeTab === "lif"} />
        <div className="collapse-title text-xl font-medium">
          List of Figures
        </div>
        <div className="collapse-content">
          <ol>
            {figureData.map((data, index) => (
              <li className="mb-1" key={index + 1}>
                {" "}
                Figure {index + 1}: {data}{" "}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="collapse mb-2 shadow-sm rounded-sm  bg-base-200">
        <button
          onClick={() => {
            activeTab === "lit" ? setActiveTab("") : setActiveTab("lit");
          }}
          className="absolute btn btn-circle btn-sm z-20 right-3 top-3"
        >
          {" "}
          {activeTab === "lit" ? (
            <Minimize className="h-5" />
          ) : (
            <Plus className="h-5" />
          )}{" "}
        </button>
        <input type="radio" onChange={() => {}} checked={activeTab === "lit"} />
        <div className="collapse-title text-xl font-medium">List of Tables</div>
        <div className="collapse-content">
          <ol>
            {LITData.map((data, index) => (
              <li className="mb-1" key={index}>
                {" "}
                Table {index + 1}: {data}{" "}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
