"use client";
import InputText from "@/components/ui/forms/InputText";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with data:", formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
        <InputText
          name="name"
          placeholder="Enter your name *"
          value={formData.name}
          onChange={handleInputChange}
        />
        <InputText
          name="email"
          placeholder="Enter your email *"
          value={formData.email}
          onChange={handleInputChange}
        />
        <InputText
          name="country"
          placeholder="Enter your country *"
          value={formData.country}
          onChange={handleInputChange}
        />
        <InputText
          name="contact"
          placeholder="Enter your contact *"
          value={formData.contact}
          onChange={handleInputChange}
        />
        <InputText
          name="company"
          placeholder="Enter your company *"
          value={formData.company}
          onChange={handleInputChange}
        />
        <InputText
          name="designation"
          placeholder="Enter your designation *"
          value={formData.designation}
          onChange={handleInputChange}
        />
        <InputText
          name="message"
          placeholder="Enter your message *"
          value={formData.message}
          onChange={handleInputChange}
          classNames={"md:col-span-2"}
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 mt-5 text-sm text-white rounded bg-primary"
      >
        Send Enquiry
      </button>
    </form>
  );
};

export default ContactForm;
