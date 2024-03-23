"use client";
import React, { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";

const Stats = () => {
  const statsData = [
    { value: 321, label: "Cases completed" },
    { value: 27, label: "Consultants" },
    { value: 125, label: "Awards winning" },
    { value: 100, label: "Satisfied customers" },
  ];

  const [isCounting, setIsCounting] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // When 50% of the target is visible in the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsCounting(true);
        }
      });
    }, options);

    const currentRef = countRef.current; // Capture the current value of countRef.current

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-2 mt-12 font-bold text-white lg:grid-cols-4 lg:mt-24">
      {statsData.map((stat, idx) => (
        <div key={idx} className="px-2 py-2 lg:px-6 lg:py-3">
          <h1 ref={countRef} className="text-2xl md:text-4xl lg:text-6xl">
            {isCounting ? (
              <CountUp end={+stat.value}>{stat.value}</CountUp>
            ) : (
              stat.value
            )}
            {idx == 3 && <span>%</span>}
          </h1>
          <h3 className="sm:text-lg md:text-xl">{stat.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default Stats;
