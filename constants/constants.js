import Picture1 from "@/assets/icons/Picture1.png";
import Picture2 from "@/assets/icons/Picture2.png";
import Picture3 from "@/assets/icons/Picture3.png";
import Picture4 from "@/assets/icons/Picture4.png";
import Picture5 from "@/assets/icons/Picture5.png";
import Picture6 from "@/assets/icons/Picture6.png";

export const links = [
  { text: "Home", url: "/" },
  { text: "About Us", url: "#" },
  {
    text: "Industries",
    url: "#",
    submenus: [
      { text: "Healthcare", url: "/reports" },
      { text: "Technology", url: "/reports" },
      { text: "Finance", url: "/reports" },
      { text: "Education", url: "/reports" },
      { text: "Manufacturing", url: "/reports" },
    ],
  },
  { text: "Services", url: "/checkout" },
  { text: "Insights", url: "#" },
  { text: "About", url: "#" },
  { text: "Contact", url: "/contact" },
];

export const industries = [
  {
    id: 1,
    name: "Healthcare",
    description:
      "Company that offers design and build services for you from initial sketches to the final production. We consider all the drivers of change from the ground up and we’ll motivate and support you to make the change.",
    icon: Picture1,
  },
  {
    id: 2,
    name: "Chemicals and Materials",
    description:
      "We work buy-side and sell-side and give our clients hard-hitting and objective answers and focus hard on the best opportunities. We work across all the major geographies, meaning we understand the underlying drivers in construction markets.",
    icon: Picture2,
  },
  {
    id: 3,
    name: "Information and Technology",
    description:
      "Design repeatable growth models and innovation pipelines that generate new products with higher potential and lower risks of failure.",
    icon: Picture4,
  },
  {
    id: 4,
    name: "Energy and Power",
    description:
      "Scheduled transport operations, from broad market trends and strategy to the development of integrated commercial strategies.",
    icon: Picture5,
  },
  {
    id: 5,
    name: "Agriculture",
    description:
      "We work across all the major geographies, meaning we understand the underlying drivers in construction markets.",
    icon: Picture6,
  },
  {
    id: 6,
    name: "Consumer Goods",
    description:
      "We work buy-side and sell-side and give our clients hard-hitting and objective answers and focus hard on the best opportunities.",
    icon: Picture3,
  },
];
