(()=>{"use strict";const e=new class{get makeHero(){const e=document.createElement("div");e.id="main-content";const t={cover:document.createElement("div"),"main-text":document.createElement("h2")};for(let n in t)t[n].id=n,"main-text"==n&&(t[n].textContent="A new and wonderful experience for your palate."),e.appendChild(t[n]);return e}get makeFooter(){const e=document.createElement("footer"),t=document.createElement("a"),n=document.createElement("img");n.src="img/github.svg",e.id="footer",t.id="github",t.href="https://github.com/gabriellima77/restaurant-page";const a={"git-img":n,"Made by Gabriel Lima":document.createElement("p")};for(let e in a)"git-img"==e?a[e].id=e:a[e].textContent=e,t.appendChild(a[e]);return e.appendChild(t),e}get makeNavBar(){const e=document.createElement("header"),t=document.createElement("h1");t.textContent="Best-4-Eat";const n=document.createElement("a");n.href="index.html",n.appendChild(t);const a=document.createElement("nav");a.id="nav-bar",["About","Menu","Contact"].forEach((e=>{const t=document.createElement("label");t.classList.add("option");const n={border:document.createElement("span"),input:document.createElement("input"),para:document.createElement("p")};for(let a in n)"para"==a?n[a].textContent=e:"input"==a?(n[a].type="radio",n[a].name="option"):n[a].classList.add(a),t.appendChild(n[a]);a.appendChild(t)}));const o={a:n,nav:a};for(let t in o)e.appendChild(o[t]);return e}},t={About:()=>{const e=document.querySelector("#content");let t=document.createElement("p");t.classList.add("text");let n=document.querySelector("main");n&&e.removeChild(n),n=document.createElement("main");const a=document.createElement("div"),o=document.createElement("h2");o.id="main-text",o.textContent="About",a.appendChild(o),a.classList.add("box"),t.textContent="We're the best restaurant on galaxy, if you don't belive in us come here to eat.We have the best meat in our planet. The meat that we use is made in a 3d printer and our scientists are 100% sure that this don't cause cancer. If you're vegan you can eat here too, because we don't kill any animal to make our meat.We also have vegetables and fruits, but we don't want to be boring like a salad, nothing against salads.",a.appendChild(t),n.appendChild(a),e.appendChild(n),window.scrollTo({top:e.clientHeight,left:0,behavior:"smooth"})}};class n{constructor(e){this.type=e,this.card=document.createElement("div"),this.card.classList.add("card"),this.links={Pizzas:"img/pizza.jpg",Hamburgers:"img/hamburger.jpg",Dinner:"img/dinner.jpg"}}get makeCard(){const e=document.createElement("img"),t=document.createElement("h3"),n=document.createElement("div");return n.classList.add("arrow"),t.textContent=this.type,t.classList.add("menu-type"),e.classList.add("food"),e.src=this.links[this.type],this.card.appendChild(e),this.card.appendChild(t),this.card.appendChild(n),this.card}}const a=()=>{const e=document.querySelector("#content");let t=document.querySelector("main");t&&e.removeChild(t),t=document.createElement("main"),t.classList.add("bg");const a=document.createElement("div"),o=document.createElement("h2");o.id="main-text",o.textContent="Menu",a.appendChild(o),["Pizzas","Hamburgers","Dinner"].forEach((e=>{let t=new n(e);a.appendChild(t.makeCard)})),a.classList.add("menu"),t.appendChild(o),t.appendChild(a),e.appendChild(t),window.scrollTo({top:e.clientHeight,left:0,behavior:"smooth"})},o={Contact:()=>{const e={phone:"(55)555-6420",email:"best4eat@potato.com",address:"Area 51, NV, USA"},t=document.querySelector("#content");let n=document.querySelector("main");n&&t.removeChild(n),n=document.createElement("main");const a=document.createElement("div"),o=document.createElement("h2");o.id="main-text",o.textContent="Contact",a.appendChild(o),a.classList.add("box");for(let t in e){let n=document.createElement("div");n.classList.add("contact");let o=document.createElement("h3"),d=document.createElement("p");o.textContent=t+" : ",d.textContent=e[t],n.appendChild(o),n.appendChild(d),a.appendChild(n)}n.appendChild(a),t.appendChild(n),window.scrollTo({top:t.clientHeight,left:0,behavior:"smooth"})}};!function(){const n=document.querySelector("#content");n.appendChild(e.makeNavBar),n.appendChild(e.makeHero);const d=document.querySelectorAll(".option"),c={About:t.About,Menu:a,Contact:o.Contact};d.forEach((e=>{const t=e.textContent.trim();e.children[1].onclick=()=>{c[t](e);const n=Array.from(e.children),a=n[1],o=n[0];a.checked&&(e.style.color="#fccb90",o.style.backgroundColor="#fccb90",d.forEach((t=>{t!=e&&(t.style.color="white",t.firstElementChild.style.backgroundColor="white")})))}})),n.appendChild(e.makeFooter)}()})();