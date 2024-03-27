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
