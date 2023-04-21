import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import timeDifference from "./timeDifference";

function ListComicCard({ comic }) {
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const toggleHeartColor = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  return (
    <div className=" w-[300px] rounded-xl hover:cursor-pointer hover:shadow-xl transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150 border-black border-2">
      <img
        className="h-[270px] object-cover rounded-xl"
        src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg"
        alt=""
      />
      <div className="p-4 border-b-2 border-black">
        <h2 className="font-bold text-lg mb-2 ">{capitalizeFirstLetter(comic.name)}</h2>
        {comic.chapters.map((chapter)=>(
          <div className="flex flex-column justify-between" key={chapter._id}>
            <div className="font-bold">Chapter {chapter.chapter}</div>
            <div className="font-bold">{timeDifference(new Date(), new Date(chapter.updatedAt))}</div>
          </div>
        ))}
          
        
      </div>
      <div className="flex flex-column justify-between p-4">
        <div
          className={`cursor-pointer inline-flex justify-center items-center rounded-full p-1  ${
            isHeartClicked ? "text-red-500" : ""
          }`}
          onClick={toggleHeartColor}
        >
          <FontAwesomeIcon icon={faHeart} className="text-2xl" />
        </div>
        <div className="font-bold">32M lượt xem </div>
      </div>
    </div>
  );
}

export default ListComicCard;
