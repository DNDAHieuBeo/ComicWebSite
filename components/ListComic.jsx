import React from 'react';
import ListComicCard from './ListComicCard';
import data from './mock.json';

function ListComic() {
  return (
    <div className="py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 mx-auto justify-items-center w-full md:w-[85%]">
        {data.map((item) => (
          
          <ListComicCard item={item} key={item.top} />
        ))}
      </div>
      <div className="text-center py-8">
        <p className="text-slate-500 text-center">Bạn đã xem đến cuối trang</p>
      </div>
    </div>
  );
}

export default ListComic;
