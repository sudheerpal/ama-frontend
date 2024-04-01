import React from "react";
import logo from "@/assets/logo3.png";
import Image from "next/image";
import {
  Clock,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Twitter,
} from "react-feather";
import Link from "next/link";
import CustomContainer from "@/components/ui/CustomContainer";

const MainFooter = () => {
  const currentYear = new Date().getFullYear();
  const copyrightMsg = "AMA Research. All rights reserved";
  return (
    <div className="bg-primary">
      <CustomContainer>
        <section className="grid grid-cols-1 gap-8 py-8 text-white md:grid-cols-2 lg:grid-cols-4 lg:py-12">
          <div className="w-full py-4 space-y-3">
            <h3 className="text-2xl font-bold">Business Address</h3>
            <h3 className="text-2xl font-bold">Head Office</h3>
            <p className="flex items-center gap-2">
              <MapPin className="w-[46px] text-secondary" size={18} />
              <span>
                Office no. A 5010, fifth floor, Solitaire Business Hub, Near
                Phoenix mall, Pune, Maharashtra 41101
              </span>
            </p>
          </div>{" "}
          <div className="w-full py-4 space-y-3">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="flex flex-col">
              <p>Craig Francis</p>
              <p className="text-sm text-gray-400">Business Development Head</p>
            </div>
            <p className="flex items-center gap-2">
              <PhoneCall className="text-secondary" size={18} />{" "}
              <span>+44 1223 92 666</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="text-secondary" size={18} />
              <span className="text-blue-500">
                sales@advancemarketanalytics.com
              </span>
            </p>
          </div>
          <div className="w-full py-4 space-y-3">
            <h2 className="pb-2 text-2xl font-bold border-b">Extra Links</h2>
            <div className="grid grid-cols-2 text-blue-500">
              <div className="flex flex-col gap-2">
                <Link href="/about">About</Link>
                <Link href="/contact">Contacts</Link>
                <Link href="#testimonial">Testimonials</Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="/service">Services</Link>
                <Link href="/career">Our team</Link>
                <Link href="/">Our approach</Link>
              </div>
            </div>
          </div>
          <div className="w-full py-4 space-y-3">
            <h2 className="pb-2 text-2xl font-bold">Subscribe</h2>
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
          <p>© {`${currentYear} ${copyrightMsg}`}</p>
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
