import React, { useState, useEffect } from "react";
import ListComicCard from "./ListComicCard";
import Pagination from "./Pagination";
import { fetchComics } from "../constant/fetchData";

function ListComic({ category }) {
  const [comics, setComics] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const [filteredComics, setFilteredComics] = useState([]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchComics();
        if (data) {
          setComics(data.results);
        }
      } catch (e) {
        // handle error
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (category) {
      const filtered = comics.filter((comic) =>
        comic.categories.some((comic) => comic.url === category)
      );
      setFilteredComics(filtered);
      setCurrentPage(1);
    } else {
      setFilteredComics(comics);
    }
  }, [category, comics]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredComics.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto justify-items-center w-full md:w-[85%]">
        {currentPosts.map((comic) => (
          <ListComicCard comic={comic} key={comic._id} />
        ))}
      </div>
      <Pagination
        totalPosts={filteredComics.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        className="mt-4"
      />
    </div>
  );
}

export default ListComic;
