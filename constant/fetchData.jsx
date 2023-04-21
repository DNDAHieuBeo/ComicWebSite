// constant/fetchData.js
import axios from 'axios';

export const fetchComics = async (page = 1, limit = 14) => {
  try {
    const response = await axios.get(
      `http://192.168.111.151:9001/v1/comic?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const fetchComicById = async (id) => {
  try {
    const response = await axios.get(`http://192.168.111.151:9001/v1/comic/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);zz
    return null;
  }
};
