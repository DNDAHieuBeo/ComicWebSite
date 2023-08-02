import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import timeDifference from "./timeDifference";
import { getLinkImage } from "../../constant/fetchData";
import Link from "next/link";
import { useRouter } from "next/router";

function CarouselComicCard({ comic, index }) {
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const router = useRouter();

  const navigateToComicDetail = () => {
    router.push(`/comics/${comic.url}`);
  };

  function formatNumber(number) {
    if (number >= 1000) {
      return (number / 1000).toFixed(0) + "K";
    } else {
      return number;
    }
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

  return (
    <Link href={`/comics/${encodeURIComponent(comic.url)}`}>
      <div className="w-[220px] p-4 bg-white rounded-xl hover:cursor-pointer  transition-all duration-150 border-black border-2 pt-8">
        <div className="font-bold text-base m-auto w-24  bg-[#EAFA34] text-center rounded-3xl border-2 border-black h-10 mb-4 ">
          {comic.rank === 1 && (
            <div className="w-20 font-bold p-1 flex flex-row mx-auto justify-between ">
              <img src="./logoAchive.png" alt="" className="w-7" />
              Top 1
            </div>
          )}
          {comic.rank !== 1 && (
            <div className="font-bold p-1 text-base">Top {comic.rank}</div>
          )}
        </div>
        <img
          onClick={navigateToComicDetail}
          className="h-[170px] w-full object-cover rounded-xl"
          src={getLinkImage(comic.avatar)}
          alt=""
        />
        <div className="p-2">
          <h2 className="font-bold mb-2 text-base ">
            {truncateTitle(capitalizeFirstLetter(comic.name), 15)}
          </h2>
        </div>
        <div className=""> {formatNumber(comic.view)} lượt xem</div>
        <div className="font-bold"> Chapter 2555</div>
      </div>
    </Link>
  );
}

export default CarouselComicCard;
