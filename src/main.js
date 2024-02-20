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
const loadMore = document.querySelector('.load-more');
let page = 1; 
const perPage = 20; 
let totalHits = 0; // Total number of hits returned by the backend
let query
searchForm.addEventListener('submit', async e => {
    e.preventDefault();
   query = e.target.elements.search.value.trim();
    loader.style.display = 'none';
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
     try {
        const data = await getPostsByUser(query, page, perPage);
        handleImageData(data);
    } catch (error) {
        handleRequestError(error);
    }
});
   
   function handleImageData(data) {
      loader.style.display = 'none';
    totalHits = data.totalHits; 
    if (data.hits.length === 0) {
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topCenter'
        });
    } else {
        // Append new images to the existing ones
        itemTemplate(data.hits, getImage, false);
        const lightbox = new SimpleLightbox(".gallery a", {
            captionsData: "alt",
            captionDelay: 250,
            captionPosition: 'bottom'
        });
      
        // Show or hide the "Load more" button based on totalHits and displayed images
        if (totalHits <= page * perPage) {
            loadMore.style.display = 'none';
            iziToast.info({
                title: 'Info',
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topCenter'
            });
        } else {
            loadMore.style.display = 'block';
        }
    }
}

function handleRequestError(error) {
    loader.style.display = 'none';
    iziToast.error({
        title: 'Error',
        message: 'There was a problem with the fetch operation. Please try again later.',
        position: 'topCenter'
    });
    console.error(error);
    }
    
    loadMore.addEventListener('click', async () => {
        try {
        const data = await getPostsByUser(query, ++page, perPage, true);
        const newImages = data.hits;
        if (newImages.length > 0) {
            itemTemplate(newImages, getImage);
            const lightbox = new SimpleLightbox(".gallery a", {
                captionsData: "alt",
                captionDelay: 250,
                captionPosition: 'bottom'
            });
           
        }
        // Show or hide the "Load more" button based on totalHits and displayed images
        if (totalHits <= page * perPage) {
            loadMore.style.display = 'none';
            iziToast.info({
                title: 'Info',
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topCenter'
            });
        }
    } catch (error) {
        handleRequestError(error);
    }
});
