import React, { useEffect, useState } from "react";
import {
  fetchCategories,
  fetchComicByCategoryId,
  fetchComics,
} from "../../constant/fetchData";

import ListComic from "./ListComic";

const ComicCategory = ({}) => {
  const [categories, setCategories] = useState([]);
  const [comics, setComics] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const comicsData = await fetchComics(); 
        const categoriesData = await fetchCategories();
        if (comicsData) {
          setComics(comicsData.results);
          setDisplayedData(comicsData.results);
          console.log(comicsData);
        }
        if (categoriesData) {
          setCategories(categoriesData);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleCategoryClick = async (categoryId) => {
    try {
      
      const comicsData = await fetchComicByCategoryId(categoryId);
      setComics(comicsData);
      setDisplayedData(comicsData);
    } catch (error) {
      console.log(error);
    }
    
  };

  const handleListComicClick = async () => {
    try {
      const comicData = await fetchComics();  
      setComics(comicData.results);
      setDisplayedData(comicData.results);
    } catch (error) {
      console.log(error);
    } 
  };

  return (
    <div>
    <div className="flex flex-wrap justify-center md:justify-between px-4 md:px-24 py-4">
    <button
      className="hover:border-2 hover:border-black p-2 rounded-3xl hover:shadow-xl transition-all duration-150 mb-2 md:mb-0 text-center pb-4"
      style={{ width: "120px" }} // Set a fixed width for the button
      onClick={() => {
        handleListComicClick();
      }}
    >
      <div className="h-3 font-bold">Tất cả</div>
    </button>
    {categories.map((category) => (
      <button
        key={category._id}
        onClick={() => {
          handleCategoryClick(category._id);
        }}
        className="border-2 border-none p-2 rounded-3xl hover:shadow-xl transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150 mb-2 sm:mb-0"
      >
        {category.name}
      </button>
    ))}
  </div>
  
      <ListComic
        displayedData={displayedData}
        comics={comics}
        category={selectedCategory}
        setDisplayedData={setDisplayedData}
       
      />
    </div>
  );
};

export default ComicCategory;
