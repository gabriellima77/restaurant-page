
class initial{

    get makeMain(){
        const main = document.createElement("main");
        main.id = "main-content";
        const node = { cover: document.createElement("div"),
                       "main-text":  document.createElement("h2") };
        for(let key in node){
            node[key].id = key;
            if(key == "main-text"){
                node[key].textContent = "A new and wonderful experience for your palate.";
            }
            main.appendChild(node[key]);
        }
        return main;
    }

    get makeFooter() {
        const footer = document.createElement("footer");
        const a = document.createElement("a");
        const img = document.createElement("img");
        img.src = "img/github.svg";
        footer.id = "footer";
        a.id = "github";
        a.href = "https://github.com/gabriellima77/restaurant-page";
        const para = document.createElement("p");
        const content = {"git-img": img, "Made by Gabriel Lima": para};
        for(let key in content){
            if(key == "git-img"){
                content[key].id = key;
            }
            else{
                content[key].textContent = key;
            }
            a.appendChild(content[key]);
        }
        footer.appendChild(a);
        return footer;
    }

    get makeNavBar() {
            const header = document.createElement("header");
            const h1 = document.createElement("h1");
            h1.textContent = "Best-4-Eat";
            const a = document.createElement("a");
            a.href = "index.html";
            a.appendChild(h1);
            const nav = document.createElement("nav");
            const options = ["About", "Menu", "Contact"];
            nav.id = "nav-bar";
            options.forEach(option=> {
                const label = document.createElement("label");
                label.classList.add("option");
                const content = { border: document.createElement("span"),
                                  input: document.createElement("input"),
                                  para: document.createElement("p")
                                };
                for(let key in content){
                    if(key == "para"){
                        content[key].textContent = option;
                    }
                    else if(key == "input"){
                        content[key].type = "radio";
                        content[key].name = "option";
                    }
                    else {
                        content[key].classList.add(key);
                    }
                    label.appendChild(content[key]);
                }
                nav.appendChild(label);
            });
            const tags = {a, nav};
            for(let key in tags){
                header.appendChild(tags[key]);
            }
            return header;
    }
}

const webPage = new initial();

export {webPage};