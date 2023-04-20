import { getLinkImage, decodeImageUrl } from "../constant/fetchData";

const ComicItem = ({ comic }) => {
  const decodedUrl = decodeImageUrl(comic.avatar);
  const imageUrl = getLinkImage(decodedUrl);
  return (
    <div>
      <img src={imageUrl} alt={comic.name} />
      <h2>{comic.name}</h2>
      <p>Author: {comic.author}</p>
    </div>
  );
};

export default ComicItem  