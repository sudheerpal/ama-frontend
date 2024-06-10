"use client";
import React from "react";
const CustomContainer = ({ children, classNames = "" }) => {
  return (
    <div
      className={
        "w-full max-w-[1440px] mx-auto px-5 lg:px-10" + " " + classNames
      }
    >
      {children}
    </div>
  );
};

export default CustomContainer;
