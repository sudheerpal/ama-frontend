// InputText.js
import React from "react";

const InputText = ({ classNames, placeholder, name, value, onChange }) => {
  return (
    <input
      className={`w-full px-4 py-3 bg-gray-200 focus:outline-none text-sm ${classNames}`}
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputText;
