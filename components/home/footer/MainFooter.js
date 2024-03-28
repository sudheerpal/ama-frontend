import React from "react";
import logo from "@/assets/logo3.png";
import Image from "next/image";
import { Clock, Facebook, Linkedin, Mail, Twitter } from "react-feather";
import Link from "next/link";
import CustomContainer from "@/components/ui/CustomContainer";

const MainFooter = () => {
  return (
    <div className="bg-primary">
      <CustomContainer>
        <section className="grid grid-cols-1 gap-8 py-8 text-white md:grid-cols-2 lg:grid-cols-4 lg:py-12">
          <div className="w-full py-4 space-y-3">
            <Image className="block w-56 mx-auto" src={logo} alt="logo" />
            <p className="text-sm">
              Advance Market Analytics is a wholly owned brand of AMA Research &
              Media LLP which provides next generation service for organizations
              with a deep focus on market intelligence, data analytics, and
              social intelligence, all uniquely delivered under one roof by
              skilled professionals. By combining and analyzing acquire lucid
              and most relevant data which would help in better decision-making.
            </p>
          </div>
          <div className="w-full py-4 space-y-3">
            <h2 className="pb-2 text-2xl font-bold border-b">recent news</h2>
            <div>
              <h4 className="font-medium">
                A digital prescription for the pharma industry
              </h4>
              <div className="flex gap-2 mt-2">
                <Clock className="mt-[2px] text-secondary" size={18} />
                <p className="text-gray-400">October 23, 2023</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium">
                A digital prescription for the pharma industry
              </h4>
              <div className="flex gap-2 mt-2">
                <Clock className="mt-[2px] text-secondary" size={18} />
                <p className="text-gray-400">October 23, 2023</p>
              </div>
            </div>
          </div>
          <div className="w-full py-4 space-y-3">
            <h2 className="pb-2 text-2xl font-bold border-b">extra links</h2>
            <div className="grid grid-cols-2 text-blue-500">
              <div className="flex flex-col gap-2">
                <Link href="/">About</Link>
                <Link href="/">Contacts</Link>
                <Link href="/">Testimonials</Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="/">Services</Link>
                <Link href="/">Our team</Link>
                <Link href="/">Our approach</Link>
              </div>
            </div>
          </div>
          <div className="w-full py-4 space-y-3">
            <h2 className="pb-2 text-2xl font-bold">subscribe</h2>
            <div className="flex items-center h-8">
              <input
                className="w-full h-full text-black border-2 border-secondary focus:outline-none"
                type="email"
              />
              <button className="block h-full px-2 bg-secondary">
                <Mail size={22} color="black" />
              </button>
            </div>
            <p className="pt-8 text-sm">get latest updates and offers.</p>
          </div>
        </section>
        <hr />
        <footer className="py-6 text-sm text-white md:flex md:justify-between">
          <p>© 2024 Consulting WordPress Theme by StylemixThemes</p>
          <div className="flex items-center gap-2 lg:gap-4">
            <Link
              href="https://www.facebook.com/advancemarketanalytics"
              target="_blank"
              className="hover:text-blue-500"
            >
              <Facebook size={18} />
            </Link>
            <Link
              href="https://twitter.com/amareport"
              target="_blank"
              className="hover:text-blue-500"
            >
              <Twitter size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/advance-market-analytics"
              target="_blank"
              className="hover:text-blue-500"
            >
              <Linkedin size={18} />
            </Link>
          </div>
        </footer>
      </CustomContainer>
    </div>
  );
};

export default MainFooter;
