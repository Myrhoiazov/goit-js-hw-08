// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const li = galleryItems
  .map((elem) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${elem.original}">
    <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
  </a>
    </div> `;
  })
  .join('');

galleryRef.innerHTML = li;

// galleryRef.addEventListener('click', handleclickImage);
let gallery = new SimpleLightbox('.gallery a', {'captionsData': 'alt', 'captionDelay': 250});

