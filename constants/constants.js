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
  { text: "Contact", url: "/contact" },
];

export const industries = [
  {
    id: 1,
    name: "Healthcare",
    description:
      "Design and build services from initial sketches to final production, with focus on change drivers.",
    icon: Picture1,
  },
  {
    id: 2,
    name: "Chemicals and Materials",
    description:
      "Objective solutions for construction markets, emphasizing best opportunities.",
    icon: Picture2,
  },
  {
    id: 3,
    name: "Information and Technology",
    description:
      "Innovative growth models generating new products with lower risks of failure.",
    icon: Picture4,
  },
  {
    id: 4,
    name: "Energy and Power",
    description:
      "Integrated commercial strategies for scheduled transport operations and market trends.",
    icon: Picture5,
  },
  {
    id: 5,
    name: "Agriculture",
    description:
      "Understanding construction market drivers across major geographies.",
    icon: Picture6,
  },
  {
    id: 6,
    name: "Consumer Goods",
    description:
      "Objective solutions emphasizing best opportunities in buy-side and sell-side.",
    icon: Picture3,
  },
];
