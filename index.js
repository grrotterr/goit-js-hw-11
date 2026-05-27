import{a as f,S as d,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="56050129-1324746374264c28b820da974",m="https://pixabay.com/api/";function h(s){return f.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(t=>`
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
      `).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function b(){l.innerHTML=""}function L(){c.classList.add("is-visible")}function v(){c.classList.remove("is-visible")}const u=document.querySelector(".form");u.addEventListener("submit",w);function w(s){s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(!o){n.error({message:"Please fill in the search field!",position:"topRight"});return}b(),L(),h(o).then(t=>{if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}).catch(t=>{n.error({message:"Something went wrong!",position:"topRight"}),console.log(t)}).finally(()=>{v()}),u.reset()}
//# sourceMappingURL=index.js.map
