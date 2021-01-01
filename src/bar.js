function navBar(){
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "My Logo";
    const makeNaveBar = ()=> {
        const nav = document.createElement("nav");
        const options = ["About", "Menu", "Contact"];
        nav.id = "nav-bar";
        options.forEach(option=> {
            const div = document.createElement("div");
            div.classList.add("option");
            div.innerHTML = `<span class="border"></span> ${option}`;
            nav.appendChild(div);
        });
        const tags = {h1, nav};
        for(let key in tags){
            header.appendChild(tags[key]);
        }
        return header;
    }
    return {makeNaveBar};
}

const nav = navBar();

export {nav};