import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-wrap justify-between items-center mt-4 w-full md:w-[30%] mx-auto">
      <button
        className="border border-gray-400 py-2 px-4 rounded-full font-medium text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <div className="flex">
        {pages.map((page, index) => {
          const activeClass = currentPage === page ? "bg-[#DACCFF] text-black" : "";
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={`border border-gray-400 py-2 px-4 rounded-full font-medium text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 ${activeClass}`}
            >
              {page}
            </button>
          );
        })}
      </div>
      <button
        className="border border-gray-400 py-2 px-4 rounded-full font-medium text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
