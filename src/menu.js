class Card {
    constructor(type){
        this.type = type;
        this.card = document.createElement("div");
        this.card.classList.add("card");
        this.active = false;
        this.card.addEventListener("click", this.clickEvent.bind(this));
        this.links = {Pizzas: "img/pizza.jpg", Hamburgers: "img/hamburger.jpg", Dinner: "img/dinner.jpg"};
    }

    get makeCard(){
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const arrow = document.createElement("div");
        arrow.classList.add("arrow");
        h3.textContent = this.type;
        h3.classList.add("menu-type");
        img.classList.add("food");
        img.src = this.links[this.type];
        this.card.appendChild(img);
        this.card.appendChild(h3);
        this.card.appendChild(arrow);
        return this.card;
    }

    clickEvent() {
        if(!this.active){
            const arrow = Array.from(this.card.children).filter(content=> {
                if(content.nodeName == "DIV"){
                    return content;
                }
            })[0];
            this.card.classList.add("active");
            this.card.classList.remove("card");
            this.event = this.arrowEvent.bind(this, arrow);
            arrow.addEventListener("click", this.event, true);
        }
        this.active = false;
    }

    arrowEvent(arrow) {
        this.card.classList.remove("active");
        this.card.classList.add("card");
        arrow.removeEventListener("click", this.event, true);
        this.active = true;
    }
}

export const Menu = ()=> {
    const container = document.querySelector("#content");
    const height = document.querySelector("#main-content").clientHeight;
    const cardsType = ["Pizzas", "Hamburgers", "Dinner"];
    let main = document.querySelector("main");
    if(main) {
        container.removeChild(main);
    }
    main = document.createElement("main");
    main.classList.add("bg");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.id = "main-text";
    h2.textContent = "Menu";
    div.appendChild(h2);
    cardsType.forEach(type=> {
        let card = new Card(type);
        div.appendChild(card.makeCard);
    })
    div.classList.add("menu");
    main.appendChild(h2);
    main.appendChild(div);
    container.appendChild(main);
    window.scrollTo({top: height, left: 0, behavior: "smooth"});
}