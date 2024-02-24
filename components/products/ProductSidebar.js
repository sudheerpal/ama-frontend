"use client";
import Link from "next/link";
import { useState } from "react";
import { Minus, Plus } from "react-feather";

const ProductSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h3 className="mb-5 text-xl font-bold text-primary">Indutry Experties</h3>
      <div>
        {"123456789".split("").map((el) => (
          <div key={el} className="border rounded collapse">
            <input onClick={() => setIsOpen(!isOpen)} type="checkbox" />
            <div className="flex items-center justify-between px-4 py-1 font-medium collapse-title">
              <p>HealthCare</p>
              <span>{isOpen ? <Minus /> : <Plus />}</span>
            </div>
            <div className="collapse-content">
              <ul className="mt-2 space-y-2">
                <li className="text-sm text-gray-400 hover:text-primary">
                  <Link href="">Medical device</Link>
                </li>
                <li className="text-sm text-gray-400 hover:text-primary">
                  <Link href="">Pharmaceutical</Link>
                </li>
                <li className="text-sm text-gray-400 hover:text-primary">
                  <Link href="">Healthcare IT</Link>
                </li>
                <li className="text-sm text-gray-400 hover:text-primary">
                  <Link href="">Pipeline Review</Link>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSidebar;
