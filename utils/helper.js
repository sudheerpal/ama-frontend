export const getSubHeading = (variables) => {
  const formatSegment = (segment) => {
    const items = segment.split(":").map((item) => item.trim());
    return items.length > 1 ? `by ${items[0]} (${items[1]})` : `by ${items[0]}`;
  };

  const subTitle = variables.segments.map(formatSegment).join(", ");
  const regions = variables.regionData.map(formatSegment).join(", ");

  const result = `${
    variables.marketKeyword
  } ${subTitle}, ${regions} Forecast ${new Date().getFullYear()}-${
    new Date().getFullYear() + 8
  }`;

  // This will replace any spaces before a comma and ensure exactly one space after the comma.
  return result.replace(/\s*,\s*/g, ", ");
};
