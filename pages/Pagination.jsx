import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  onPageChange,
  currentPage,
  maxDisplayedPages,
}) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const getPageRange = () => {
    const pageRange = [];
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    let startPage = 1;
    let endPage = totalPages;
 
    if (totalPages > maxDisplayedPages) {
      const halfDisplayedPages = Math.floor(maxDisplayedPages / 2);
      if (currentPage <= halfDisplayedPages) {
        endPage = maxDisplayedPages;
      } else if (currentPage + halfDisplayedPages >= totalPages) {
        startPage = totalPages - maxDisplayedPages + 1;
      } else {
        startPage = currentPage - halfDisplayedPages;
        endPage = currentPage + halfDisplayedPages;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageRange.push(i);
    }

    return pageRange;
  };

  const pageRange = getPageRange();

  return (
    <div className="flex flex-wrap justify-between items-center mt-4 w-full md:w-[30%] mx-auto">
      <button
        className="border border-gray-400 py-2 px-4 rounded-full font-medium text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <div className="flex">
        {pageRange.map((page, index) => {
          const activeClass =
            currentPage === page ? "bg-[#DACCFF] text-black" : "";
          return (
            <button
              key={index}
              onClick={() => onPageChange(page)}
              className={`border border-gray-400 py-2 px-4 ml-2 rounded-full font-medium text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 ${activeClass}`}
            >
              {page}
            </button>
          );
        })}
      </div>
      <button
        className="border border-gray-400 py-2 px-4 rounded-full font-medium text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
