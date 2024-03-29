import React from "react";
import Link from "next/link";
const Pagination = ({ currentPage, totalPages, setLimit, onPageChange }) => {
  // Function to generate an array of page numbers around the current page
  const generatePageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 3; // Maximum number of pages to show

    // Calculate the range of page numbers to display
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    // Adjust the startPage and endPage if needed to ensure maxPagesToShow is displayed
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    // Special case handling for very first pages
    if (startPage > 2) {
      pages.push(1, 2, "...");
    } else if (startPage === 2) {
      pages.push(1, 2);
    }

    // Generate the array of page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Special case handling for very last pages
    if (totalPages - endPage > 1) {
      pages.push("...", totalPages - 1, totalPages);
    } else if (totalPages - endPage === 1) {
      pages.push(totalPages - 1, totalPages);
    }

    return pages;
  };

  const handlePageChange = (e) => {
    setTimeout(() => {
      onPageChange(Number(e.target.value));
    }, 1000);
  };

  return (
    <div className="my-12 lg:items-center lg:flex">
      <div className="block mx-auto rounded join w-fit">
        {/* Previous page button */}
        {/* <button
          className="join-item btn btn-sm"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          {"<<"}
        </button> */}
        <Link
          href={"/page?=1"}
          className="join-item btn btn-sm"
          // disabled={currentPage === 1}
          // onClick={() => onPageChange(currentPage - 1)}
        >
          {"<<"}
        </Link>

        {/* Page buttons */}
        {generatePageNumbers().map((pageNumber, index) => (
          <React.Fragment key={index}>
            {pageNumber === "..." ? (
              <button className="join-item btn btn-sm" disabled>
                {pageNumber}
              </button>
            ) : (
              <button
                className={`join-item btn btn-sm md:w-12 ${
                  pageNumber === currentPage ? "btn-primary" : ""
                }`}
                onClick={() =>
                  typeof pageNumber === "number"
                    ? onPageChange(pageNumber)
                    : null
                }
              >
                {pageNumber}
              </button>
            )}
          </React.Fragment>
        ))}

        {/* Next page button */}
        <button
          className="join-item btn btn-sm"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          {">>"}
        </button>
      </div>
      {/* <div className="flex gap-5 mx-auto my-2 w-fit">
        <input
          type="number"
          placeholder="Jump to Page"
          className="w-full rounded input input-bordered input-sm focus:outline-none"
          onChange={(e) => handlePageChange(e)}
        />
        <select
          onChange={(e) => setLimit(+e.target.value)}
          className="w-full rounded select select-bordered select-sm focus:outline-none"
        >
          <option disabled selected>
            Reports Per Page
          </option>
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
      </div> */}
    </div>
  );
};

export default Pagination;
