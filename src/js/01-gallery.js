// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
//import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line




const container = document.querySelector(".gallery") 


const markup = galleryItems.map(({ preview, description, original }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
    
      
      alt="${description}"
    />
  </a>
</li>`).join("");


container.insertAdjacentHTML("beforeend", markup);


new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt'
});






