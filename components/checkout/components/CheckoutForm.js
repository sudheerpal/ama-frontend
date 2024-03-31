"use client";
import InputRadio from "@/components/ui/forms/InputRadio";
import InputText from "@/components/ui/forms/InputText";
import Image from "next/image";
import React, { useState } from "react";
import visaLogo from "@/assets/checkout/visaLogo.jpg";
import bankLogo from "@/assets/checkout/bankLogo.png";
import { usePathname } from "next/navigation";

const CheckoutForm = ({ btnText = "Submit", handleFormData }) => {
  const pathName = usePathname();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    country: "",
    phone: "",
    company_name: "",
    designation: "",
    comment: "",
    industry: "MRF",
    service_type: "MRF",
    paymentMethod: "visa", // Default payment method
    report_page_link: `https://ama-admin.com${pathName}`,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormData(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
        <InputText
          name="full_name"
          placeholder="Enter your name *"
          value={formData.name}
          onChange={handleInputChange}
          required={true}
        />
        <InputText
          name="email"
          placeholder="Enter your email *"
          value={formData.email}
          onChange={handleInputChange}
          required={true}
        />
        <InputText
          name="country"
          placeholder="Enter your country *"
          value={formData.country}
          onChange={handleInputChange}
          required={true}
        />
        <InputText
          name="phone"
          placeholder="Enter your contact *"
          value={formData.contact}
          onChange={handleInputChange}
          required={true}
        />
        <InputText
          name="company_name"
          placeholder="Enter your company *"
          value={formData.company}
          onChange={handleInputChange}
          required={true}
        />
        <InputText
          name="designation"
          placeholder="Enter your designation *"
          value={formData.designation}
          onChange={handleInputChange}
          required={true}
        />
        <InputText
          name="comment"
          placeholder="Enter your message *"
          value={formData.message}
          onChange={handleInputChange}
          classNames={"md:col-span-2"}
        />
      </div>
      {/* Payment method radio inputs */}
      {/* <div className="my-4">
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
        </div>
      </div> */}

      <button
        type="submit"
        className="px-4 py-2 mt-5 text-sm text-white rounded bg-primary"
      >
        {btnText}
      </button>
    </form>
  );
};

export default CheckoutForm;
