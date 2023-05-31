import React, { useEffect, useState } from "react";
import Header from "../components/Headers";
import CarouselComic from "../components/CarouselComic";
import ComicCategory from "../components/ComicCategory";
import ListComic from "../components/ListComic";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { fetchComics, fetchCategories } from "../constant/fetchData";

function MainPage() {
  const handleListComicClick = async () => {
    try {
      const comicData = await fetchComics();
      // Update the state or perform other operations with the comicData
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <CarouselComic />
      <div className="relative">
        <ComicCategory handleListComicClick={handleListComicClick} />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
export default MainPage;
