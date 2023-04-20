import React, { useState } from "react";
import category from "./categoryIcon.json";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function ComicCategory() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-wrap justify-center md:justify-between px-4 md:px-24 py-4">
      <button className="hover:border-2 hover:border-black p-2 rounded-3xl hover:shadow-xl transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150 mb-2 md:mb-0">
        <div className="h-4 font-bold">Tất cả</div>
      </button>
      {category.slice(0, 10).map((item) => (
        <button
          key={item.key}
          className="w-22 hover:border-2 hover:border-black p-2 rounded-3xl hover:shadow-xl transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150 mx-1 md:mx-0 mb-2 md:mb-0"
        >
          <img alt="" src={item.title} className="h-4" />
        </button>
      ))}
      <button
        className="flex items-center p-2 rounded-3xl transform transition-all duration-150 z-50 mb-2 md:mb-0"
        onClick={() => setShowMore(!showMore)}
      >
        <div className="h-4 font-bold">Show more</div>
        {showMore ? (
          <FaAngleUp className="mt-2 ml-1" />
        ) : (
          <FaAngleDown className="mt-2 ml-1" />
        )}
        {showMore && (
          <div className="justify-between">
          {category.slice(10).map((item) => (
            <button
              key={item.key}
              className="w-22 border-2 border-transparent hover:border-2 hover:border-black p-2 rounded-3xl hover:shadow-xl transform transition-all duration-150 mx-1 md:mx-0 mb-2 md:mb-0"
            >
              <img alt="" src={item.title} className="h-4" />
            </button>
          ))}
          
          </div>
        )}
      </button>
    </div>
  );
}

export default ComicCategory;
