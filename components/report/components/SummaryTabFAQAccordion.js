"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Minus, Plus } from "react-feather";

const SummaryTabFAQAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-0 my-2 bg-gray-200 border rounded collapse">
      <input
        className="p-0"
        onClick={() => setIsOpen(!isOpen)}
        type="checkbox"
      />
      <div className="flex items-center justify-between px-4 py-1 font-medium collapse-title ">
        <p>How much was the U.S life science analytics market worth?</p>
        <span>{isOpen ? <Minus /> : <Plus />}</span>
      </div>
      <div className="collapse-content">
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          quibusdam consectetur soluta quisquam sequi? Tenetur consequatur qui,
          commodi totam in earum impedit atque pariatur, debitis iure soluta
          saepe repudiandae iusto reprehenderit alias quidem doloremque
          voluptatem ipsam aperiam. Sunt nisi eligendi aperiam veniam dolorum
          similique eveniet. Accusamus minus praesentium soluta repellendus.
        </p>
      </div>
    </div>
  );
};

export default SummaryTabFAQAccordion;
