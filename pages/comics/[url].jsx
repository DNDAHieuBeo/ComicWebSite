import { useRouter } from "next/router";
import ComicDetail from "../components/ComicDetail";

function ComicDetailPage() {
  const router = useRouter();
  const { url } = router.query;

  return <ComicDetail url={url} />;
}

export default ComicDetailPage;