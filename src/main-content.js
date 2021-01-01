
class mainContent{
    constructor(){
        this.main = document.createElement("main");
        this.main.id = "main-content";
    }
    makeMain(){
        const node = { cover: document.createElement("div"),
                       "main-text":  document.createElement("h2") };
        for(let key in node){
            node[key].id = key;
            if(key == "main-text"){
                node[key].textContent = "A new and wonderful experience for your palate.";
            }
            this.main.appendChild(node[key]);
        }
        return this.main;
    }
}

const main = new mainContent();

export {main};