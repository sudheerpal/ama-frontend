import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Function to generate an array of page numbers around the current page
  const generatePageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5; // Maximum number of pages to show

    // Calculate the range of page numbers to display
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    // Adjust the startPage and endPage if needed to ensure maxPagesToShow is displayed
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    // Generate the array of page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="my-12">
      <div className="block mx-auto rounded join w-fit">
        {/* Previous page button */}
        <button
          className="join-item btn btn-sm"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          {"<<"}
        </button>

        {/* Page buttons */}
        {generatePageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            className={`join-item btn btn-sm md:w-12 ${
              pageNumber === currentPage ? "btn-primary" : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
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
    </div>
  );
};

export default Pagination;
