"use client";
import { useDebounce } from "@/utils/hooks";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Search } from "react-feather";

const NavbarSearch = () => {
  // State to hold the input field value
  const [searchValue, setSearchValue] = useState("");

  // State to track whether the input is focused
  const [isInputFocused, setIsInputFocused] = useState(false);

  // State to track whether the user is typing
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  // Function to handle input field changes
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue("");
  };

  // Function to handle input focus
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  // Function to handle input blur
  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const sugesstionFetch = async (payload) => {
    try {
      const res = await fetch(`https://ama-admin.com/api/search`, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const { data } = await res.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      return [];
    }
  };

  // Debounce the search value
  const debouncedSearchValue = useDebounce(searchValue, 700);

  // Effect to handle debounced search value changes
  useEffect(() => {
    // Check if input value meets criteria (minimum 3 letters excluding space)
    if (debouncedSearchValue.trim().replace(/\s/g, "").length >= 3) {
      console.log("Search value:", debouncedSearchValue);
      // Perform further processing here

      sugesstionFetch({
        catID: null,
        query: debouncedSearchValue,
      });

      setIsTyping(true);
    } else {
      setIsTyping(false);
      setSuggestions([]); // Clear suggestions if search value is less than 3 characters
    }
  }, [debouncedSearchValue]);

  return (
    <div className="relative z-20 py-2 bg-secondary">
      <form onSubmit={handleSubmit}>
        <input
          className="w-full px-4 py-2 pr-12 text-gray-800 placeholder-gray-500 bg-inherit focus:outline-none"
          type="search"
          placeholder="Search Reports..."
          value={searchValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <button
          type="submit"
          className="absolute top-0 right-0 h-full px-1 text-primary"
        >
          <Search />
        </button>
      </form>
      {isInputFocused && isTyping && (
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

export default NavbarSearch;
