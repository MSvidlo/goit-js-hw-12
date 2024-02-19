
export default function itemTemplate(images,getImage) {
    getImage.innerHTML = '';
      images.forEach(image => {
        const card =
            `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
  </a>
   <div class="image-details">
                    <p>Likes: ${image.likes}</p>
                    <p>Views: ${image.views}</p>
                    <p>Comments: ${image.comments}</p>
                    <p>Downloads: ${image.downloads}</p>
                </div>
</li>`;
        getImage.innerHTML += card;
    })
}
    
 
    


 export function displayImages(image) {
         return `<ul class='gallery'><li class="gallery-item">
     <img class="gallery-image" src="${image.previewURL}" alt="#"/></li></ul>`
     };
     function renderImage(data) {
         const markup = data.map(displayImages).join('');

         getImage.innerHTML = `<ul class='gallery'>${markup}</ul>`
 };
