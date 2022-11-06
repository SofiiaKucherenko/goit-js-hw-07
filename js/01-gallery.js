import { galleryItems } from "./gallery-items.js";
// Change code below this line

const keydown = (ev) => {
  if (ev.code === "Escape") {
    lightbox.close();
  }
};

const lightbox = basicLightbox.create(
  `
    <img id="lightboxImg" />
`,
  {
    onShow: () => {
      document.addEventListener("keydown", keydown);
    },
    onClose: () => {
      document.removeEventListener("keydown", keydown);
    },
  }
);

const lightboxImg = lightbox.element().querySelector("#lightboxImg");

const gallery = document.querySelector("div.gallery");
let elements = "";

galleryItems.forEach((item) => {
  const element = `<div class="gallery__item">
    <a class="gallery__link" href=${item.original}>
      <img
        class="gallery__image"
        src=${item.preview}
        data-source=${item.original}
        alt=${item.description}
      />
    </a>
  </div>`;

  elements += element;
});

gallery.insertAdjacentHTML("afterbegin", elements);

gallery.addEventListener("click", (ev) => {
  ev.preventDefault();

  const url = ev.target.dataset.source;

  lightboxImg.src = url;
  lightbox.show();
});
