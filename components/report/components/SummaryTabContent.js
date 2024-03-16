/* eslint-disable react/no-unescaped-entities */
import React from "react";
import barChart from "@/assets/report/barChart.png";
import roundChart from "@/assets/report/roundChart.png";
import Image from "next/image";
import SummaryTabFAQ from "./SummaryTabFAQ";
import SummaryTabHighlight from "./SummaryTabHighlight";

const SummaryTabContent = () => {
  return (
    <div>
      <section className="mb-8">
        <header className="my-4">
          <h3 className="text-xl font-bold uppercase border-b-4 text-primary border-secondary w-fit">
            Key Market Insights
          </h3>
        </header>
        <main>
          <p>
            Key market insights provide invaluable understanding and foresight
            into the dynamics shaping various industries, serving as a compass
            for businesses navigating turbulent waters. These insights encompass
            a multitude of factors, including consumer behavior, emerging
            technologies regulatory landscapes, and competitive forces. Delving
            into consumer behavior unveils shifting preferences, buying
            patterns, and demographic trends, essential for crafting targeted
            marketing strategies and product development. Understanding emerging
            technologies allows companies to embrace innovation streamline
            processes, and stay ahead of the curve in an increasingly digital
            world. Moreover, keeping a pulse on regulatory landscapes ensures
            compliance and mitigates risks asociated with legal challe-nges or
            reputational damage. Concurrently, analyzing competitive forces
            unveils market gaps, threats, and opportunities, empowering
            businesses to fine-tune their positioning and capitalize on untapped
            potential. In essence, key market insights serve as a strategic
            compass, guiding organizations toward informed decisions,
            sustainable growth, and competitive advantage in today's dynamic
            business environment.
          </p>
        </main>
      </section>
      <section className="mb-8">
        <header className="my-4">
          <h3 className="text-xl font-bold uppercase border-b-4 text-primary border-secondary w-fit">
            U.S LIFE SCIENCE ANALYTICS MARKET GROWTH FACTORS
          </h3>
        </header>
        <main>
          <p>
            The U.S. life science analytics market has experienced significant
            growth in recent years, driven by several key factors. One of the
            primary drivers is the increasing demand for advanced analytics
            solutions within the life sciences industry to improve operational
            efficiency, enhance research and development processes, and optimize
            decision-making. Technological advancements, such as big data
            analytics, machine learning, and artificial intelli-gence, have
            revolutionized the way data is collected, analyzed, and utilized in
            life sciences, leading to a surge in adoption of analytics
            solutions. Moreover, the growing emphasis on personalized medicine
            and precision healthcare has fueled the need for sophisticated
            analytics tools that can analyze vast amounts of patient data to
            tailor treat-ments and therapies to individual needs, thus driving
            market growth. Additionally, stringent regulatory require-ments and
            compliance standards in the healthcare sector have propelled the
            adoption of analytics solutions for ensuring regulatory compliance,
            drug safety, and risk management. Furthermore, the COVID-19 pandemic
            has further accelerated the uptake of analytics solutions in the
            life sciences industry, as organizations seek to harness data-driven
            insights to address challenges related to vaccine developmentsupply
            chain disruptions, and epidemiological modeling. With the continuous
            evolution of technology and the incre-asing integration of analytics
            into various aspects of the life sciences value chain, the U.S. life
            science analytics market is poised for robust growth in the
            foreseeable future.The U.S. life science analytics market is
            witnessing dynamic trends, propelled by advancements in technology,
            increasing data complexity, and the growing demand for personalized
            medicine and improved patient outcomes.One significant trend is the
            integration of artificial intelligence (AI) and machine learning
            (ML) algorithms into analytics solutions, enablingpharmaceutical
            companies, biotech firms, and healthcare providers to derive
            actionabl insights from vast datasets efficiently. Another emerging
            trend is the emphasis on real-world evidence (RWE) analytics,
            leveraging data from electronic health records (EHRs), claims
            databases, and wearable devices to inform clinical decision-making,
            regulatory approvals, and health policy formulation.Another emerging
            trend is the emphasis on real-world evidence (RWE) analytics,
            leveraging data from electronic health records (EHRs), claims
            databases, and wearable devices to inform clinical decision-making,
            regulatory approvals, and health policy formulation.
          </p>
          <div className="flex justify-center mt-8">
            <Image src={barChart} alt="barchart" />
          </div>
        </main>
      </section>
      <section className="mb-8">
        <header className="my-4">
          <h3 className="text-xl font-bold uppercase border-b-4 text-primary border-secondary w-fit">
            U.S LIFE SCIENCE ANALYTICS MARKET TRENDS
          </h3>
        </header>
        <main>
          <p>
            The U.S. life science analytics market is witnessing dynamic trends,
            propelled by advancements in technology, increasing data complexity,
            and the growing demand for personalized medicine and improved
            patient outcomes. One significant trend is the integration of
            artificial intelligence (AI) and machine learning (ML) algorithms
            into analytics solutions, enablingpharmaceutical companies, biotech
            firms, and healthcare providers to derive actionabl insights from
            vast datasets efficiently. These AI-driven analytics platforms
            facilitate drug discovery, clinical trials optimization, and
            real-time monit-oring of patient data, leading to more effective
            treatments and therapies.Additionally, there's a noticeable shift
            towards cloud-based analytics solutions, allowing organizations to
            scale their analytics capabilities, enhance collaboration, and
            reduce infrastructure costs. Another emerging trend is the emphasis
            on real-world evidence (RWE) analytics, leveraging data from
            electronic health records (EHRs), claims databases, and wearable
            devices to inform clinical decision-making, regulatory approvals,
            and health policy formulation. Moreover, the COVID-19 pandemic has
            accelerated the adoption of telemedicine and remote patient
            monitoring, driving the need for sophisticated analytics tools to
            manage and analyze remote patient data securely. Furthermore,
            regulatory agencies are increasingly focusing on ensuring data
            integrity, privacy, and compliance, prompting life science companies
            to invest in robust data governance and security solutions.
          </p>
          <div className="flex justify-center mt-8">
            <Image src={roundChart} alt="barchart" />
          </div>
        </main>
      </section>
      <section>
        <SummaryTabHighlight />
      </section>
      <section>
        <SummaryTabFAQ />
      </section>
    </div>
  );
};

export default SummaryTabContent;
