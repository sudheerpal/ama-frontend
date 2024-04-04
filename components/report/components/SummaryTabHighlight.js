import React from "react";
import { Search } from "react-feather";

const SummaryTabHighlight = ({ basic, marketAnalysis }) => {
  return (
    <main>
      <div className="overflow-x-auto">
        <table className="table  table-zebra">
          {/* head */}
          <thead className="text-base text-white bg-primary">
            <tr>
              <th className="">Aspects</th>
              <th className="">Details</th>
            </tr>
          </thead>
          <tbody className="bg-gray-200">
            <tr>
              <td className="pl-3">Study Period </td>
              <td>
                {new Date().getFullYear() - 6}-{new Date().getFullYear() + 7}
              </td>
            </tr>
            <tr>
              <td className="pl-3">Base Year </td>
              <td>{new Date().getFullYear() - 1}</td>
            </tr>
            <tr>
              <td className="pl-3">Estimated Year </td>
              <td>{new Date().getFullYear()}</td>
            </tr>
            <tr>
              <td className="pl-3">Forecast Period</td>
              <td>
                {new Date().getFullYear()}-{new Date().getFullYear() + 7}
              </td>
            </tr>
            <tr>
              <td className="pl-3">Historical Period</td>
              <td>
                {new Date().getFullYear() - 6}-{new Date().getFullYear() - 1}
              </td>
            </tr>
            <tr>
              <td className="pl-3">Growth Rate</td>
              <td>
                CAGR of {basic.marketData.cagr}% from{" "}
                {new Date().getFullYear() - 6}-{new Date().getFullYear() + 7}
              </td>
            </tr>
            <tr>
              <td className="pl-3">Segmentation</td>
              <td>
                <ul className="list-disc">
                  {marketAnalysis.segments.map((segment, index) => {
                    const segments = segment.split(":");
                    if (segments.length > 1) {
                      const parent = segments[0];
                      const child = segments[1].split(",");
                      const compositeKey = parent + "_" + child.join("_"); // Creating a composite key
                      return (
                        <React.Fragment key={compositeKey}>
                          <li className="font-semibold mt-3">By {parent}</li>
                          <li className="ml-2 mt-1">
                            <ul className="list-disc">
                              {child.map((item, itemIndex) => {
                                return (
                                  <li key={compositeKey + "_" + itemIndex}>
                                    {item}
                                  </li>
                                );
                              })}
                            </ul>
                          </li>
                        </React.Fragment>
                      );
                    }
                    return <li key={index}>By {segment}</li>;
                  })}
                </ul>
                <ul className="list-disc font-semibold mt-3 mb-2">
                  <li>By Geography</li>
                </ul>
                <ul className=" ml-3 list-disc">
                  {marketAnalysis?.regionData?.length > 0 && (
                    <>
                      {marketAnalysis.regionData.map((segment, index) => {
                        const regions = segment.split(":");
                        if (regions.length > 1) {
                          const parent = regions[0];
                          const child = regions[1].split(",");
                          const compositeKey = parent + "_" + child.join("_"); // Creating a composite key
                          return (
                            <React.Fragment key={compositeKey}>
                              <li className="">{parent}</li>
                              <li className="ml-3 mb-1">
                                <ul className="list-disc">
                                  {child.map((item, itemIndex) => {
                                    return (
                                      <li key={compositeKey + "_" + itemIndex}>
                                        {item}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </li>
                            </React.Fragment>
                          );
                        }
                        return <li key={index}>By {segment}</li>;
                      })}
                    </>
                  )}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default SummaryTabHighlight;
