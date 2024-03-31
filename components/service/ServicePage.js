import React from "react";
import CustomContainer from "../ui/CustomContainer";
import Link from "next/link";
import { ChevronRight, FileText, Phone } from "react-feather";
import reportHeaderBg from "@/assets/report/reportHeaderBg.png";
import avatar from "@/assets/report/avatar.png";
import quotation from "@/assets/report/quotation.png";
import Button from "../ui/Button";
import Image from "next/image";
import ServiceCard from "./components/ServiceCard";
import icon1 from "@/assets/serviceCard/servicesIcon/Picture1.png";
import icon2 from "@/assets/serviceCard/servicesIcon/Picture2.png";
import icon3 from "@/assets/serviceCard/servicesIcon/Picture3.png";
import image1 from "@/assets/serviceCard/image-1.png";
import image2 from "@/assets/serviceCard/image-2.png";
import image3 from "@/assets/serviceCard/image-3.png";

const ServicePage = () => {
  const services = [
    {
      id: 1,
      title: "Consulting",
      description:
        "Gain access to expert advice and strategic guidance tailored precisely to your business needs. Our seasoned consultants provide insightful solutions and actionable recommendations to help you navigate challenges and capitalize on opportunities in your industry.",
      icon: icon1,
      image: image1,
    },
    {
      id: 2,
      title: "Customized Research",
      description:
        "Unlock the power of tailored research reports designed specifically for your industry, market, or area of interest. Our comprehensive analyses delve deep into relevant trends, data, and insights to equip you with the knowledge needed to make informed decisions and stay ahead of the curve.",
      icon: icon2,
      image: image2,
    },
    {
      id: 3,
      title: "Syndicate Research",
      description:
        "Access a wealth of comprehensive research reports collaboratively created and shared among multiple stakeholders in your industry. By leveraging collective expertise and resources, our syndicated research offers unparalleled insights into market dynamics, trends, and opportunities, empowering you to make informed strategic decisions.",
      icon: icon3,
      image: image3,
    },
  ];

  return (
    <div>
      <section
        className="py-12 mb-5 text-white lg:mb-10"
        style={{
          backgroundImage: `url(${reportHeaderBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <CustomContainer>
          <p className="flex flex-wrap items-center gap-[2px] text-xs">
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
            <ChevronRight size={10} />
            <Link href="/service" className="hover:text-blue-500">
              Services
            </Link>
          </p>
          <h1 className="mt-4 text-2xl font-bold text-white lg:text-3xl">
            Sevices
          </h1>
          <hr className="w-12 mt-2 border-t-4 border-b-4 border-white rounded" />
        </CustomContainer>
      </section>
      <CustomContainer classNames="mb-5 md:mb-10">
        <section className="grid grid-cols-1 gap-5 lg:grid-cols-4">
          <div className="space-y-3 lg:col-span-3">
            <section className="space-y-6 lg:space-y-10">
              {services?.map((item) => (
                <ServiceCard key={item.id} service={item} />
              ))}
            </section>
          </div>
          {/* sidebar section  */}
          <aside className="space-y-5">
            {" "}
            <section className="p-4 mx-4 bg-secondary">
              <h4 className="font-semibold">How can we help you?</h4>
              <p className="mt-2">
                Contact us at the Advance Market Analytics office nearest to you
                or submit a business inquiry online.
              </p>
              <Link href="/contact">
                <Button classNames="text-sm mt-5">
                  <Phone className="text-secondary" size={12} /> Contacts
                </Button>
              </Link>
            </section>
            <section className="mx-4">
              <Link href="/industries">
                <Button classNames="w-full">
                  <FileText className="text-secondary" size={16} /> Company
                  Reports
                </Button>
              </Link>
            </section>
            <section className="mx-4">
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
                  to some of the other startups that I’m working with, and will
                  likely establish a good long partnership with you.”
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
                  <p className="text-gray-600">Sales & Marketing, Alien Ltd.</p>
                </div>
              </div>
            </section>
          </aside>
        </section>
      </CustomContainer>
    </div>
  );
};

export default ServicePage;
