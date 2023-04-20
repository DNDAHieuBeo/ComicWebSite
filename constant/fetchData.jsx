export const BASE_URL = "192.168.111.151:9001";

export const getLinkImage = (url) => {
  return `${BASE_URL}/v1/image/get?url=${encodeURIComponent(url)}`;
};

export const decodeImageUrl = (encryptedUrl) => {
  return atob(encryptedUrl);
};

import axios from "axios";

export const fetchComics = async (page = 1, limit = 10) => {
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
