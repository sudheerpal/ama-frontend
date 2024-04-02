import React from "react";
import Link from "next/link";

const Pagination = ({ category, currentPage, totalPages }) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 3; // Adjust this number as needed

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    let startPage = Math.max(1, currentPage - 1); // Show one page before the current page
    let endPage = Math.min(totalPages, currentPage + 1); // Show one page after the current page

    // Show additional pages before the current page if there are enough pages available
    while (startPage > 1 && currentPage - startPage < maxPagesToShow / 2 - 1) {
      startPage--;
    }

    // Show additional pages after the current page if there are enough pages available
    while (
      endPage < totalPages &&
      endPage - currentPage < maxPagesToShow / 2 - 1
    ) {
      endPage++;
    }

    // Add ellipses if there are pages skipped before the first page
    if (startPage > 2) {
      pages.push(1, "...");
    }

    // Add page numbers within the range
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add ellipses if there are pages skipped after the last page
    if (totalPages - endPage > 1) {
      pages.push("...", totalPages);
    }

    return pages;
  };

  return (
    <div className="lg:my-12 lg:items-center lg:flex">
      <div className="block mx-auto rounded join w-fit">
        <Link
          href={`/industries?page=${currentPage == 1 ? 1 : currentPage - 1}`}
          passHref
        >
          <button className="join-item btn btn-sm" disabled={currentPage == 1}>
            {"<<"}
          </button>
        </Link>
        {generatePageNumbers().map((pageNumber, index) => (
          <React.Fragment key={index}>
            {pageNumber == "..." ? (
              <button className="join-item btn btn-sm" disabled>
                {pageNumber}
              </button>
            ) : (
              <Link
                href={`/industries?page=${pageNumber}`}
                passHref
                key={pageNumber}
              >
                <button
                  className={`join-item btn btn-sm md:w-12 ${
                    pageNumber == currentPage ? "btn-primary" : ""
                  }`}
                >
                  {pageNumber}
                </button>
              </Link>
            )}
          </React.Fragment>
        ))}
        <Link
          href={`/industries?page=${
            currentPage == totalPages ? totalPages : currentPage + 1
          }`}
          passHref
        >
          <button
            className="join-item btn btn-sm"
            disabled={currentPage == totalPages}
          >
            {">>"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
