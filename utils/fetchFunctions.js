export const fetchIndustriesHome = async () => {
  const res = await fetch("https://ama-admin.com/api/categories?home=true");
  const { data } = await res.json();
  return data;
};

export const fetchTestimonials = async () => {
  const res = await fetch("https://ama-admin.com/api/testimonial");
  const { data } = await res.json();
  return data;
};
