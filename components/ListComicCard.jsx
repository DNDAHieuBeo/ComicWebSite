import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { getLinkImage, decodeImageUrl } from "../constant/fetchData";

function ListComicCard({ comic, index }) {
  console.log(comic);
  const decodedUrl = decodeImageUrl(comic.avatar);
  const imageUrl = getLinkImage(decodedUrl);
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const toggleHeartColor = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  return (
    <div className=" w-[300px] rounded-xl hover:cursor-pointer hover:shadow-xl transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150 border-black border-2">
      <Link href={`/comic/${index}`}>
        <a>
          
        </a>
      </Link>
      <div className="p-4 border-b-2 border-black">
        <h2 className="font-bold text-lg mb-2 ">{comic.name}</h2>
        <div className="flex justify-between mb-4">
          <div className="flex flex-col">
            <span className="font-bold">Chap mới:</span>
            <span>{comic.chapters.chapter}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">Lượt xem:</span>
            <span>{comic.chapter.view}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <img className="h-8 w-8 rounded-full object-cover" src={imageUrl} />
            <span className="ml-2">{item.author.name}</span>
          </div>
          <div
            className="flex items-center cursor-pointer inline-flex justify-center rounded-full p-1"
            onClick={toggleHeartColor}
          >
            <FontAwesomeIcon
              icon={faHeart}
              className={`text-2xl ${isHeartClicked ? "text-red-600" : ""}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListComicCard;
