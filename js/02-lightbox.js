import {galleryItems} from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");
const galleryItemMarkup = createGalleryItem(galleryItems);

gallery.insertAdjacentHTML("afterbegin", galleryItemMarkup);

function createGalleryItem(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a> 
`
    }).join("");
}
new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionDelay: 250,
    scrollZoom: false,
});