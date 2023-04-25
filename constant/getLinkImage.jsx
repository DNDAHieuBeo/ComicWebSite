const BASE_URL = 'https://comic.tuanndl.com'; 
export const getLinkImage = (url) => {
  return `${BASE_URL}/v1/image/get?url=${encodeURIComponent(url)}`;
};
