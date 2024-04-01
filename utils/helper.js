export const getSubHeading = (variables) => {
  const subTitle = variables.segments.map((segment) => {
    const items = segment.split(":");
    if (items?.[1]?.length) {
      return `by ${items[0]} (${items[1]})`;
    } else {
      return `by ${items[0]}`;
    }
  });
  const regions = variables.regionData.map((region) => {
    const items = region.split(":");
    if (items?.[1]?.length) {
      return `by ${items[0]} (${items[1]})`;
    } else {
      return `by ${items[0]}`;
    }
  });

  return (
    variables.marketKeyword +
    " " +
    subTitle.join(", ") +
    regions.join(", ") +
    " Forecast " +
    new Date().getFullYear() +
    "-" +
    (new Date().getFullYear() + 7)
  );
};

// imports for the thumbnails and function for getting the thumbnail

import healthcareThumbnail from "@/assets/report/reportCategoryThumbnail/Healthcare.jpeg";
import chemicalsMaterialsThumbnail from "@/assets/report/reportCategoryThumbnail/Chemicals & Materials.jpeg";
import informationTechnologyThumbnail from "@/assets/report/reportCategoryThumbnail/Information & Technology.jpeg";
import machineryEquipmentThumbnail from "@/assets/report/reportCategoryThumbnail/Machinery & Equipment.jpeg";
import energyPowerThumbnail from "@/assets/report/reportCategoryThumbnail/Energy & Power.jpeg";
import aerospaceDefenseThumbnail from "@/assets/report/reportCategoryThumbnail/Aerospace & Defense.jpeg";
import automotiveTransportationThumbnail from "@/assets/report/reportCategoryThumbnail/Automotive & Transportation.jpeg";
import foodBeveragesThumbnail from "@/assets/report/reportCategoryThumbnail/Food & Beverages.jpeg";
import agricultureThumbnail from "@/assets/report/reportCategoryThumbnail/Agriculture.jpeg";
import consumerGoodsThumbnail from "@/assets/report/reportCategoryThumbnail/Consumer Goods.jpeg";
import semiconductorElectronicsThumbnail from "@/assets/report/reportCategoryThumbnail/Semiconductor & Electronics.jpeg";
import packagingThumbnail from "@/assets/report/reportCategoryThumbnail/Packaging.jpeg";
import covid19AnalysisThumbnail from "@/assets/report/reportCategoryThumbnail/COVID-19 Analysis.jpeg";

export const getCategoryThumbnail = (link) => {
  switch (link) {
    case "healthcare-industry":
      return {
        thumbnail: healthcareThumbnail,
      };
    case "chemicals-and-materials-industry":
      return {
        thumbnail: chemicalsMaterialsThumbnail,
      };
    case "information-and-technology-industry":
      return {
        thumbnail: informationTechnologyThumbnail,
      };
    case "machinery-and-equipment-industry":
      return {
        thumbnail: machineryEquipmentThumbnail,
      };
    case "energy-and-power-industry":
      return {
        thumbnail: energyPowerThumbnail,
      };
    case "aerospace-and-defense-industry":
      return {
        thumbnail: aerospaceDefenseThumbnail,
      };
    case "automotive-and-transportation-industry":
      return {
        thumbnail: automotiveTransportationThumbnail,
      };
    case "food-and-beverages-industry":
      return {
        thumbnail: foodBeveragesThumbnail,
      };
    case "agriculture-industry":
      return {
        thumbnail: agricultureThumbnail,
      };
    case "consumer-goods-industry":
      return {
        thumbnail: consumerGoodsThumbnail,
      };
    case "semiconductor-and-electronics-industry":
      return {
        thumbnail: semiconductorElectronicsThumbnail,
      };
    case "packaging-industry":
      return {
        thumbnail: packagingThumbnail,
      };
    case "covid-19-analysis-industry":
      return {
        thumbnail: covid19AnalysisThumbnail,
      };
    default:
      return {
        thumbnail: null,
      }; // Default case, handle as needed
  }
};
