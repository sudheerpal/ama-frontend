"use client";

import React, { useState, useEffect } from "react";
import { Search } from "react-feather";
import Link from "next/link"; // Import Link from Next.js

const ProductListSearch = ({ currentCategory }) => {
  // State to hold the input field value
  const [searchValue, setSearchValue] = useState("");

  // State to track whether the user is typing
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  // const categoryId = currentCategory?.parent?.id || currentCategory?.id;
  const categoryId = currentCategory?.id;

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
    setSearchValue("");
  };

  const sugesstionFetch = async (payload) => {
    try {
      const res = await fetch(`https://ama-admin.com/api/search`, {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: JSON.stringify(payload),
      });
      const { data } = await res.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      return [];
    }
  };

  // Effect to debounce input value changes and execute after a delay
  useEffect(() => {
    const debouncedSearch = debounce((value) => {
      // Check if input value meets criteria (minimum 3 letters excluding space)
      if (value.trim().replace(/\s/g, "").length >= 3) {
        console.log("Search value:", value);
        // Perform further processing here

        if (categoryId) {
          sugesstionFetch({
            catID: categoryId,
            query: value,
          });
        }

        setIsTyping(true);
      }
    }, 700);

    if (searchValue.trim().replace(/\s/g, "").length <= 3) {
      setIsTyping(false);
    }
    debouncedSearch(searchValue);

    return () => {
      clearTimeout(debouncedSearch);
    };
  }, [searchValue, categoryId]);

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
      {isTyping && (
        <div className="absolute left-0 p-4 text-sm text-black bg-white rounded shadow-md w-96 top-full">
          {suggestions?.map((sg, index) => (
            <Link
              key={index}
              href={`/reports/${sg?.slug}`}
              className="block mb-1 hover:text-blue-500"
              onClick={() => {
                setSearchValue("");
                setIsTyping(false);
              }}
            >
              {sg?.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListSearch;

// http://localhost:3000/industries/green-cement-market-437
// http://localhost:3000/reports/green-cement-market-437
