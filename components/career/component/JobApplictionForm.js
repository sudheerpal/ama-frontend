"use client";
import InputText from "@/components/ui/forms/InputText";
import React, { useState } from "react";

const JobApplictionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    resume: null,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle resume file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      resume: file,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(formData);
    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      contactNo: "",
      resume: null,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputText
        classNames="mb-4"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <InputText
        classNames="mb-4"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputText
        classNames="mb-4"
        name="contactNo"
        placeholder="Contact Number"
        value={formData.contactNo}
        onChange={handleChange}
      />
      <div className="mb-4">
        <label htmlFor="resume" className="block mb-2 font-semibold">
          Upload Resume
        </label>
        <input
          type="file"
          id="resume"
          name="resume"
          onChange={handleFileChange}
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 font-bold rounded text-primary bg-secondary hover:text-gray-400"
      >
        Submit Application
      </button>
    </form>
  );
};

export default JobApplictionForm;
