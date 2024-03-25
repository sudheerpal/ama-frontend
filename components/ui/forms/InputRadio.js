import React from "react";

const InputRadio = ({ name, value, checked, onChange, label }) => {
  return (
    <div className="flex items-center my-2">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mr-2 radio radio-primary"
      />
      <label htmlFor={value} className="text-xl font-bold">
        {label}
      </label>
    </div>
  );
};

export default InputRadio;
