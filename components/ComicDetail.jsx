// components/ComicDetail.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchComicById } from '../constant/fetchData';
import { getLinkImage } from '../constant/getLinkImage';

function ComicDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [comic, setComic] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const data = await fetchComicById(id);
        if (data) {
          setComic(data);
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
      <img src={getLinkImage(comic.avatar)} alt={comic.name} />
      <h1>{comic.name}</h1>
    </div>
  );
}

export default ComicDetail;
