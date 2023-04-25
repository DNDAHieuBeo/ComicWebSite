import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Headers";
import ComicCategory from "./ComicCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faEye, faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes, faSmile } from "@fortawesome/free-solid-svg-icons";
import {fetchComicById} from "../constant/fetchData";
import { useRouter } from "next/router";
function ComicDetail() {
  const [chapters] = useState([
    { chapter: "Chapter 1", views: 1000, times: "2 days ago" },
    { chapter: "Chapter 2", views: 800, times: "1 day ago" },
    { chapter: "Chapter 3", views: 500, times: "12 hours ago" },
    { chapter: "Chapter 4", views: 300, times: "6 hours ago" },
    { chapter: "Chapter 5", views: 1000, times: "2 days ago" },
    { chapter: "Chapter 2", views: 800, times: "1 day ago" },
    { chapter: "Chapter 3", views: 500, times: "12 hours ago" },
    { chapter: "Chapter 4", views: 300, times: "6 hours ago" },

    // Add more chapters as needed
  ]);
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const toggleHeartColor = () => {
    setIsHeartClicked(!isHeartClicked);
  };
  const router = useRouter();
  console.log(router)
  const { id } = router.query;

  const [comic, setComic] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const data = await fetchComicById(id);
        if (data) {
          setComic(data);_id
        }
      };

      fetchData();
    }
  }, [id]);

  if (!comic) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <ComicCategory />
      <div className="flex flex-col md:flex-row w-full md:w-[85%] mx-auto my-8">
        <div className="w-full md:w-[30%] flex flex-col p-4 border-2 border-black">
          <img
            src={comic.image}
            alt={comic.title}
            className="w-full h-[350px] object-cover"
          />
          <button className="w-full text-[#EAFA34] bg-black hover:text-black hover:bg-[#EAFA34] p-4 mt-4 rounded">
            Đọc tiếp
          </button>
          <button className="w-full  text-black bg-[#EAFA34]  hover:text-[#EAFA34] hover:bg-black p-4 mt-2 rounded">
            Đọc từ đầu
          </button>
          <h1 className="font-bold mt-4">Danh sách chương(300)</h1>
          <table className="w-full text-center my-4 rounded">
            <tbody>
              {chapters.map((chapterData, index) => (
                <tr
                  key={index}
                  className={`border-2 border-black  ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-300"
                  }`}
                >
                  <td className="p-2">{chapterData.chapter}</td>
                  <td className="p-2">{chapterData.views}</td>
                  <td className="p-2">{chapterData.times}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full md:w-[70%] flex flex-col">
          <div className="w-full py-8 px-4 border-black border-2">
            {" "}
            <h1 className="font-bold text-2xl">{comic.title}</h1>
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
              <button className="w-22 mx-1 md:mx-0 md:ml-4 h-12 hover:border-2 hover:border-black p-2 rounded-3xl hover:shadow-xl transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150">
                <img src="/category-fantasy.jpg" alt="" className="h-4" />
              </button>
              <button className="w-22 mx-1 md:mx-0 md:ml-4 h-12 hover:border-2 hover:border-black p-2 rounded-3xl hover:shadow-xl transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150">
                <img src="/category-comedy.jpg" alt="" className="h-4" />
              </button>
              <button className="w-22 mx-1 md:mx-0 md:ml-4 h-12 hover:border-2 hover:border-black p-2 rounded-3xl hover:shadow-xl transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150">
                <img src="/category-detective.jpg" alt="" className="h-4" />
              </button>
            </div>
            <div className="w-full md:w-[20%] border-black md:border-l-2 flex flex-row justify-center items-center py-4 md:py-0">
              <div className="share-icon">
                {comic.views}
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
            <div>
              Từng là nữ đế lập quốc đầu tiên trong lịch sử, vậy mà giờ đây lại
              trọng sinh thành hoàng hậu của kẻ thù truyền kiếp?! Hoàng hậu độc
              ác danh xứng với thực, không có việc ác nào là không làm: ngược
              đãi hoàng tử, náo loạn khắp hậu cung… khiến ai nấy đều hận không
              thể hạ bệ nàng. …Nàng ta vậy mà tạo nghiệp như thế? Vì phục hưng
              vương triều, giải quyết kẻ thù cũ, nữ đế quyết định nên giữ an
              toàn cho cái đầu của mình. Sau đó—thái hậu vốn xem nàng như cái
              gai trong mắt lại nắm tay và ấm áp gọi tên nàng, khen nàng là ánh
              sáng của hậu cung? Hoàng tử công chúa từng ai oán nàng cũng ôm lấy
              nàng, khen nàng là mẫu hậu tốt nhất thế gian này? Ngay cả hoàng đế
              vẫn luôn lạnh nhạt với nàng cũng đang gõ cửa kêu: “Hoàng hậu, để
              trẫm làm ấm giường cho nàng. Trẫm từ đầu đến cuối chỉ yêu một mình
              nàng.” Nữ đế: “???” <br></br> Trọng Sinh Trở Thành Hoàng Hậu Độc
              Ác Của Kẻ Thù được cập nhật nhanh nhất và đầy đủ nhất tại
              Cmangavip.com . Bạn đọc đừng quên để lại bình luận và chia sẻ, ủng
              hộ Cmanga ra các chương mới nhất của truyện Trọng Sinh Trở Thành
              Hoàng Hậu Độc Ác Của Kẻ Thù nhé.
            </div>
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
