import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function ListComicCard({ item }) {
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const toggleHeartColor = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  return (
    <div className=" w-[300px] rounded-xl hover:cursor-pointer hover:shadow-xl transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150 border-black border-2">
      <Link href={`/comic/${item.top}`}>
        <a>
          <img
            className="h-[270px] object-cover rounded-xl"
            src={item.image}
            alt=""
          />
        </a>
      </Link>
      <div className="p-4 border-b-2 border-black">
        <h2 className="font-bold text-lg mb-2 ">Avatar: The Atlantic war</h2>
        <div className="flex flex-column justify-between">
          <div className="">Chapter 2105</div>
          <div className="font-bold">2 phut truoc</div>
        </div>
        <div className="flex flex-column justify-between">
          <div className="">Chapter 2105</div>
          <div className="font-bold">2 phut truoc</div>
        </div>
        <div className="flex flex-column justify-between">
          <div className="">Chapter 2105</div>
          <div className="font-bold">2 phut truoc</div>
        </div>
      </div>
      <div className="flex flex-column justify-between p-4">
        <div
          className={`cursor-pointer inline-flex justify-center items-center rounded-full p-1  ${
            isHeartClicked ? "text-[#DACCFF]" : ""
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
