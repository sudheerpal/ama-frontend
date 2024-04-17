// InputText.js
import React from "react";

const InputText = ({
  classNames,
  placeholder,
  name,
  value,
  onChange,
  required,
}) => {
  return (
    <input
      className={`w-full px-4 py-3 bg-accent focus:outline-none text-sm ${classNames}`}
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default InputText;
