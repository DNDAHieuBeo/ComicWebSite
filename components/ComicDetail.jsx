import React from 'react';

function ComicDetail({ comic }) {
  return (
    <div>
      <h1>{comic.title}</h1>
      <img src={comic.image} alt={comic.title} />
      {/* Add any other information you want to display here */}
    </div>
  );
}

export default ComicDetail;