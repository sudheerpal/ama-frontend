import React from "react";
import reportHeaderBg from "@/assets/report/reportHeaderBg.png";
import reportThumbnail from "@/assets/report/reportThumbnail.png";
import quotation from "@/assets/report/quotation.png";
import avatar from "@/assets/report/avatar.png";
import CustomContainer from "../ui/CustomContainer";
import Image from "next/image";
import PricingCard from "./components/PricingCard";
import Button from "../ui/Button";
import { Book, Clock, Download, HelpCircle, Tag } from "react-feather";
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
          <main className="relative grid gap-5 mt-5 lg:grid-cols-4 lg:mt-10">
            {/* ---- report tab section ---- */}
            <section className="lg:col-span-3">
              {/* report introduction section  */}
              <section className="gap-5 py-5 space-y-3 md:flex md:space-y-0">
                <div className="w-fit min-w-32 xl:min-w-40">
                  <Image src={reportThumbnail} alt="report thumbnail" />
                </div>
                <div className="space-y-3">
                  <h1 className="text-lg font-semibold md:text-2xl text-primary">
                    Post-Covid-19 Epidemic Era, Anesthesia Drugs Industry
                    Development Trend Analysis Report 2023
                  </h1>
                  <p className="text-sm">
                    Asia Pacific Offshore Wind Market Research Report -
                    Information By Technology (Wind Energy, Wave Energy, Tidal
                    Stream, Ocean Thermal Energy Conversion (OTEC), and Other
                    Technologies) –and Asia Pacific Market Forecast Till 2032
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="flex gap-1">
                      <Book className="font-bold text-primary" size={20} />{" "}
                      Report
                    </div>{" "}
                    <hr className="w-0 h-6 border-2 border-secondary" />
                    <div>182 Pages</div>
                    <hr className="w-0 h-6 border-2 border-secondary" />
                    <div>April 2023</div>
                    <hr className="w-0 h-6 border-2 border-secondary" />
                    <div>Region : Global</div>
                    <hr className="w-0 h-6 border-2 border-secondary" />
                    <div>TechNavio</div>
                    <hr className="w-0 h-6 border-2 border-secondary" />
                    <div>ID: 2468574</div>
                  </div>
                </div>
              </section>
              <section>
                <ReportTabs />
              </section>
            </section>
            {/* ---- report sidebar ---- */}
            <section className="sticky top-0 hidden py-5 h-min lg:block">
              {/* segment 1 */}
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
              {/* segment 2 */}
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
              {/* segment 3 */}
              <div className="mx-4 my-5">
                <div className="p-5 rounded bg-secondary">
                  <h2 className="mb-4 text-xl font-bold text-center text-primary">
                    Healthcare Clients
                  </h2>
                  <div className="py-5 text-center bg-white rounded">
                    <span className="text-4xl font-extrabold drop-shadow-xl">
                      BASF
                    </span>
                  </div>
                </div>
              </div>
              {/* segment 4 */}
              <div className="mx-4 my-5">
                <div
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 90%, 45% 90%, 32% 100%, 32% 90%, 0 90%)",
                  }}
                  className="p-4 pb-10 bg-gray-200"
                >
                  <p>
                    “Thank you very much. I really appreciate the work your team
                    has done. I feel very comfortable recommending your services
                    to some of the other startups that I’m working with, and
                    will likely establish a good long partnership with you.”
                  </p>
                  <div className="w-16 ml-auto">
                    <Image src={quotation} alt="quotation" />
                  </div>
                </div>
                <div className="flex items-center gap-4 my-5">
                  <div>
                    <Image
                      className="w-12 rounded-full"
                      src={avatar}
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Dr. John Doe</h3>
                    <p className="text-gray-600">
                      Sales & Marketing, Alien Ltd.
                    </p>
                  </div>
                </div>
              </div>
              {/* segment 5 */}
              <hr className="my-5 mt-16 border-2 border-black" />
              <div className="mx-4 my-5">
                <h2 className="my-3 text-xl font-bold">related reports</h2>
                {"fs".split("").map((_, i) => (
                  <div key={i} className="my-4">
                    <h4 className="font-semibold text-primary">
                      U.S. life science analytics market size, share & COVID-19{" "}
                    </h4>
                    <div className="flex items-center gap-2 mt-2 text-sm">
                      <Clock className="-mt-1 text-secondary" size={16} />
                      <p>October 23, 2023</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </CustomContainer>
      </section>
    </div>
  );
};

export default ReportPage;
