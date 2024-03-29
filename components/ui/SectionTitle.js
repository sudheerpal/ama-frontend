import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <div className="flex flex-col items-center my-12">
      <h1 className="text-2xl font-bold text-center capitalize md:text-3xl lg:text-5xl text-primary">
        {children}
      </h1>
      <hr className="w-12 mt-2 border-t-4 border-b-4 rounded border-secondary" />
    </div>
  );
};

export default SectionTitle;
