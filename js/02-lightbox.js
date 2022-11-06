import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("div.gallery");
let elements = "";

galleryItems.forEach((item) => {
  const element = `<a class="gallery__item" href=${item.original}>
    <img class="gallery__image" src=${item.preview} alt=${item.description} />
  </a>`;

  elements += element;
});

gallery.insertAdjacentHTML("afterbegin", elements);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
