import { useRouter } from 'next/router';
import ComicDetail from '../../components/ComicDetail';
import data from '../../components/mock.json';

function ComicDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const comic = data.find((comic) => comic.top === parseInt(id));

  if (!comic) {
    return <p>Loading...</p>;
  }

  return <ComicDetail comic={comic} />;
}

export default ComicDetailPage;
