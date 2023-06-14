import React, { useEffect, useState } from "react";
import Header from "../components/Headers";
import CarouselComic from "../components/CarouselComic";
import ComicCategory from "../components/ComicCategory";
import ListComic from "../components/ListComic";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";


function MainPage() {
  return (
    <div>
      <Header />
      <CarouselComic />
      <div className="relative">
        <ComicCategory />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default MainPage;
