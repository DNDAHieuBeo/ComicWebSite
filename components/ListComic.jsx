import React, { useState, useEffect } from "react";
import ListComicCard from "./ListComicCard";
import Pagination from "./Pagination"; // Import the Pagination component
import { fetchComics } from "../constant/fetchData";

function ListComic() {
  const [comics, setComics] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

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
        // hanlde user
      }
    };

    fetchData();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = comics.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto justify-items-center w-full md:w-[85%]">
        {currentPosts.map((comic) => (
          <ListComicCard comic={comic} key={comic._id} comics={currentPosts}/>
        ))}
      </div>
      <Pagination
      totalPosts={comics.length}
      postsPerPage={postsPerPage}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
  
      />
    </div>
  );
}

export default ListComic;
