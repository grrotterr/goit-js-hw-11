import{a as w,S as v,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const S="56050129-1324746374264c28b820da974",M="https://pixabay.com/api/";async function f(e,r){const t=e==null?void 0:e.trim();return t?(await w.get(M,{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data:{hits:[]}}const h=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=document.querySelector(".load-more"),P=new v(".gallery a",{captionsData:"alt",captionDelay:250});function g(e){const r=e.map(t=>`
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
      `).join("");h.insertAdjacentHTML("beforeend",r),P.refresh()}function B(){h.innerHTML=""}function y(){m.classList.add("is-visible")}function b(){m.classList.remove("is-visible")}function l(){p.classList.remove("is-hidden")}function L(){p.classList.add("is-hidden")}const d=document.querySelector(".form"),R=d.elements["search-text"],$=document.querySelector(".load-more");let i=1,u="";d.addEventListener("submit",q);$.addEventListener("click",O);function q(e){e.preventDefault();const r=R.value.trim();if(!r){n.error({message:"Please fill in the search field!",position:"topRight"});return}u=r,i=1,I(),d.reset()}async function I(){B(),L(),y();try{const e=await f(u,i);if(!e.hits.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e.hits);const r=Math.ceil(e.totalHits/15);i<r?l():n.info({message:"We're sorry, but you've reached the end of search results."})}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{b()}}async function O(){i+=1,L(),y();try{const e=await f(u,i);g(e.hits);const r=Math.ceil(e.totalHits/15);i<r?l():n.info({message:"We're sorry, but you've reached the end of search results."});const t=document.querySelector(".gallery-item");if(t){const a=t.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}}catch{n.error({message:"Something went wrong!",position:"topRight"}),l()}finally{b()}}
//# sourceMappingURL=index.js.map
