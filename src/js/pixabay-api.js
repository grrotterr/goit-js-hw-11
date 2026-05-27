import axios from 'axios';

const API_KEY = '56050129-1324746374264c28b820da974';
const BASE_URL = 'https://pixabay.com/api/';

export default function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
  .then(response => response.data);
}


