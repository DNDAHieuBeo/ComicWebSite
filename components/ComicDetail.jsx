import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Headers";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faEye, faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes, faSmile } from "@fortawesome/free-solid-svg-icons";
import { fetchComicById } from "../constant/fetchData";
import { useRouter } from "next/router";
import { getLinkImage } from "../constant/getLinkImage";
import timeDifference from "./timeDifference";
function ComicDetail({ url }) {
  const [comic, setComic] = useState(null);
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  function firstWord(string) {
    const words = string.split(" ");
    return words[0];
  }

  const toggleHeartColor = () => {
    setIsHeartClicked(!isHeartClicked);
  };
  const router = useRouter();

  const { id } = router.query;
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  function formatNumber(number) {
    if (number >= 1000) {
      return (number / 1000).toFixed(0) + "K";
    } else {
      return number;
    }
  }

  useEffect(() => {
    const fetchComic = async () => {
      const data = await fetchComicById(url);
      if (data) {
        setComic(data);
      }
    };

    fetchComic();
  }, [url]);
  if (!comic) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  const navigateToReadingPage = () => {
    router.push(`/chapters/${comic.url}`);
  };

  return (
    <div>
    
      <Header />

      <div className="flex flex-col md:flex-row w-full md:w-[85%] mx-auto my-8">
        <div className="w-full md:w-[30%] flex flex-col p-4 border-2 border-black">
          <img
            src={getLinkImage(comic.avatar)}
            alt={comic.name}
            className="w-full h-[350px] object-cover"
          />
          <button className="w-full text-[#EAFA34] bg-black hover:text-black hover:bg-[#EAFA34] p-4 mt-4 rounded">
            Đọc tiếp
          </button>
          <Link href={`/comics/chapters/${encodeURIComponent(comic.url)}`}>
            <button className="w-full  text-black bg-[#EAFA34]  hover:text-[#EAFA34] hover:bg-black p-4 mt-2 rounded">
              Đọc từ đầu
            </button>
          </Link>
          <h1 className="font-bold mt-4">Danh sách chương</h1>
          <table className="w-full text-center my-4 rounded">
            <tbody className="border-2 rounded">
              {comic.chapters
                .slice(-10) 
                .reverse()
                .map((chapter, index) => (
                  <tr
                    key={chapter.url}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                  >
                    <td className=" px-4 py-2">
                      Chapter {firstWord(chapter.chapter)}
                    </td>
                    <td className=" px-4 py-2">
                      {timeDifference(new Date(), new Date(chapter.updatedAt))}
                    </td>
                    <td className=" px-4 py-2">{formatNumber(chapter.view)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="w-full md:w-[70%] flex flex-col">
          <div className="w-full py-8 px-4 border-black border-2">
            {" "}
            <h1 className="font-bold text-2xl">
              {capitalizeFirstLetter(comic.name)}
            </h1>
          </div>
          <div className="w-full border-black border-2 flex flex-col md:flex-row">
            <div className="flex flex-row justify-center md:justify-between w-full md:w-[20%] border-black md:border-r-2 px-4 md:px-12 py-4 md:py-6">
              <div
                className={`heart-icon cursor-pointer inline-flex justify-center items-center rounded-full p-1 ${
                  isHeartClicked ? "text-[#DACCFF]" : ""
                }`}
                onClick={toggleHeartColor}
              >
                <FontAwesomeIcon icon={faHeart} className="text-2xl" />
              </div>
              <div className="share-icon ml-4 md:ml-0">
                <FontAwesomeIcon
                  icon={faShareNodes}
                  className="text-3xl cursor-pointer"
                />
              </div>
            </div>

            <div className="w-full md:w-[60%] flex flex-wrap justify-center md:justify-start md:flex-nowrap items-center px-4 py-4">
              {comic.categories.map((index) => (
                <div key={index._id} className="ml-6">
                  {index.name}
                </div>
              ))}
            </div>
            <div className="w-full md:w-[20%] border-black md:border-l-2 flex flex-row justify-center items-center py-4 md:py-0">
              <div className="share-icon">
                {formatNumber(comic.view)}
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-2xl cursor-pointer ml-2"
                />
              </div>
              <div className="share-icon ml-4">
                678
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-2xl cursor-pointer ml-2"
                />
              </div>
            </div>
          </div>
          <div className="px-2 py-4 border-black border-2 ">
            <div className="font-bold text-2xl my-4">Giới thiệu </div>
            <div>{comic.description}</div>
            <div className="font-bold text-2xl my-4"> Bình luận </div>
            <div>
              <div className="flex flex-row border-2 border-black rounded-lg my-auto items-center h-12 px-2 mb-4  flex-grow md:flex-grow-0 mx-4 md:mx-0">
                <button>
                  {" "}
                  <img
                    src="/comment-icon.png"
                    alt=""
                    className="h-6 w-6 block"
                  />
                </button>
                <input
                  className="h-8 md:w-[40rem] w-full my-auto focus:outline-none pl-2"
                  placeholder="Nội dung bình luận"
                />
              </div>
              <div className="flex flex-row border-2 border-black rounded-lg my-auto items-center  p-2 mb-4  flex-grow md:flex-grow-0 mx-4 md:mx-0">
                <img src="/avatar.png" alt="" className="w-6" />
                <div className="flex flex-col ml-3">
                  <div className=" text-xs font-bold h-fit">
                    Hu TaoSama Chapter 5
                  </div>
                  <div className="mt-1 text-xs">
                    Mặt ông đi tàu hỏa ai cũng nghĩ thế thôi
                  </div>
                  <div className="flex flex-row my-2">
                    <button>
                      <img src="/reaction-icon.jpg" className=" w-4 h-4" />
                    </button>
                    <button>
                      <img
                        src="/comment-icon2.png"
                        className="w-4 h-4 cursor-pointer ml-2"  
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row border-2 border-black rounded-lg my-auto items-center  p-2 mb-4  flex-grow md:flex-grow-0 mx-4 md:mx-0">
                <img src="/avatar.png" alt="" className="w-6" />
                <div className="flex flex-col ml-3">
                  <div className=" text-xs font-bold h-fit">
                    Hu TaoSama Chapter 5
                  </div>
                  <div className="mt-1 text-xs">
                    Mặt ông đi tàu hỏa ai cũng nghĩ thế thôi
                  </div>
                  <div className="flex flex-row my-2">
                    <button>
                      <img src="/reaction-icon.jpg" className=" w-4 h-4" />
                    </button>
                    <button>
                      <img
                        src="/comment-icon2.png"
                        className="w-4 h-4 cursor-pointer ml-2"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row border-2 border-black rounded-lg my-auto items-center  p-2 mb-4   flex-grow md:flex-grow-0 mx-4 md:mx-0">
                <img src="/avatar.png" alt="" className="w-6" />
                <div className="flex flex-col ml-3">
                  <div className=" text-xs font-bold h-fit">
                    Hu TaoSama Chapter 5
                  </div>
                  <div className="mt-1 text-xs">
                    Mặt ông đi tàu hỏa ai cũng nghĩ thế thôi
                  </div>
                  <div className="flex flex-row my-2">
                    <button>
                      <img src="/reaction-icon.jpg" className=" w-4 h-4" />
                    </button>
                    <button>
                      <img
                        src="/comment-icon2.png"
                        className="w-4 h-4 cursor-pointer ml-2"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ComicDetail;
