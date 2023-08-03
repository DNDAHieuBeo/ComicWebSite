import React, { useEffect, useState } from "react";
import ListComicCard from "./ListComicCard";
import Pagination from "./Pagination";
import { fetchComics } from "../constant/fetchData";

function ListComic({ comics, category, displayedData, setDisplayedData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [filteredComics, setFilteredComics] = useState([]);

  useEffect(() => {
    setFilteredComics(comics);
  }, [comics]);

  useEffect(() => {
    if (category) {
      const filtered = comics.filter((comic) =>
        comic.categories.some((cat) => cat.url === category)
      );
      setFilteredComics(filtered);
      setCurrentPage(1);
    } else {
      setFilteredComics(comics);
    }
  }, [category, comics]);

  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    if (filteredComics && Array.isArray(filteredComics)) {
      setDisplayedData(filteredComics.slice(indexOfFirstPost, indexOfLastPost));
    }
  }, [currentPage, filteredComics, postsPerPage]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="py-4 relative">
      {!displayedData ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      ) : displayedData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto justify-items-center w-full md:w-[85%]">
          {displayedData.map((comic) => (
            <ListComicCard comic={comic} key={comic._id} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          Không có truyện nào trong danh mục này
        </div>
      )}
      <div className="p-4">
        <Pagination
          totalPosts={filteredComics.length}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          className="mt-4 "
        />
      </div>
    </div>
  );
}

export default ListComic;
