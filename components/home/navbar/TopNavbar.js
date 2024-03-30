import CustomContainer from "@/components/ui/CustomContainer";
import Link from "next/link";
import React from "react";
import { Phone, User, Users } from "react-feather";
import NavbarSearch from "./NavbarSearch";

const TopNavbar = () => {
  return (
    <div className="relative bg-primary">
      <CustomContainer>
        <section className="items-center hidden gap-4 text-sm text-white lg:grid lg:grid-cols-3 xl:text-base">
          <div className="flex gap-4 xl-gap-6">
            <p className="flex items-center gap-1">
              <Phone color="#FDE428" size={18} />
              <span>+1 551 333 1547</span>
            </p>
            <p className="flex items-center gap-1">
              <Phone color="#FDE428" size={18} />
              <span>+44 2070 979277</span>
            </p>
            <p></p>
          </div>
          <div className="flex justify-end gap-4">
            <Link href="/career" className="flex items-center gap-1 mr-4">
              <Users color="#FDE428" size={18} />
              Join Our Team
            </Link>
            {/* <p className="flex items-center gap-1">
              <User color="#FDE428" size={18} />
              Login
            </p>
            <span>|</span>
            <p>Register</p> */}
          </div>
          <NavbarSearch />
        </section>
      </CustomContainer>
      <div className="absolute top-0 right-0 z-10 w-1/3 h-full bg-secondary"></div>
    </div>
  );
};

export default TopNavbar;
