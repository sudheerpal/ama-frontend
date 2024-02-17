import React from "react";
import logo from "@/assets/logo3.png";
import Image from "next/image";
import { Clock, Mail } from "react-feather";
import Link from "next/link";

const MainFooter = () => {
  return (
    <div>
      <section className="grid grid-cols-1 gap-8 py-8 text-white md:grid-cols-2 lg:grid-cols-4 bg-primary lg:py-12 lg:px-12">
        <div className="w-full p-4 space-y-3">
          <Image className="block w-56 mx-auto" src={logo} alt="logo" />
          <p>
            Consulting WP - Before we talk destination, we shine a spotlight
            across your organization to fully understand its people, processes,
            and technology.Consulting WordPress theme / Finance WordPress theme
            / Business WordPress theme
          </p>
        </div>
        <div className="w-full p-4 space-y-3">
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
        <div className="w-full p-4 space-y-3">
          <h2 className="pb-2 text-2xl font-bold border-b">extra links</h2>
          <div className="grid grid-cols-2 text-blue-500">
            <div className="flex flex-col gap-2">
              <Link href="/">About</Link>
              <Link href="/">Contacts</Link>
              <Link href="/">Typography</Link>
              <Link href="/">Career</Link>
              <Link href="/">Shop</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/">News</Link>
              <Link href="/">Testimonials</Link>
              <Link href="/">Services</Link>
              <Link href="/">Our team</Link>
              <Link href="/">Our approach</Link>
            </div>
          </div>
        </div>
        <div className="w-full p-4 space-y-3">
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
    </div>
  );
};

export default MainFooter;
