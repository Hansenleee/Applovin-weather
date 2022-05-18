import axios from 'axios';

const HTTP_CACHE_KEY = 'HTTP_CACHE_KEY';

export const get = (url) => {
  const storage = localStorage.getItem(HTTP_CACHE_KEY);
  const cacheData = storage ? JSON.parse(storage) : {};

  return axios.get(url)
    .then((res) => {
      cacheData[url] = res;
      localStorage.setItem(HTTP_CACHE_KEY, JSON.stringify(cacheData));

      return res;
    })
    .catch(() => cacheData[url] || {});
}