import React from "react";
import reportHeaderBg from "@/assets/report/reportHeaderBg.png";
import reportThumbnail from "@/assets/report/reportThumbnail.png";
import quotation from "@/assets/report/quotation.png";
import avatar from "@/assets/report/avatar.png";
import CustomContainer from "../ui/CustomContainer";
import Image from "next/image";
import PricingCard from "./components/PricingCard";
import Button from "../ui/Button";
import {
  ArrowRight,
  Book,
  Clock,
  Download,
  HelpCircle,
  Tag,
} from "react-feather";
import ReportTabs from "./ReportTabs";
import { getSubHeading } from "@/utils/helper";
import Forms from "./Forms";
import ClientLogos from "./components/ClientLogos";
import Testimonials from "./components/Testimonials";
import ReportList from "../common/ReportList";
import Link from "next/link";

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
          <div>{basic.marketKeyword}</div>
          <h1 className="mt-4 text-2xl font-bold text-white lg:text-3xl">
            <Link href={`/industries/${basic.category.link}`}>
              {basic.category.label}
            </Link>
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
                <div className="w-fit min-w-24 xl:min-w-28">
                  <Image src={reportThumbnail} alt="report thumbnail" />
                </div>
                <div className="space-y-3">
                  <h1 className="text-lg font-semibold md:text-2xl text-primary">
                    {basic.title}
                  </h1>
                  <p className="text-base font-semibold">{subHeading}</p>
                  {/* <div className="flex flex-wrap gap-3 text-sm">
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
                  </div> */}
                </div>
              </section>
              <section>
                <ReportTabs
                  basic={basic}
                  marketAnalysis={marketAnalysis}
                  marketReport={marketReport}
                  rd={rd}
                />
              </section>
            </section>
            {/* ---- report sidebar ---- */}
            <section className="sticky top-0 hidden py-5 h-min lg:block lg:space-y-10">
              {/* segment 1 */}
              <Forms />
              {/* segment 1.5 */}
              <div className="mx-4 my-5">
                <PricingCard price={basic.price} slug={basic.slug} />
              </div>
              {/* segment 2 */}
              <div className="my-5">
                <div className="mx-4 bg-gray-200 rounded">
                  <h3 className="py-2 text-center text-white capitalize w-full rounded-t bg-primary">
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
                  <h2 className="mb-4 font-semibold text-sm text-center text-primary">
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
