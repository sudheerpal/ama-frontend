import React from "react";

const Stats = () => {
  const statsData = [
    { value: 321, label: "Cases completed" },
    { value: 27, label: "Consultants" },
    { value: 125, label: "Awards winning" },
    { value: "100%", label: "Satisfied customers" },
  ];

  return (
    <div className="grid grid-cols-2 mt-12 font-bold text-white lg:grid-cols-4 lg:mt-24">
      {statsData.map((stat, idx) => (
        <div key={idx} className="px-2 py-2 lg:px-6 lg:py-3">
          <h1 className="text-2xl md:text-4xl lg:text-6xl">{stat.value}</h1>
          <h3 className="sm:text-lg md:text-xl">{stat.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default Stats;
