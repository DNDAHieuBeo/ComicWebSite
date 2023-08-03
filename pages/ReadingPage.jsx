import React from "react";
import { fetchComicById } from "../constant/fetchData";
import { useState, useEffect, useRef } from "react"; // Import useRef
import Pagination from "./Pagination";
import { fetchChapterById } from "../constant/fetchData";
import { getLinkImage } from "../constant/fetchData";
import Header from "./Headers";

function ReadingPage({ url }) {
  const [comic, setComic] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);
  const [isPaginationExpanded, setIsPaginationExpanded] = useState(false);
  const [scrollTop,setScrollTop] = useState(0)
  const paginationRef = useRef(null);
  const postsPerPage = 1;

  useEffect(() => {
    const fetchComic = async () => {
      const data = await fetchComicById(url);
      if (data) {
        setComic(data);
      }
    };

    fetchComic();
  }, [url]);

  const totalPages = comic?.chapters.length || 1;
  const progress = ((currentPage - 1) / (totalPages - 1)) * 100;

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
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
  }, [chapterId]);

  const handleClickHeader = () => {
    setIsHeaderExpanded((prevState) => !prevState);
    setIsPaginationExpanded((prevState) => !prevState);
  };
   
  const handleScroll = () =>{
    setIsHeaderExpanded((prevState) => !prevState);
    setIsPaginationExpanded((prevState) => !prevState);
  }

  const onScroll =()=>{
    const winScroll =document.documentElement.scrollTop;
    const height =document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (winScroll/height) * 100

    setScrollTop(scrolled)

  }

  useEffect(()=>{
    window.addEventListener("scroll",onScroll )

    return () => window.removeEventListener("scroll",onScroll)
  },[])

  return (
    <div className="justify-center bg-[#141414] w-full relative " >
      <div className=" h-1 sticky top-0 left-0 z-1 w-full"><div className="h-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" style={{width:`${scrollTop}%`}}></div></div>
      <div
        className={`fixed top-0 left-0 w-full h-[250px] transition-all duration-300 ${
          isHeaderExpanded ? "top-[-250px]" : "top-0"
        }`}
        style={{
          // Hide the scrollbar for supported browsers
          scrollbarWidth: "none",
          // Handle Mozilla Firefox scrollbar separately
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            width: 0,
          },
        }}
      >
        <Header />
      </div>
      <div className="w-full h-auto z-50" onClick={handleClickHeader} onScrollCapture={handleClickHeader}>
        {chapter ? (
          <div className="w-full md:w-[40%] m-auto">
            {chapter.images.map((image, index) => (
              <img
                key={index}
                src={getLinkImage(image)}
                alt={`Image ${index}`}
                className="w-[100%]"
              />
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div
        className={`fixed bottom-0 left-0 w-full bg-white border-t-4 border-t-black py-4 h-[100px] transition-all duration-300 ${
          isPaginationExpanded ? "bottom-[-100px]" : "bottom-0"
        }`}
      >
        <Pagination
          style={{ width: "80%" }}
          totalPosts={comic?.chapters.length}
          postsPerPage={postsPerPage}
          maxDisplayedPages={3}
          onPageChange={onPageChange}
          currentPage={currentPage}
          classNames={{
            container: "flex space-x-2 w-[80%]",
            page: "py-2 px-4 rounded bg-blue-500 text-white w-[80%]",
            activePage: "py-2 px-4 rounded bg-blue-700 text-white",
          }}
        />
        
      </div>
    </div>
  );
}

export default ReadingPage;
