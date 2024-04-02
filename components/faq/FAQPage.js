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
        "What is the projected Compound Annual Growth Rate (CAGR) of the market?",
      answer: "The projected CAGR is approximately 5%.",
    },
    {
      question: "Which companies are prominent players in the market?",
      answer:
        "Key companies in the market include Company A, Company B, and Company C.",
    },
    {
      question: "What are the main segments of the market?",
      answer:
        "The market segments include Segment 1 (Description), Segment 2 (Description), and Segment 3 (Description).",
    },
    // Add more FAQs as needed
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
