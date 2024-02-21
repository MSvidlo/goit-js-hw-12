import{a as l,i as u}from"./assets/vendor-22aaac4a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();function m(e){return`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
  </a>
   <div class="image-details">
                    <p>Likes: ${e.likes}</p>
                    <p>Views: ${e.views}</p>
                    <p>Comments: ${e.comments}</p>
                    <p>Downloads: ${e.downloads}</p>
                </div>
</li>`}function d(e){return e.map(m).join("")}async function f(e){const s="https://pixabay.com",n="/api/",t={key:"42305658-75508782eac06a666c1fb928b",image_type:"photo",orientation:"horizontal",safesearch:"true",q:e},r=`${s}${n}?${new URLSearchParams(t)}`;return(await l.get(r)).data}const p=document.querySelector(".js-search-form"),c=document.querySelector(".gallery");document.querySelector(".loader");document.querySelector(".load-more");let i;p.addEventListener("submit",g);async function g(e){if(e.preventDefault(),i=e.target.elements.search.value.trim(),!i)return u.warning({title:"Warning",message:"Please enter a search query",position:"topCenter"});const s=await f(i);c.innerHTML="",y(s.hits),e.target.reset()}function y(e){const s=d(e);c.insertAdjacentHTML("beforeend",s)}
//# sourceMappingURL=commonHelpers.js.map
