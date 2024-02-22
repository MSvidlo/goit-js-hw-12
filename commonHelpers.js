import{a as b,i as f}from"./assets/vendor-22aaac4a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();function P(e){return`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
  </a>
   <div class="image-details">
                    <p>Likes: ${e.likes}</p>
                    <p>Views: ${e.views}</p>
                    <p>Comments: ${e.comments}</p>
                    <p>Downloads: ${e.downloads}</p>
                </div>
</li>`}function v(e){return e.map(P).join("")}async function p(e,r){const c="https://pixabay.com",i="/api/",o={key:"42305658-75508782eac06a666c1fb928b",image_type:"photo",orientation:"horizontal",safesearch:"true",q:e,per_page:15,page:r},s=`${c}${i}?${new URLSearchParams(o)}`;return(await b.get(s)).data}const S=document.querySelector(".js-search-form"),d=document.querySelector(".gallery"),g=document.querySelector(".js-loader"),m=document.querySelector(".js-btn-load");let n,a,u;S.addEventListener("submit",$);m.addEventListener("click",q);async function $(e){if(e.preventDefault(),n=e.target.elements.search.value.trim(),a=1,!n){l("Sorry, there are no images matching your search query. Please try again!");return}h();try{const r=await p(n,a);if(r.totalHits===0){l("There was a problem with the fetch operation. Please try again later.");return}console.log(r),u=Math.ceil(r.totalHits/15),d.innerHTML="",y(r.hits)}catch(r){l(r),u=0,d.innerHTML=""}L(),w(),e.target.reset()}async function q(){if(a+=1,!n)return f.warning({title:"Warning",message:"Please enter a search query",position:"topCenter"});h();const e=await p(n,a);y(e.hits),L(),w()}function y(e){const r=v(e);d.insertAdjacentHTML("beforeend",r)}function E(){m.classList.remove("hidden")}function I(){m.classList.add("hidden")}function h(){g.classList.remove("hidden")}function L(){g.classList.add("hidden")}function w(){a>=u?I():E()}function l(e){f.error({title:"Error",message:e,position:"topCenter"})}
//# sourceMappingURL=commonHelpers.js.map
