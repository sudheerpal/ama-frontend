"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Minus, Plus } from "react-feather";

const NavElement = ({ parentCategory, subCategoriesOfParent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { label, link } = parentCategory;
  // console.log(subCategoriesOfParent);

  return (
    <div className="p-0 border rounded collapse hover:bg-primary hover:text-white">
      <input
        className="p-0"
        onClick={() => setIsOpen(!isOpen)}
        type="checkbox"
      />
      <div className="flex items-center justify-between px-4 py-1 font-medium collapse-title">
        <Link className="z-10 hover:font-bold" href={`/industries/${link}`}>
          {label}
        </Link>
        <span>{isOpen ? <Minus /> : <Plus />}</span>
      </div>
      {subCategoriesOfParent?.length > 0 && (
        <div className="collapse-content">
          <ul className="mt-2 space-y-2">
            {subCategoriesOfParent?.map((ct) => (
              <li key={ct.id} className="text-sm text-neutral hover:text-white">
                <Link href={`/industries/${ct.link}`}>{ct.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavElement;
