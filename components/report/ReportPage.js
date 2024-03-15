import React from "react";
import reportHeaderBg from "@/assets/report/reportHeaderBg.png";
import reportThumbnail from "@/assets/report/reportThumbnail.png";
import CustomContainer from "../ui/CustomContainer";
import Image from "next/image";
import PricingCard from "./components/PricingCard";
import Button from "../ui/Button";
import { Download, HelpCircle, Tag } from "react-feather";
import ReportTabs from "./ReportTabs";

const ReportPage = () => {
  return (
    <div>
      <section
        className="py-12 text-white"
        style={{
          backgroundImage: `url(${reportHeaderBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <CustomContainer>
          <p className="text-xs">
            Advance Market Analytics - New York {">"} Reports {">"} Corrugated
            Market
          </p>
          <h1 className="mt-4 text-2xl font-bold text-white lg:text-3xl">
            Healthcare
          </h1>
          <hr className="w-12 mt-2 border-t-4 border-b-4 border-white rounded" />
        </CustomContainer>
      </section>
      <section>
        <CustomContainer>
          <h1 className="text-lg font-semibold md:text-2xl text-primary">
            Post-Covid-19 Epidemic Era, Anesthesia Drugs Industry Development
            Trend Analysis Report 2023
          </h1>
          <main className="relative grid gap-5 lg:grid-cols-4">
            <section className="lg:col-span-3">
              <section className="grid grid-cols-1 gap-5 py-5 md:grid-cols-2">
                <div className="flex items-center gap-5 p-2">
                  <div>
                    <Image src={reportThumbnail} alt="report thumbnail" />
                  </div>
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h4 className="font-semibold">Published On</h4>
                      <p className="text-xs text-gray-500">Feb, 2024</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Base Year</h4>
                      <p className="text-xs text-gray-500">2022</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Historical Data</h4>
                      <p className="text-xs text-gray-500">2019 - 2021</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">No of pages</h4>
                      <p className="text-xs text-gray-500">80</p>
                    </div>
                  </div>
                </div>
                <div>
                  <PricingCard />
                </div>
              </section>
              <section>
                <ReportTabs />
              </section>
            </section>
            <section className="sticky top-0 hidden py-5 h-min lg:block">
              <div className="flex flex-col gap-8 p-4 mb-5">
                <Button>
                  <Download className="text-secondary" />{" "}
                  <span className="uppercase">Request sample</span>
                </Button>
                <Button>
                  <HelpCircle className="text-secondary" />{" "}
                  <span className="uppercase">Pre Order Enquiry</span>
                </Button>
                <Button>
                  <Tag className="text-secondary" />{" "}
                  <span className="uppercase">Request discount</span>
                </Button>
              </div>
              <div className="my-5">
                <div className="mx-4 bg-gray-200 rounded">
                  <h3 className="py-2 text-center text-white capitalize rounded-t bg-primary">
                    Tailored for you
                  </h3>
                  <div className="p-4 pl-8">
                    <ul className="mb-4 list-disc">
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Deserunt corporis quasi modi? Eius, sed.</li>
                      <li>Eveniet omnis rerum reiciendis. Ut, ipsum.</li>
                      <li>Fuga deserunt eum culpa consequatur facilis!</li>
                      <li>
                        Voluptas dolore eveniet voluptatibus quisquam tenetur!
                      </li>
                      <li>Fuga deleniti vitae corporis quis porro.</li>
                    </ul>
                    <button className="block mx-auto mt-5 mb-3 text-white rounded-full btn btn-primary btn-sm">
                      Ask for customization
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </CustomContainer>
      </section>
    </div>
  );
};

export default ReportPage;
