const BASE_URL = 'http://192.168.111.151:9001'; // Update this with your correct BASE_URL

export const getLinkImage = (url) => {
  return `${BASE_URL}/v1/image/get?url=${encodeURIComponent(url)}`;
};
