// iziToast import
import iziToast from "izitoast";
// additional iziToast import
import "izitoast/dist/css/iziToast.min.css";
//  SimpleLightbox import
import SimpleLightbox from "simplelightbox";
// additional SimpleLightbox import
import "simplelightbox/dist/simple-lightbox.min.css";
// import render function part1
import {displayImages} from './js/render-functions'
//  import render function part2
import itemTemplate from './js/render-functions';


import getPostsByUser from './js/pixabay-api';

const searchForm = document.querySelector('.js-search-form');
const getImage = document.querySelector(".gallery");
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();

//check the input line is not empty
     if (!query) {

        return iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query',
            position: 'topCenter'
        });
    }

 // Show the loading element before starting the HTTP request
    loader.style.display = 'block';
    getPostsByUser(query)
        .then(data => {

 // Hide the download item after the request is complete
            loader.style.display = 'none';

// Checking for an empty array from the backend
            if (data.hits.length === 0) {
 // Show message about missing images
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topCenter'
                });
            }
            else {
// Process the received image data
                itemTemplate(data.hits, getImage);
                const lightbox = new SimpleLightbox(".gallery a", {
                    captionsData: "alt",
                    captionDelay: 250,
                    captionPosition: 'bottom'
                });
                lightbox.refresh();
            
            }
        })
        .catch(error => {
// Hide the download item on error
            loader.style.display = 'none';

// Show error message
            iziToast.error({
                title: 'Error',
                message: 'There was a problem with the fetch operation. Please try again later.',
                position: 'topCenter'
            });
            e.target.reset();
        });
});
