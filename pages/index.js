import React, { useState, useEffect } from "react";
import { getLinkImage } from "../constant/fetchData"; // Make sure the path to the fetchData file is correct
import ComicItem from "./ComicItem";
import Mainpage from "./mainpage";


export default function Home() {

  return (
    <div>
      <Mainpage />
    </div>
  );
}
