"use client";
import React, { useState } from "react";
import Button from "../ui/Button";
import { Download, HelpCircle, Tag, X } from "react-feather";
import CheckoutForm from "../checkout/components/CheckoutForm";
import { useRouter } from "next/navigation";

export default function Forms() {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const [type, setType] = useState("");
  const handleFormData = async (data) => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhc2lyLmJzbXJzdHVAZ21haWwuY29tIiwicm9sZSI6eyJuYW1lIjoiYWRtaW4iLCJpZCI6IjY0Mjg2ZjU5Y2E5ODU4MDJiMDQ2MDg4NSJ9LCJpYXQiOjE2OTM1NzUxMjMsImV4cCI6MTY5Mzc3NTEyM30.HT00apprh6glUevBzUYRQtTYjeQ2H-AGs5zDk2kb1SY"
    );
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
    const isAnyFieldEmpty = requiredFields.some((field) => !data[field]);

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
            body: JSON.stringify(data),
          }
        );
        const resData = await res.json();
        router.push("/thank-you");
      } catch (error) {
        console.log("error", error);
      }
      document.getElementById("request_form").close();
    }
  };
  return (
    <div className="flex flex-col gap-3 p-4 mx-4 mb-5 text-sm xl:text-base">
      <Button
        classNames={"text-sm"}
        onClick={() => {
          setType("Request Sample");
          document.getElementById("request_form").showModal();
        }}
      >
        <Download className="text-secondary" />
        <span className="uppercase w-full">Request sample</span>
      </Button>

      <Button
        onClick={() => {
          setType("Pre Order Enquiry");
          document.getElementById("request_form").showModal();
        }}
        classNames={"text-sm"}
      >
        <HelpCircle className="text-secondary" />{" "}
        <span className="uppercase w-full">Pre Order Enquiry</span>
      </Button>
      <Button
        onClick={() => {
          setType("Request discount");
          document.getElementById("request_form").showModal();
        }}
        classNames={"text-sm"}
      >
        <Tag className="text-secondary" />{" "}
        <span className="uppercase w-full">Request discount</span>
      </Button>
      <dialog id="request_form" className="modal">
        <div className="modal-box">
          <div className="flex justify-between">
            <h3 className="font-bold lg:ml-14 text-lg"> {type} </h3>
            <button
              onClick={() => document.getElementById("request_form").close()}
              className="border rounded-full p-1 hover:border-primary btn btn-circle btn-sm"
            >
              <X />
            </button>
          </div>
          <div className="modal-action">
            <CheckoutForm
              btnText={submitted ? "Submitting" : "Send Request"}
              handleFormData={handleFormData}
            />
          </div>
        </div>
      </dialog>
    </div>
  );
}
