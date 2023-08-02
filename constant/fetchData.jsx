// constant/fetchData.js
import axios from 'axios';
const BASE_URL = 'https://comic.tuanndl.com'; 

export const fetchComics = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/v1/comic?limit=100`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const fetchComicById = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/v1/comic/url?url=${url}`);
    return response.data;
  } catch (error) {
    console.log('Error fetching data:', error);
    return null;
  }
};

export const fetchComicByCategoryId = async (categoryId) => {
  try {
    const response = await axios.get(`${BASE_URL}/v1/comic/category/${categoryId}?limit=100`);
    return response.data.results;
  } catch (error) {
    console.log('Error fetching data:', error);
    return null;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/v1/category/categories`);
    return response.data.results;
  } catch (error) {
    console.log('Error fetching data:', error);
    return null;
  }
};
export const fetchChapterById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/v1/chapter/${id}`);
    return response.data;
  } catch (error) {
    console.log('Error fetching data:', error);
    return null;
  }
};


export const getLinkImage = (url) => {
  return `${BASE_URL}/v1/image/get?url=${encodeURIComponent(url)}`;
};
