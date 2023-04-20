import React, { useState, useEffect } from "react";
import { getLinkImage } from "../constant/fetchData"; // Make sure the path to the fetchData file is correct
import ComicItem from "./ComicItem";
import Mainpage from "./mainpage";

export default function Home() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.111.151:9001/v1/comic?page=1&limit=10"
        );
        const data = await response.json();
        setComics(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(comics);

  return (
    <div>
      <Mainpage />
    </div>
  );
}
