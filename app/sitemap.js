import { fetchAllReports, fetchCategories } from "@/utils/fetchFunctions";
export const revalidate = 60;
export default async function sitemap() {
  const BASE_URL = "https://marketresearchforecast.com";
  const catRes = await fetch("https://ama-admin.com/api/categories", {
    cache: "no-cache",
  });
  const catData = await catRes.json();

  let reports = [];

  const reportData = await fetchAllReports({
    query: {
      page: 1,
    },
  });

  if (reportData.totalCount > 20) {
    const pages = Math.ceil(reportData.totalCount / 20);
    await Promise.all(
      Array.from({ length: pages }, async (_, index) => {
        const reportData1 = await fetchAllReports({
          query: {
            page: index + 1,
          },
        });
        reports.push(...reportData1.data);
      })
    );
  } else {
    reports = reportData.data;
  }

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/contact`,
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
    ...reports.map((report) => {
      return {
        url: `${BASE_URL}/reports/${report.slug}`,
        lastModified: report.updatedAt,
        changeFrequency: "daily",
        priority: 1,
      };
    }),
  ];
}
