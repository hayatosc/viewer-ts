var w=Object.defineProperty;var L=(n,e,t)=>e in n?w(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var u=(n,e,t)=>L(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const E="modulepreload",P=function(n){return"/pamphlet-viewer/"+n},f={},S=function(e,t,c){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.allSettled(t.map(a=>{if(a=P(a),a in f)return;f[a]=!0;const h=a.endsWith(".css"),_=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${_}`))return;const l=document.createElement("link");if(l.rel=h?"stylesheet":E,h||(l.as="script"),l.crossOrigin="",l.href=a,o&&l.setAttribute("nonce",o),document.head.appendChild(l),h)return new Promise((v,y)=>{l.addEventListener("load",v),l.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${a}`)))})}))}function s(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return r.then(i=>{for(const o of i||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},b={display:"auto",duration:600,page:1,gradients:!0,turnCorners:["bl","br"]};class q{constructor(e,t){u(this,"element");u(this,"options");u(this,"_page");u(this,"window");this.element=typeof e=="string"?O(e):e,this.options={...b,...t},this._page=this.options.page||1,this.window=window,this.eventListeners()}async mount(){var e;if(this.element.classList.add("viewer_ts__container"),this.options.type==="pdf"){if(this.options.src)try{const{renderPDF:t}=await S(async()=>{const{renderPDF:c}=await import("./pdf-lzRozrZX.js");return{renderPDF:c}},[]);await t(this.options.src,this.element,this._page)}catch(t){console.error("Error occurred in PDF",t)}}else k(this.element,"viewer_ts__page"),(e=this.element.querySelector(`canvas:nth-child(${this.page})`))==null||e.classList.add("viewer_ts__page__active")}get page(){return this._page}set page(e){var t,c,r;this._page=e,e<1&&(this._page=1),(t=this.element.querySelector(".viewer_ts__page__active"))==null||t.classList.remove("viewer_ts__page__active"),(c=this.element.querySelector(`.viewer_ts__page:nth-child(${this._page})`))==null||c.classList.add("viewer_ts__page__active"),(r=this.options.hooks)!=null&&r.onPageUpdate&&this.options.hooks.onPageUpdate(this._page)}next(){this.page+=1,console.log(this.page)}previous(){this.page-=1,console.log(this.page)}eventListeners(){let e=0,t=0,c=0,r=0;this.element.addEventListener("touchstart",s=>{e=s.touches[0].pageX,t=s.touches[0].pageY}),this.element.addEventListener("touchmove",s=>{c=s.touches[0].pageX,r=s.touches[0].pageY}),this.element.addEventListener("touchend",s=>{const i=e-c,o=t-r;Math.abs(i)<100&&Math.abs(o)<100||Math.abs(i)>Math.abs(o)&&(i>0?this.next():this.previous())})}}const O=n=>{const e=document.querySelector(n);if(!e)throw new Error(`cannot find selector: '${n}'`);return e},k=(n,e)=>{n.querySelectorAll("*").forEach(t=>{t.classList.add(e)})};document.querySelector("#app").innerHTML=`
  <div id="turn">Test</div>
  <div id="slider"></div>
`;const d=new q("#turn",{type:"pdf",src:"../assets/pamphlet_mobile.pdf"});d.mount();var m;(m=document.querySelector("#previous"))==null||m.addEventListener("click",()=>d.previous());var g;(g=document.querySelector("#next"))==null||g.addEventListener("click",()=>d.next());const p=document.getElementById("turn");p&&(p.addEventListener("click",n=>{const e=p.getBoundingClientRect(),t=n.clientX-e.left;t>e.width/2?d.next():t<e.width/2&&d.previous()}),document.addEventListener("keydown",n=>{n.key==="ArrowRight"?d.next():n.key==="ArrowLeft"&&d.previous()}));export{S as _,k as a};
