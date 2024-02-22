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
const loader = document.querySelector('.js-loader');
const loadMore = document.querySelector('.js-btn-load');
 // Total number of hits returned by the backend


let query;
let page;
let maxImage;


// ================================================
searchForm.addEventListener('submit', onFormSubmit);
loadMore.addEventListener('click', onLoadMoreClick);
// ================================================
async function onFormSubmit(e){
   e.preventDefault();
   query = e.target.elements.search.value.trim();
    page = 1;
    showLoader();
     if (!query) {
        showError('Sorry, there are no images matching your search query. Please try again!') 
    };  
    
    const data = await getPostsByUser(query, page);
    console.log(data);

    maxImage = Math.ceil(data.totalHits / 15);
    getImage.innerHTML = '';
    
    renderImages(data.hits);
    hideLoader();
    checkVisibleBtnStatus();
    e.target.reset()
};
//=====================================  

async function onLoadMoreClick() {
    page += 1;
     if (!query) {

        return iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query',
            position: 'topCenter'
        });
    };  

    showLoader();
    const data = await getPostsByUser(query,page);
   
    renderImages(data.hits);
    hideLoader();
    checkVisibleBtnStatus();
   
}


//===============================================   
function renderImages(hits) {
    const markup = itemsTamplate(hits);
    getImage.insertAdjacentHTML('beforeend', markup)
};
//==========================================

function showLoadBtn()
{
    loadMore.classList.remove('hidden');
}

function hideLoadBtn()

{
    loadMore.classList.add('hidden');
}


function showLoader() {
    loader.classList.remove('hidden');
};

function hideLoader() {
     loader.classList.add('hidden');
}


function checkVisibleBtnStatus()
{
    if (page>= maxImage){  hideLoadBtn();
    } else {
        showLoadBtn();
    }

};
      
function showError(msg) { iziToast.error({
                    title: 'Error',
                    message: msg,
                    position: 'topCenter'
                });
    
}