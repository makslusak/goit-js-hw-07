import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onImageClick);
// window.addEventListener('keydown', onModalClose);

addMarkup(galleryItems);

function createMarkup(items) {
  return items
    .map(item => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
    })
    .join('');
}

function addMarkup(arr) {
  galleryRef.insertAdjacentHTML('beforeend', createMarkup(arr));
}

function onImageClick(event) {
  event.preventDefault();
  if (event.target.tagName !== 'IMG') {
    return;
  }
  const { source } = event.target.dataset;

  onModalOpen(source);
}

function onModalOpen(url) {
  const instance = basicLightbox.create(`<img src="${url}">`);
  instance.show();
}

// Close by Esc
// function onModalClose(event) {
//   if (event.keyCode === 27) {
//     instance.close();
//   }
// }
