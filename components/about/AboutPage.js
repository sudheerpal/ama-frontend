/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CustomContainer from "../ui/CustomContainer";
import Button from "../ui/Button";
import { ArrowRight, FileText, Phone } from "react-feather";
import bannerImage1 from "@/assets/about/banner/image1.png";
import bannerImage2 from "@/assets/about/banner/image2.png";
import avatar from "@/assets/report/avatar.png";
import quotation from "@/assets/report/quotation.png";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  const progressData = [
    {
      year: 1985,
      title: "Start with a small service",
      description:
        "This was the time when we started our company. We had no idea how far we would go, we weren’t even sure that we would be able to survive for a few years. What drove us to start the company was the understanding that we could provide a service no one else was providing.",
    },
    {
      year: 1990,
      title: "First employees",
      description:
        "This was the first period when Consulting WP actually felt like it would stick around for a while. We realized we were growing more stable and expanding at the same time. We needed a new office as we had severely outgrown the last one. We started scouting for a new location.",
    },
    {
      year: 2001,
      title: "First recognition",
      description:
        "By this time we were a well known name within the industry. We had been prominent members of the industry for more than 16 years and worked for some of the biggest clients in the industry; we weren’t dismissed by anyone because we could not be dismissed by anyone.",
    },
    {
      year: 2015,
      title: "AMA — corporation or family",
      description:
        "Our journey has only brought us higher. Information Technology completely changes the way we analyze and present data. We have embraced new technologies and have ensured that our clients receive cutting edge analytics. As we go on towards the future we intend to exploit the full potential of new technologies to power our services.",
    },
  ];
  const links = [
    { text: "Company overview", href: "/company-overview" },
    { text: "Careers", href: "/careers" },
    { text: "Company History", href: "/company-history" },
    { text: "Our approach", href: "/our-approach" },
    { text: "Partners", href: "/partners" },
    { text: "Our team list", href: "/our-team-list" },
    { text: "Our team grid", href: "/our-team-grid" },
  ];

  return (
    <div>
      <CustomContainer classNames="mb-5 md:mb-10">
        <section className="grid grid-cols-1 gap-5 lg:grid-cols-4">
          <div className="space-y-3 lg:col-span-3">
            {/* banner section  */}
            <div className="grid grid-cols-1 bg-secondary md:grid-cols-2 md:p-10 xl:p-16">
              <div className="p-4">
                <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">
                  <span className="text-primary">Explore</span>
                  <br />
                  <span>Our Reports</span>
                </h1>
                <p>
                  We are company that offers consulting, customized and sydicate
                  research services for you from initial sketches to the final
                  construction.
                </p>
                <div className="mt-5">
                  <Link href="/industries">
                    <Button>
                      Explore <ArrowRight size={16} color="#FDE428" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative p-4 min-h-72">
                <Image
                  className="w-full max-w-56 lg:max-w-64"
                  src={bannerImage1}
                  alt="banner image 1"
                />
                <Image
                  className="absolute right-0 w-full bottom-4 max-w-56 lg:max-w-64"
                  src={bannerImage2}
                  alt="banner image 2"
                />
              </div>
            </div>
            {/* years of progress */}
            <section className="my-5">
              {progressData?.map((data, index) => (
                <div key={index} className="flex gap-2 mb-5 md:gap-5 ">
                  <div>
                    <h3 className="text-lg font-bold md:text-xl text-primary">
                      {data.year}
                    </h3>
                  </div>
                  <div className="h-auto mt-2 md:mt-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <div className="w-0 h-full mx-auto border"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold md:text-xl">
                      {data.title}
                    </h3>
                    <p className="mt-3 text-sm">{data.description}</p>
                  </div>
                </div>
              ))}
            </section>
            {/* company overview section  */}
            <section>
              <div className="mb-5">
                <h1 className="mt-4 text-2xl font-bold text-primary lg:text-3xl">
                  Company Overview
                </h1>
                <hr className="w-12 mt-2 border-t-4 border-b-4 rounded border-secondary" />
              </div>
              <p>
                MR Forecast stands as a premier Market Research Company,
                offering quantified B2B research that uncovers high-growth
                emerging opportunities impacting over 80% of global corporate
                revenues. Our team of Analysts diligently tracks high-growth
                studies, providing detailed statistical analyses and in-depth
                insights into market trends and dynamics, delivering a
                comprehensive industry overview. Employing an extensive research
                methodology, we fuse critical insights with industry factors and
                market forces to deliver optimal value to our clients. Drawing
                from reliable primary and secondary data sources, our analysts
                and consultants extract actionable data tailored to meet our
                clients' business objectives.
                <br />
                <span className="inline-block mt-3">
                  {" "}
                  Our research studies empower clients to achieve diverse market
                  objectives, ranging from global footprint expansion and supply
                  chain optimization to competitor profiling and M&As. With over
                  a decade of experience, we have collaborated with over 8,000
                  companies, generating a revenue impact exceeding $150 billion.
                  Consequently, we have transitioned from a market research
                  publisher to a growth-enabling firm, fostering a corporate
                  culture centered around "GIVE growth" to instill a growth
                  mindset within our workforce. Earlier this year, we underwent
                  a formal transformation, emerging as one of America's top
                  management consulting firms, recognized by Forbes in their
                  survey - notably as the sole Indian-origin startup among the
                  list of 200 firms. Distinguishing ourselves even within this
                  elite group, we offer a unique value proposition through our
                  proprietary Knowledge Store - a primary research-driven,
                  AI-enabled market intelligence platform designed for
                  growth-minded executives.
                </span>
              </p>
              <div className="p-4 mt-5 font-semibold bg-gray-200 border-l-8 border-secondary lg:px-10 xl:px-20">
                MR Forecast's growth is consistently fueled by the trust
                bestowed upon us by our valued clients. Our expertise spans
                across diverse industries including finance, energy, business
                services, and consumer products.
              </div>
            </section>
            <section className="md:flex md:gap-5">
              <div className="flex-1">
                <h1 className="mt-4 mb-5 text-2xl font-bold capitalize text-primary lg:text-3xl">
                  Our Misson
                </h1>
                <p>
                  Our goal is to forge enduring relationships with our clients,
                  emphasizing unparalleled commitment to becoming the premier
                  source of financial and market intelligence Reports worldwide.
                  Customer satisfaction and meeting their needs are our top
                  priorities. We adhere to the highest standards in delivering
                  services to ensure client satisfaction.
                </p>
              </div>
              <div className="flex-1">
                <h1 className="mt-4 mb-5 text-2xl font-bold capitalize text-primary lg:text-3xl">
                  how we work
                </h1>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.youtube.com/embed/yWAmQRS1mOE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </section>
          </div>
          {/* sidebar section  */}
          <aside className="space-y-5">
            <section className="mx-4">
              {links.map((link, idx) => (
                <Link
                  href={"#"}
                  key={idx}
                  className={`block px-4 py-2 duration-100 bg-gray-200 mb-1 hover:bg-primary hover:text-white text-primary ${
                    idx === 0 && "border-l-4 border-primary"
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </section>
            <section className="mx-4">
              <Link href="/industries">
                <Button classNames="w-full">
                  <FileText className="text-secondary" size={16} /> Company
                  Reports
                </Button>
              </Link>
            </section>
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
      <section>
        <div className="bg-secondary">
          <CustomContainer
            classNames={`items-center justify-between py-4 lg:flex `}
          >
            <div className="text-2xl font-bold capitalize">
              looking for Trending Report by Industries?
            </div>
            <div className="flex justify-center">
              <Link href={`/industries`}>
                <Button>
                  Explore <ArrowRight size={16} color="#FDE428" />
                </Button>
              </Link>
            </div>
          </CustomContainer>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
