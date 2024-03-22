// InputText.js
import React from "react";

const InputText = ({ classNames, placeholder, name, value, onChange }) => {
  return (
    <div className={`text-sm ${classNames}`}>
      <input
        className={`w-full px-4 py-3 bg-gray-200 focus:outline-none`}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
