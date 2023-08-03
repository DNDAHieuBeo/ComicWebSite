import React, { useEffect, useState } from "react";
import Header from "./Headers";
import CarouselComic from "./CarouselComic";
import ComicCategory from "./ComicCategory";
import ListComic from "./ListComic";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";



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
