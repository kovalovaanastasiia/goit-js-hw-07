import {galleryItems} from './gallery-items.js';

// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryItemMarkup = createGalleryItem(galleryItems);

gallery.insertAdjacentHTML("afterbegin", galleryItemMarkup);

function createGalleryItem(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div> 
`
    }).join("");
}

gallery.addEventListener('click', pictureClickHandler);

function pictureClickHandler(event) {
    event.preventDefault()
    if (!event.target.classList.contains("gallery__image")) {
        return
    }
    const originalPicture = event.target.dataset.source;
    const instance = window.basicLightbox.create(`
    <div class="modal">
        <img
          src="${originalPicture}"
          width="850" height="600"
        />
    </div>
`)
    instance.show(()=>{document.addEventListener('keydown', pressEscHandler)})

    function pressEscHandler(event) {
        if (event.code === "Escape") {
            instance.close(()=>{document.removeEventListener('keydown', pressEscHandler)})
        }

    }
}



