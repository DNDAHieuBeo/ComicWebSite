// constant/fetchData.js
import axios from 'axios';

export const fetchComics = async () => {
  try {
    const response = await axios.get('https://comic.tuanndl.com/v1/comic?limit=100');
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
    console.log('Error fetching data:', error);
    return null;
  }
};

export const fetchComicByCategoryId = async (categoryId) => {
  try {
    const response = await axios.get(`https://comic.tuanndl.com/v1/comic/category/${categoryId}?limit=9999999`);
    return response.data.results;
  } catch (error) {
    console.log('Error fetching data:', error);
    return null;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`https://comic.tuanndl.com/v1/category/categories`);
    return response.data.results;
  } catch (error) {
    console.log('Error fetching data:', error);
    return null;
  }
};