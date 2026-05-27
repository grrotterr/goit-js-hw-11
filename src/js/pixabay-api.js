import axios from 'axios';

const API_KEY = '56050129-1324746374264c28b820da974';
const BASE_URL = 'https://pixabay.com/api/';

export default function getImagesByQuery(query) {
  const safeQuery = query?.trim();

  if (!safeQuery) {
    return Promise.resolve({ hits: [] });
  }

  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: safeQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}