import React from "react";
import FAQAccordion from "./components/FAQAccordion";
import CustomContainer from "../ui/CustomContainer";
import carrerBg from "@/assets/career/careerBg4.jpeg";
import faqImage from "@/assets/faq/FAQ.png";
import Link from "next/link";
import { ChevronRight } from "react-feather";
import Image from "next/image";

const FAQPage = () => {
  const FAQs = [
    {
      question:
        "What does Market Research Forecast do and what types of products are offered?",
      answer:
        "Market Research Forecast provides market research and analysis services. We offer a wide range of products including industry reports, market forecasts, company profiles, and custom research services tailored to specific client needs.",
    },
    {
      question: "Which delivery format should I select?",
      answer:
        "We offer multiple delivery formats for our products, including PDF reports, Excel sheets, and online access. You can choose the format that best suits your requirements and preferences.",
    },
    {
      question: "What ordering methods are available?",
      answer:
        "You can place orders directly on our website or contact our sales team for assistance. We also accept orders via email or phone.",
    },
    {
      question: "What is the checkout process?",
      answer:
        "Once you have selected the products you wish to purchase, proceed to the checkout page. Here, you will enter your billing and payment information, review your order, and complete the purchase.",
    },
    {
      question: "Is the online ordering process secure?",
      answer:
        "Yes, we take security seriously and use encryption technology to protect your personal and payment information during online transactions.",
    },
    {
      question: "What payment methods are available?",
      answer:
        "We accept various payment methods, including credit cards, PayPal, and bank transfers. You can choose the payment option that is most convenient for you.",
    },
    {
      question: "How will my electronic product be delivered?",
      answer:
        "Once your order is processed, you will receive an email with a download link or login credentials to access your electronic product online.",
    },
    {
      question:
        "I have not received my electronic product yet, what should I do?",
      answer:
        "If you have not received your electronic product within the specified timeframe, please contact our customer support team for assistance.",
    },
    {
      question:
        "Does Market Research Forecast require payment before order dispatch?",
      answer:
        "Yes, we require payment before dispatching orders to ensure a smooth and efficient transaction process.",
    },
    {
      question: "What is Market Research Forecast refund & return policy?",
      answer:
        "We offer a refund or return policy for products that do not meet your expectations or are damaged upon receipt. Please refer to our website or contact customer support for more information on our policy.",
    },
    {
      question: "What is Market Research Forecast cancellation policy?",
      answer:
        "You can cancel your order within a specified timeframe before the scheduled delivery date. Please refer to our cancellation policy for more details.",
    },
    {
      question: "How do I use marketresearchforecast.com?",
      answer:
        "Simply visit our website and browse through our products and services. You can use the search function to find specific items or navigate through categories. If you have any questions or need assistance, feel free to contact our customer support team.",
    },
    {
      question: "How does search work?",
      answer:
        "Our website features a search function that allows you to enter keywords or phrases related to the products or information you are looking for. The search results will display relevant items based on your query.",
    },
    {
      question: "What types of research and reports do you have?",
      answer:
        "We offer a diverse range of research and reports covering various industries, markets, and regions. Our products include market analysis reports, industry forecasts, company profiles, and custom research services.",
    },
    {
      question: "What do I do if I forgot my password?",
      answer:
        "If you forgot your password, you can simply click on the 'Forgot Password' link on the login page. A password reset link will be sent to the email address associated with your account. You can also contact our support team for further assistance.",
    },
  ];

  return (
    <div>
      {" "}
      <section
        className="text-white"
        style={{
          backgroundImage: `url(${carrerBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="py-12 bg-opacity-50 bg-primary">
          <CustomContainer>
            <p className="flex flex-wrap items-center gap-[2px] text-xs">
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
              <ChevronRight size={10} />
              <Link href="/faq" className="hover:text-blue-500">
                FAQ
              </Link>
            </p>
            <h1 className="mt-4 text-2xl font-bold text-white lg:text-3xl">
              FAQ
            </h1>
            <hr className="w-12 mt-2 border-t-4 border-b-4 border-white rounded" />
          </CustomContainer>
        </div>
      </section>
      <CustomContainer classNames="py-5 md:py-10">
        <main className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
          <section>
            <Image
              className="w-full max-w-sm mx-auto"
              src={faqImage}
              alt="Question and Answer Image"
            />
          </section>
          <section>
            {FAQs.map((el, index) => (
              <FAQAccordion key={index} item={el} />
            ))}
          </section>
        </main>
      </CustomContainer>
    </div>
  );
};

export default FAQPage;
