import React from "react";

const Button = ({ children, type = "primary" }) => {
  const buttonStyles = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-primary",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
  };

  return (
    <button
      className={`flex items-center justify-center gap-1 px-4 py-2 rounded font-semibold hover:bg-opacity-90 hover:shadow duration-100 ${
        buttonStyles[type] || buttonStyles.primary
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
