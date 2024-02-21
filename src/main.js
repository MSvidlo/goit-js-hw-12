// iziToast import
import iziToast from "izitoast";
// additional iziToast import
import "izitoast/dist/css/iziToast.min.css";
//  SimpleLightbox import
import SimpleLightbox from "simplelightbox";
// additional SimpleLightbox import
import "simplelightbox/dist/simple-lightbox.min.css";

import { itemsTamplate } from './js/render-functions';
import getPostsByUser from './js/pixabay-api';

const searchForm = document.querySelector('.js-search-form');
const getImage = document.querySelector(".gallery");
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more');
 // Total number of hits returned by the backend
let query
searchForm.addEventListener('submit', onFormSubmit)

async function onFormSubmit(e){
   e.preventDefault();
   query = e.target.elements.search.value.trim();
   
     if (!query) {

        return iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query',
            position: 'topCenter'
        });
    };  

    
    const data = await getPostsByUser(query);
    getImage.innerHTML = '';
    renderImages(data.hits);

    e.target.reset()
        };
   
function renderImages(hits) {
    const markup = itemsTamplate(hits);
    getImage.insertAdjacentHTML('beforeend', markup)
}