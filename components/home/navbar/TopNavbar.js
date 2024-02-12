import React from "react";
import { Phone, Search, User, Users } from "react-feather";

const TopNavbar = () => {
  return (
    <div>
      {" "}
      <section className="items-center hidden gap-4 text-white lg:grid lg:grid-cols-3 bg-primary">
        <div className="flex justify-end gap-4 xl-gap-6">
          <p className="flex items-center gap-1">
            <Phone color="#FDE428" size={18} />
            +1 551 333 1547
          </p>
          <p className="flex items-center gap-1">
            <Phone color="#FDE428" size={18} />
            +44 2070 979277
          </p>
          <p></p>
        </div>
        <div className="flex justify-end gap-4">
          <p className="flex items-center gap-1 mr-4">
            <Users color="#FDE428" size={18} />
            Join Our Team
          </p>
          <p className="flex items-center gap-1">
            <User color="#FDE428" size={18} />
            Login
          </p>
          <span>|</span>
          <p>Register</p>
        </div>
        <div className="relative py-2 bg-secondary">
          <input
            className="w-full px-4 py-2 pr-12 text-gray-800 placeholder-gray-500 bg-inherit focus:outline-none"
            type="search"
            placeholder="Search Reports..."
          />
          <button className="absolute top-0 right-0 h-full px-4 text-[#002E5B] ">
            <Search />
          </button>
        </div>
      </section>
    </div>
  );
};

export default TopNavbar;
