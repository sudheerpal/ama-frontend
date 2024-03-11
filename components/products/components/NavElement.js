"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Minus, Plus } from "react-feather";

const NavElement = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-0 border rounded collapse hover:bg-primary hover:text-white">
      <input
        className="p-0"
        onClick={() => setIsOpen(!isOpen)}
        type="checkbox"
      />
      <div className="flex items-center justify-between px-4 py-1 font-medium collapse-title">
        <p>HealthCare</p>
        <span>{isOpen ? <Minus /> : <Plus />}</span>
      </div>
      <div className="collapse-content">
        <ul className="mt-2 space-y-2">
          <li className="text-sm text-gray-400 hover:text-white">
            <Link href="">Medical device</Link>
          </li>
          <li className="text-sm text-gray-400 hover:text-white">
            <Link href="">Pharmaceutical</Link>
          </li>
          <li className="text-sm text-gray-400 hover:text-white">
            <Link href="">Healthcare IT</Link>
          </li>
          <li className="text-sm text-gray-400 hover:text-white">
            <Link href="">Pipeline Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavElement;
