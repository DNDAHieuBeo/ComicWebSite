import React, { useState,useEffect } from 'react';
import ListComicCard from './ListComicCard';
import data from './mock.json';
import { fetchComics } from '../constant/fetchData';

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
  return (
    <div className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto justify-items-center w-full md:w-[85%]">
        {comics?.results?.map((comic) => (
          <ListComicCard comic={comic} key={comic._id} />
        ))}
      </div>
      <div className="text-center py-8">
        <p className="text-slate-500 text-center">Bạn đã xem đến cuối trang</p>
      </div>
    </div>
  );
}

export default ListComic;
