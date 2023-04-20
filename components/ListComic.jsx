import React, { useState, useEffect } from "react";
import ListComicCard from "./ListComicCard";
import { fetchComics } from "../constant/fetchData";

function ListComic() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchComics();
      if (data) {
        setComics(data);
      }
    };

    fetchData();
  }, []);

  console.log(comics);
  return (
    <div className="py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 mx-auto justify-items-center w-full md:w-[85%]">
        {comics?.result?.map((comic, index) => (
          <ListComicCard comic={comic} key={index} />
        ))}
      </div>

      <div className="text-center py-8">
        <p className="text-slate-500 text-center">Bạn đã xem đến cuối trang</p>
      </div>
    </div>
  );
}

export default ListComic;
