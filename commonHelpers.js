import{a as L,i,S as f}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function m(t,r){r.innerHTML="",t.forEach(o=>{const a=`<li class="gallery-item">
  <a class="gallery-link" href="${o.largeImageURL}">
    <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}" />
  </a>
   <div class="image-details">
                    <p>Likes: ${o.likes}</p>
                    <p>Views: ${o.views}</p>
                    <p>Comments: ${o.comments}</p>
                    <p>Downloads: ${o.downloads}</p>
                </div>
</li>`;r.innerHTML+=a})}async function h(t,r=1,o=20){const a="https://pixabay.com",e="/api/",n={key:"42305658-75508782eac06a666c1fb928b",image_type:"photo",orientation:"horizontal",safesearch:"true",q:t,per_page:o,page:r},w=`${a}${e}?${new URLSearchParams(n)}`;return(await L.get(w)).data}const P=document.querySelector(".js-search-form"),g=document.querySelector(".gallery"),c=document.querySelector(".loader"),p=document.querySelector(".load-more");let u=1;const y=20;let d=0,l;P.addEventListener("submit",async t=>{if(t.preventDefault(),l=t.target.elements.search.value.trim(),c.style.display="none",!l)return i.warning({title:"Warning",message:"Please enter a search query",position:"topCenter"});c.style.display="block";try{const r=await h(l,u,y);v(r)}catch(r){b(r)}});function v(t){c.style.display="none",d=t.totalHits,t.hits.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}):(m(t.hits,g),new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}),d<=u*y?(p.style.display="none",i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"})):p.style.display="block")}function b(t){c.style.display="none",i.error({title:"Error",message:"There was a problem with the fetch operation. Please try again later.",position:"topCenter"}),console.error(t)}p.addEventListener("click",async()=>{try{const r=(await h(l,++u,y,!0)).hits;if(r.length>0){m(r,g);const o=new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}d<=u*y&&(p.style.display="none",i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"}))}catch(t){b(t)}});
//# sourceMappingURL=commonHelpers.js.map