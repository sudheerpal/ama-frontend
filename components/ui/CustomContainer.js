import React from "react";

const CustomContainer = ({ children, classNames = "" }) => {
  return (
    <div className={"w-full max-w-[1440px] mx-auto " + classNames}>
      {children}
    </div>
  );
};

export default CustomContainer;
