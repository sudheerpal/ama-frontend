import React from "react";
import reportHeaderBg from "@/assets/report/reportHeaderBg.png";
import reportThumbnail from "@/assets/report/newReportThumbnail.jpeg";
import CustomContainer from "../ui/CustomContainer";
import Image from "next/image";
import PricingCard from "./components/PricingCard";
import ReportTabs from "./ReportTabs";
import { getSubHeading } from "@/utils/helper";
import Forms from "./Forms";
import ClientLogos from "./components/ClientLogos";
import Testimonials from "./components/Testimonials";
import ReportList from "../common/ReportList";
import Link from "next/link";
import MRFImage from "../ui/Image";
import { cookies } from "next/headers";
import Tabs from "./Tabs";
import TOC from "./components/TOC";
import SummaryTabHighlight from "./components/SummaryTabHighlight";
import MethodologyTabContent from "./components/MethodologyTabContent";
import SummaryTabContent from "./components/SummaryTabContent";
import styles from "./components/rd.module.css";

const ReportPage = ({
  testimonials = [],
  reportData = {},
  clientLogos = [],
}) => {
  const { basic, marketAnalysis, marketReport, rd } = reportData;
  const subHeading = getSubHeading({
    ...basic,
    ...marketAnalysis,
    ...marketReport,
  });
  const cookieStore = cookies();
  const activeTab = cookieStore.get("tab")?.value || "summary";

  return (
    <div>
      <MRFImage
        classNames="w-full"
        src={
          basic?.category?.parent?.banner ||
          basic?.category?.banner ||
          reportHeaderBg
        }
        alt="Report banner"
        loading="eager"
        priority
        bgImage
      >
        <div className="py-6 text-white bg-opacity-50 bg-primary">
          <CustomContainer>
            <div>{basic.marketKeyword}</div>
            <h1 className="mt-4 text-2xl font-bold text-white lg:text-3xl">
              <Link
                href={`/industries/${basic.category.link}`}
                aria-label="Category Link"
              >
                {basic.category.label}
              </Link>
            </h1>
            <hr className="w-12 mt-2 border-t-4 border-b-4 border-white rounded" />
          </CustomContainer>
        </div>
      </MRFImage>
      <section>
        <CustomContainer>
          <main className="relative grid gap-5 mt-5 lg:grid-cols-3 lg:mt-10">
            {/* ---- report tab section ---- */}
            <section className="lg:col-span-2">
              {/* report introduction section  */}
              <section className="gap-5 py-5 space-y-3 md:flex md:space-y-0">
                <div className="relative overflow-hidden border-4 shadow max-h-48 border-primary w-fit max-w-36 min-w-36 xl:min-w-36">
                  <Image src={reportThumbnail} alt="report thumbnail" />
                  <span className="absolute text-sm font-bold text-center max-w-28 top-12 right-1">
                    {basic.marketKeyword}
                  </span>
                </div>
                <div className="space-y-3">
                  <h1 className="text-lg font-semibold md:text-2xl text-primary">
                    {basic.title}
                  </h1>
                  <p className="text-base font-semibold">{subHeading}</p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <div>
                      <span>
                        {new Date(
                          basic?.publishedAt || basic?.createdAt
                        ).toDateString("month", "year")}
                      </span>
                    </div>
                    <hr className="w-0 h-6 border-2 border-secondary" />
                    <div>
                      <span>Base Year: {new Date().getFullYear() - 1}</span>
                    </div>
                    <hr className="w-0 h-6 border-2 border-secondary" />
                    <div>
                      <span>{basic?.noOfPages || "N/A"} Pages</span>
                    </div>
                  </div>
                </div>
              </section>
              {/* <section>
                <ReportTabs
                  basic={basic}
                  marketAnalysis={marketAnalysis}
                  marketReport={marketReport}
                  rd={rd}
                />
              </section> */}
              <Tabs activeTab={activeTab} basic={basic} />
              <section
                className={`${
                  activeTab === "summary"
                    ? "prose block space-y-5 lg:space-y-10 lg:mb-10 min-w-full"
                    : "hidden"
                }`}
              >
                <div
                  className={styles.rd}
                  id="rd_content"
                  dangerouslySetInnerHTML={{ __html: rd?.rd || "" }}
                ></div>
                <SummaryTabContent
                  basic={basic}
                  marketAnalysis={marketAnalysis}
                  marketReport={marketReport}
                  rd={rd}
                />
              </section>

              <section
                className={`${activeTab === "toc" ? "block" : "hidden"}`}
              >
                <TOC
                  marketAnalysis={marketAnalysis}
                  marketReport={marketReport}
                  report={basic}
                />
              </section>
              <section
                className={`${activeTab === "segments" ? "block" : "hidden"}`}
              >
                <SummaryTabHighlight
                  basic={basic}
                  marketAnalysis={marketAnalysis}
                />
              </section>
              <section
                className={`${
                  activeTab === "methodology" ? "block" : "hidden"
                }`}
              >
                <MethodologyTabContent />
              </section>
            </section>
            {/* ---- report sidebar ---- */}
            <section className="sticky top-0 h-screen py-5 overflow-y-auto lg:block lg:space-y-10">
              {/* segment 1 */}
              <Forms slug={basic.slug} />
              {/* segment 1.5 */}
              <div className="mx-4 my-5">
                <PricingCard price={basic?.price} slug={basic?.slug} />
              </div>
              {/* segment 2 */}
              <div className="my-5">
                <div className="mx-4 rounded bg-accent">
                  <h3 className="w-full py-2 text-center text-white capitalize rounded-t bg-primary">
                    Tailored for you
                  </h3>
                  <div className="p-4 pl-8">
                    <ul className="mb-4 list-disc">
                      <li>
                        In-depth Analysis Tailored to Specified Regions or
                        Segments
                      </li>
                      <li>Company Profiles Customized to User Preferences</li>
                      <li>
                        Comprehensive Insights Focused on Specific Segments or
                        Regions
                      </li>
                      <li>
                        Customized Evaluation of Competitive Landscape to Meet
                        Your Needs
                      </li>
                      <li>
                        Tailored Customization to Address Other Specific
                        Requirements
                      </li>
                    </ul>
                    <Link
                      href={`/report/${basic?.slug}/enquiry-before-buy`}
                      className="block pt-2 mx-auto mt-5 text-white rounded-full btn btn-primary btn-sm"
                    >
                      Ask for customization
                    </Link>
                  </div>
                </div>
              </div>
              {/* segment 3 */}
              <div className="mx-4 my-5">
                <div className="p-5 rounded bg-secondary">
                  <h2 className="mb-4 text-sm font-semibold text-center text-primary">
                    {reportData.basic.category?.label} Clients
                  </h2>
                  <div className="text-center bg-white rounded">
                    <ClientLogos clientLogos={clientLogos} />
                  </div>
                </div>
              </div>
              <Testimonials testimonials={testimonials} />
              {/* segment 5 */}
              <hr className="my-5 mt-16 border-2 border-black" />
              <ReportList />
            </section>
          </main>
        </CustomContainer>
      </section>
    </div>
  );
};

export default ReportPage;
