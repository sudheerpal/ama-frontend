"use client";
import InputRadio from "@/components/ui/forms/InputRadio";
import InputText from "@/components/ui/forms/InputText";
import Image from "next/image";
import React, { useState } from "react";
import visaLogo from "@/assets/checkout/visaLogo.jpg";
import bankLogo from "@/assets/checkout/bankLogo.png";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    contact: "",
    company: "",
    designation: "",
    message: "",
    paymentMethod: "visa", // Default payment method
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentMethodChange = (e) => {
    setFormData({ ...formData, paymentMethod: e.target.value });
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
      {/* Payment method radio inputs */}
      <div className="my-4">
        <label className="block mb-2 font-semibold">Payment Method:</label>
        <div className="">
          <InputRadio
            name="paymentMethod"
            value="visa"
            checked={formData.paymentMethod === "visa"}
            onChange={handlePaymentMethodChange}
            label={
              <Image className="max-w-24" src={visaLogo} alt="bank image" />
            }
          />
          <InputRadio
            name="paymentMethod"
            value="bank"
            checked={formData.paymentMethod === "bank"}
            onChange={handlePaymentMethodChange}
            label={
              <Image className="max-w-24" src={bankLogo} alt="bank image" />
            }
          />
          {/* Add more radio inputs for other payment methods */}
        </div>
      </div>

      <button
        type="submit"
        className="px-4 py-2 mt-5 text-sm text-white rounded bg-primary"
      >
        Proceed To Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
