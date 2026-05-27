import{a as m,S as p,i}from"./assets/vendor-DcHCnVjq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const h="56050129-1324746374264c28b820da974",g="https://pixabay.com/api/";function y(r){const e=r==null?void 0:r.trim();return e?m.get(g,{params:{key:h,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data):Promise.resolve({hits:[]})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(r){const e=r.map(o=>`
        <li class="gallery-item">
          <a href="${o.largeImageURL}">
            <img
              src="${o.webformatURL}"
              alt="${o.tags}"
            />
          </a>

          <div class="info">
            <p><b>Likes</b> ${o.likes}</p>
            <p><b>Views</b> ${o.views}</p>
            <p><b>Comments</b> ${o.comments}</p>
            <p><b>Downloads</b> ${o.downloads}</p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",e),b.refresh()}function v(){l.innerHTML=""}function w(){u.classList.add("is-visible")}function S(){u.classList.remove("is-visible")}const a=document.querySelector(".form"),f=a.elements["search-text"];a.addEventListener("submit",P);document.addEventListener("DOMContentLoaded",()=>{const e=new URLSearchParams(window.location.search).get("search-text");e&&(f.value=e,d(e))});function P(r){r.preventDefault();const e=f.value.trim();if(!e){i.error({message:"Please fill in the search field!",position:"topRight"});return}d(e),a.reset()}function d(r){v(),w(),y(r).then(e=>{if(!e.hits||e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(e.hits)}).catch(e=>{i.error({message:"Something went wrong!",position:"topRight"}),console.log(e)}).finally(()=>{S()})}
//# sourceMappingURL=index.js.map
