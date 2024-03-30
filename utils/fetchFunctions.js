export const fetchIndustriesHome = async () => {
  try {
    const res = await fetch("https://ama-admin.com/api/categories?home=true", {
      cache: "no-cache",
    });
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching industries:", error);
    return [];
  }
};

export const fetchTestimonials = async () => {
  try {
    const res = await fetch("https://ama-admin.com/api/testimonial", {
      cache: "no-cache",
    });
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};

export const fetchSponsorLogos = async () => {
  try {
    const res = await fetch("https://ama-admin.com/api/client-logo", {
      cache: "no-cache",
    });
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching sponsor logos:", error);
    return [];
  }
};

export const fetchRecentReports = async () => {
  try {
    const res = await fetch(
      "https://ama-admin.com/api/reports/recent?limit=4",
      {
        cache: "no-cache",
      }
    );
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching sponsor logos:", error);
    return [];
  }
};

export const fetchParentCategories = async () => {
  try {
    const res = await fetch(
      "https://ama-admin.com/api/categories?parent=true",
      { cache: "no-cache" }
    );
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchCategories = async () => {
  try {
    const res = await fetch("https://ama-admin.com/api/categories", {
      cache: "no-cache",
    });
    const { data } = await res.json();
    const parentCategories = data?.filter((ct) => ct.parent === null) || [];
    const subCategories = data?.filter((ct) => ct.parent !== null) || [];
    return { parentCategories, subCategories };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchAllReports = async ({ query }) => {
  const currentPage = query.page || "1";

  try {
    const res = await fetch(
      `https://ama-admin.com/api/reports?page=${currentPage}`,
      {
        cache: "no-cache",
      }
    );
    const data = await res.json();
    return { ...data };
  } catch (error) {
    console.error("Error fetching reports:", error);
    return [];
  }
};
export const fetchReports = async (payload) => {
  const category = payload.categorySlug;
  const currentPage = payload.searchParams.page || "1";

  try {
    const res = await fetch(
      `https://ama-admin.com/api/reports?active=true&link=${category}&page=${currentPage}`,
      { cache: "no-cache" }
    );
    const data = await res.json();
    return { ...data, category };
  } catch (error) {
    console.error("Error fetching reports:", error);
    return [];
  }
};

export const sugesstionFetch = async (payload) => {
  try {
    const res = await fetch(`https://ama-admin.com/api/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};

export const fetchCategory = async (query) => {
  try {
    const res = await fetch(
      `https://ama-admin.com/api/categories?slug=${query}`,
      {
        cache: "no-cache",
      }
    );
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
