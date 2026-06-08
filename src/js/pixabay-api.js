import axios from 'axios';

const API_KEY = '56050129-1324746374264c28b820da974';
const BASE_URL = 'https://pixabay.com/api/';

export default async function getImagesByQuery(query, page) {
  const safeQuery = query?.trim();

  if (!safeQuery) {
    return { hits: [] };
  }

  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: safeQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });

  return response.data;
}