import {functions} from './events';


function navBar(){
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Best-4-Eat";
    const a = document.createElement("a");
    a.href = "#";
    a.appendChild(h1);
    const makeNaveBar = ()=> {
        const nav = document.createElement("nav");
        const options = ["About", "Menu", "Contact"];
        nav.id = "nav-bar";
        options.forEach(option=> {
            const div = document.createElement("div");
            div.classList.add("option");
            div.innerHTML = `<span class="border"></span> ${option}`;
            div.addEventListener("click", functions[option]);
            nav.appendChild(div);
        });
        const tags = {a, nav};
        for(let key in tags){
            header.appendChild(tags[key]);
        }
        return header;
    }
    return {makeNaveBar};
}

const nav = navBar();

export {nav};