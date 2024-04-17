import { fetchAllReports, fetchCategories } from "@/utils/fetchFunctions";

export default async function sitemap() {
  const BASE_URL = "https://marketresearchforecast.com";
  const catRes = await fetch("https://ama-admin.com/api/categories", {
    cache: "no-cache",
  });
  const catData = await catRes.json();

  const reportData = await fetchAllReports({
    query: {
      page: 1,
    },
  });

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...catData.data.map((cat) => {
      return {
        url: `${BASE_URL}/industries/${cat.link}`,
        lastModified: cat.createdAt,
        changeFrequency: "monthly",
        priority: 0.8,
      };
    }),
    ...reportData.data.map((report) => {
      return {
        url: `${BASE_URL}/reports/${report.slug}`,
        lastModified: report.updatedAt,
        changeFrequency: "daily",
        priority: 1,
      };
    }),
  ];
}
