import React from "react";
import Link from "next/link";

const Pagination = ({ category, currentPage, totalPages }) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 3;

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    if (startPage > 2) {
      pages.push(1, 2, "...");
    } else if (startPage == 2) {
      pages.push(1, 2);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (totalPages - endPage > 1) {
      pages.push("...", totalPages - 1, totalPages);
    } else if (totalPages - endPage == 1) {
      pages.push(totalPages - 1, totalPages);
    }

    return pages;
  };

  return (
    <div className="my-12 lg:items-center lg:flex">
      <div className="block mx-auto rounded join w-fit">
        <Link href={`/industries?page=${currentPage - 1}`} passHref>
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
        <Link href={`/industries?page=${currentPage + 1}`} passHref>
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
