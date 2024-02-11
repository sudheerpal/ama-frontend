import React from "react";

const Button = ({ children }) => {
  return (
    <button className="flex items-center justify-center gap-1 px-4 py-2 text-white rounded bg-primary">
      {children}
    </button>
  );
};

export default Button;
