class Card {
    constructor(type){
        this.type = type;
        this.card = document.createElement("div");
        this.card.classList.add("card");
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
}

export const Menu = ()=> {
    const container = document.querySelector("#content");
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
    window.scrollTo({top: container.clientHeight, left: 0, behavior: "smooth"});
}