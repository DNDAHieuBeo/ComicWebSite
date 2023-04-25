// constant/fetchData.js
import axios from 'axios';

export const fetchComics = async () => {
  try {
    const response = await axios.get('https://comic.tuanndl.com/v1/comic?limit=9999999');
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};



export const fetchComicById = async (url) => {
  try {
    const response = await axios.get(`https://comic.tuanndl.com/v1/comic/url?url=${url}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};