export const fetchIndustriesHome = async () => {
  try {
    const res = await fetch("https://ama-admin.com/api/categories?home=true");
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching industries:", error);
    return [];
  }
};

export const fetchTestimonials = async () => {
  try {
    const res = await fetch("https://ama-admin.com/api/testimonial");
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};

export const fetchSponsorLogos = async () => {
  try {
    const res = await fetch("https://ama-admin.com/api/client-logo");
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching sponsor logos:", error);
    return [];
  }
};

export const fetchParentCategories = async () => {
  try {
    const res = await fetch("https://ama-admin.com/api/categories?parent=true");
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchCategories = async () => {
  try {
    const res = await fetch("https://ama-admin.com/api/categories");
    const { data } = await res.json();
    const parentCategories = data?.filter((ct) => ct.parent === null) || [];
    const subCategories = data?.filter((ct) => ct.parent !== null) || [];
    return { parentCategories, subCategories };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const fetchReports = async ({ query }) => {
  const [category, page] = query.split("=");

  try {
    // const res = await fetch(
    //   `https://ama-admin.com/api/reports?active=true&link=${category}&page=${page}`
    // );
    const res = await fetch("https://ama-admin.com/api/reports");
    const data = await res.json();
    return { ...data, category };
  } catch (error) {
    console.error("Error fetching reports:", error);
    return [];
  }
};
