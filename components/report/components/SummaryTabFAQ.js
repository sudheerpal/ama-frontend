import React from "react";
import SummaryTabFAQAccordion from "./SummaryTabFAQAccordion";

const SummaryTabFAQ = () => {
  return (
    <section className="mb-8">
      <header className="my-4">
        <h3 className="text-xl font-bold uppercase border-b-4 text-primary border-secondary w-fit">
          Frequently Asked Questions
        </h3>
      </header>
      <main>
        {"1234".split("").map((el) => (
          <SummaryTabFAQAccordion key={el} />
        ))}
      </main>
    </section>
  );
};

export default SummaryTabFAQ;
