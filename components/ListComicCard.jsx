import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import timeDifference from "./timeDifference";
import { getLinkImage } from "../constant/getLinkImage";
import Link from "next/link";
import { useRouter } from "next/router";

function ListComicCard({ comic }) {
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  function firstWord(string) {
    const words = string.split(" ");
    return words[0];
  }
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return `${title.substring(0, maxLength)}...`;
    }
    return title;
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const toggleHeartColor = () => {
    setIsHeartClicked(!isHeartClicked);
  };
  function formatNumber(number) {
    if (number >= 1000) {
      return (number / 1000).toFixed(0) + "K";
    } else {
      return number;
    }
  }

  const router = useRouter();
  const navigateToComicDetail = () => {
    router.push(`/comics/${comic.url}`);
  };

  return (
    <div className=" w-[300px] rounded-xl hover:cursor-pointer hover:shadow-xl transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150 border-black border-2">
      <Link href={`/comics/${encodeURIComponent(comic.url)}`}>
        <a>
          <img
            onClick={navigateToComicDetail}
            className="h-[270px] w-full object-cover rounded-xl"
            src={getLinkImage(comic.avatar)}
            alt=""
          />
        </a>
      </Link>
      <div className="p-4 border-b-2 border-black">
        <h2 className="font-bold text-lg mb-2 ">
        {truncateTitle(capitalizeFirstLetter(comic.name), 30  )}
        </h2>
        {comic.chapters.map((chapter) => (
          <div className="flex flex-column justify-between" key={chapter.url}>
            <div className="font-bold">
               Chapter {(chapter.chapter)}
            </div>
            <div className="font-bold">
              {timeDifference(new Date(), new Date(chapter.updatedAt))}
            </div>
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
        <div className="font-bold">{formatNumber(comic.view)} lượt xem </div>
      </div>
    </div>
  );
}

export default ListComicCard;
