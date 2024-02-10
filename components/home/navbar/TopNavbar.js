import React from "react";

const TopNavbar = () => {
  return (
    <div>
      {" "}
      <section className="items-center hidden gap-4 text-white lg:grid lg:grid-cols-3 bg-primary">
        <div className="flex justify-end gap-2">
          <p>+1 551 333 1547</p>
          <p>+44 2070 979277</p>
        </div>
        <div className="flex justify-end gap-2">
          <p className="mr-4">Join Our Team</p>
          <p>Login</p>
          <span>|</span>
          <p>Register</p>
        </div>
        <div className="relative py-2 bg-secondary">
          <input
            className="w-full px-4 py-2 text-gray-800 placeholder-gray-500 bg-inherit focus:outline-none"
            type="search"
            placeholder="Search Reports..."
          />
          <button className="absolute top-0 right-0 h-full px-4 text-[#002E5B] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default TopNavbar;
