import React, { Component } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Autoplay } from "swiper";
import data from "./mock.json";
import CarouselComicCard from "./CarouselComicCard";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const CarouselComic = () => {
  const [swiper, setSwiper] = useState(null);

  const handlePrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  return (
    <div className="w-full flex flex-col items-center py-2 bg-[#DACCFF] border-t-black border-b-black border-4">
      {/* Other elements */}
      <div className="carousel-wrapper w-full flex flex-row justify-center items-center px-4">
        <button onClick={handleNext} className="hidden md:block">
          {/* Button content */}
        </button>
        <Swiper
          className="w-full md:w-[80%] mx-auto"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          autoplay={{ delay: 1000 }}
          pagination={{ clickable: true }}
          onSwiper={setSwiper}
          onSlideChange={() => console.log("slide change")}
        >
          {data.map((item) => (
            <SwiperSlide key={item.top} className="py-8">
              <CarouselComicCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={handlePrev} className="hidden md:block">
          {/* Button content */}
        </button>
      </div>
    </div>
  );
};
export default CarouselComic;
