import{a as L,S as w,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const v="56050129-1324746374264c28b820da974",S="https://pixabay.com/api/";async function u(e,r){const t=e==null?void 0:e.trim();return t?(await L.get(S,{params:{key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data:{hits:[]}}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-more"),M=new w(".gallery a",{captionsData:"alt",captionDelay:250});function p(e){const r=e.map(t=>`
        <li class="gallery-item">
          <a href="${t.largeImageURL}">
            <img
              src="${t.webformatURL}"
              alt="${t.tags}"
            />
          </a>

          <div class="info">
            <p><b>Likes</b> ${t.likes}</p>
            <p><b>Views</b> ${t.views}</p>
            <p><b>Comments</b> ${t.comments}</p>
            <p><b>Downloads</b> ${t.downloads}</p>
          </div>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",r),M.refresh()}function P(){f.innerHTML=""}function g(){h.classList.add("is-visible")}function y(){h.classList.remove("is-visible")}function B(){m.classList.remove("is-hidden")}function b(){m.classList.add("is-hidden")}const l=document.querySelector(".form"),R=l.elements["search-text"],$=document.querySelector(".load-more");let i=1,d="";l.addEventListener("submit",q);$.addEventListener("click",O);function q(e){e.preventDefault();const r=R.value.trim();if(!r){n.error({message:"Please fill in the search field!",position:"topRight"});return}d=r,i=1,I(),l.reset()}async function I(){P(),b(),g();try{const e=await u(d,i);if(!e.hits.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(e.hits);const r=Math.ceil(e.totalHits/15);i<r?B():n.info({message:"We're sorry, but you've reached the end of search results."})}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{y()}}async function O(){i+=1,g();try{const e=await u(d,i);p(e.hits);const r=Math.ceil(e.totalHits/15);i>=r&&(b(),n.info({message:"We're sorry, but you've reached the end of search results."}));const t=document.querySelector(".gallery-item");if(t){const a=t.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{y()}}
//# sourceMappingURL=index.js.map
