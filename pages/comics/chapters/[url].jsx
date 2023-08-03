import React from 'react'
import { useRouter } from "next/router";
import ReadingPage from '../../ReadingPage';

function Chapter() {
  const router = useRouter();
  const { url } = router.query;

  return <ReadingPage url={url} />;
}  
export default Chapter;