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
