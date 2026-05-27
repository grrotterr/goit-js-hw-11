import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './pixabay-api.js';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './render-functions.js';


const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      message: 'Please fill in the search field!',
      position: 'topRight',
    });

    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        message: 'Something went wrong!',
        position: 'topRight',
      });

      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });

  form.reset();
}