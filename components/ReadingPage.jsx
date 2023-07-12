import React from "react";
import { fetchComicById } from "../constant/fetchData";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { fetchChapterById } from "../constant/fetchData";
import { getLinkImage } from "../constant/getLinkImage";

function ReadingPage({ url }) {
  const [comic, setComic] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 1; 
  const maxDisplayedPages = 4;

  useEffect(() => {
    const fetchComic = async () => {
      const data = await fetchComicById(url);
      if (data) {
        setComic(data);
      }
    };

    fetchComic();
  }, [url]);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [chapter, setChapter] = useState();
  const chapterId = comic?.chapters[currentPage - 1]._id;
  useEffect(() => {
    const fetchChapter = async () => {
      const data = await fetchChapterById(chapterId);
      if (data) {
        setChapter(data);
        console.log(data);
      }
    };

    fetchChapter();
    window.scrollTo(0, 0); // Scroll to the top of the page when chapter changes
  }, [chapterId]);

  return (
    <div className=" justify-center bg-black w-full">
      {chapter ? (
        <div className="w-[40%] m-auto">
          {chapter.images.map((image, index) => (
            <img
              key={index}
              src={getLinkImage(image)}
              alt={`Image ${index + 1}`}
              className="w-[100%]"
            />
          ))}
          <div className="flex justify-center mt-5">
            <Pagination
              totalPosts={comic.chapters.length}
              postsPerPage={postsPerPage}
              maxDisplayedPages={maxDisplayedPages}
              onPageChange={onPageChange}
              currentPage={currentPage}
              classNames={{
                container: "flex space-x-2",
                page: "py-2 px-4 rounded bg-blue-500 text-white",
                activePage: "py-2 px-4 rounded bg-blue-700 text-white",
              }}
            />
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ReadingPage;
