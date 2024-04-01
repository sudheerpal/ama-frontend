"use client";
import InputText from "@/components/ui/forms/InputText";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { countryList } from "@/db/countryList";

const QueryForm = ({ btnText = "Submit", type = "MRF", slug = "" }) => {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    country: "",
    phone: "",
    company_name: "",
    designation: "",
    comment: "",
    industry: "MRF",
    service_type: type,
    // paymentMethod: "visa", // Default payment method
    report_page_link: `https://ama-admin.com/report/${slug}`,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // Check if any required field is empty
    const requiredFields = [
      "full_name",
      "email",
      "country",
      "phone",
      "company_name",
      "designation",
    ];
    const isAnyFieldEmpty = requiredFields.some((field) => !formData[field]);

    if (isAnyFieldEmpty) {
      alert("Please fill in all required fields.");
      return; // Stop submission
    } else {
      try {
        setSubmitted(true);
        const res = await fetch(
          `https://www.advancemarketreport.com/api/v1/lead`,
          {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(formData),
          }
        );
        const resData = await res.json();
        console.log("resData", resData);
        console.log("resData", formData);
        router.push("/thank-you");
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  return (
    <>
      <form className="mt-8" onSubmit={handleSubmit}>
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
          <select
            name="country"
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-200 focus:outline-none text-sm"
          >
            <option value={""}>Select Country</option>
            {countryList.map((country) => (
              <option key={country.value} value={country.caption}>
                {" "}
                {country.caption}{" "}
              </option>
            ))}
          </select>
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
          //   disabled={submitted}
          type="submit"
          className="px-4 py-2 mt-5 text-sm text-white rounded bg-primary"
        >
          {submitted ? "Submitting.." : btnText}
        </button>
      </form>
      <p className="text-sm mt-5">
        We do not share your information with anyone. However, we may send you
        emails based on your report interest from time to time. You may contact
        us at any time to opt-out.{" "}
      </p>
    </>
  );
};

export default QueryForm;
