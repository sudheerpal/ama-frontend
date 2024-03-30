"use client";

import React, { useState, useEffect } from "react";
import { Search } from "react-feather";
import Link from "next/link"; // Import Link from Next.js

const ProductListSearch = () => {
  // State to hold the input field value
  const [searchValue, setSearchValue] = useState("");
  // State to track whether suggestions are visible
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Debounce function
  const debounce = (func, delay) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Function to handle input field changes
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use the searchValue state here for further processing
    console.log("Search value:", searchValue);
  };

  // Effect to debounce input value changes and execute after a delay
  useEffect(() => {
    const debouncedSearch = debounce((value) => {
      // Check if input value meets criteria (minimum 3 letters excluding space)
      if (value.trim().replace(/\s/g, "").length >= 3) {
        console.log("Search value:", value);
        // Perform further processing here
        setShowSuggestions(true);
      }
    }, 700);

    if (searchValue.trim().replace(/\s/g, "").length <= 3) {
      setShowSuggestions(false);
    }
    debouncedSearch(searchValue);

    return () => {
      clearTimeout(debouncedSearch);
    };
  }, [searchValue]);

  // Dummy suggestion links
  const suggestionLinks = ["Suggestion 1", "Suggestion 2", "Suggestion 3"];

  return (
    <div className="relative py-2 bg-secondary">
      <form onSubmit={handleSubmit}>
        <input
          className="w-full px-4 py-2 pr-12 text-gray-800 placeholder-gray-500 bg-inherit focus:outline-none"
          type="search"
          placeholder="Search Reports..."
          value={searchValue}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="absolute top-0 right-0 h-full px-1 text-[#002E5B]"
        >
          <Search />
        </button>
      </form>
      {showSuggestions && ( // Render suggestions if showSuggestions is true
        <div className="absolute left-0 p-4 text-sm text-black bg-white rounded shadow-md w-96 top-full">
          {suggestionLinks.map((link, index) => (
            <Link
              key={index}
              href={link}
              className="block mb-1 hover:text-blue-500"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListSearch;
