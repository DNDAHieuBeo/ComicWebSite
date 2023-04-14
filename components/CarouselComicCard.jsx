import React from "react";

const CarouselComicCard = ({ item }) => {
  return (
    <div className="w-[220px] p-4 bg-white rounded-xl hover:cursor-pointer hover:shadow-xl transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150 border-black border-2">
      <img className="h-[170px] object-cover rounded-xl" src={item.image} alt="" />
      <div className="p-2">
        <h2 className="font-bold text-lg mb-2 ">{item.title}</h2>
      </div>
      <div className="">{item.views} views</div>
      <div className="font-bold">Chapter {item.Chapter}</div>
    </div>
  );
};

export default CarouselComicCard;
