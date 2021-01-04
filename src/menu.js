class Card {

    constructor(type){
        this.type = type;
        this.card = document.createElement("div");
        this.card.classList.add("card");
        this.active = false;
        this.card.addEventListener("click", this.clickEvent.bind(this));
        this.links = {Pizzas: "img/pizza.jpg", Hamburgers: "img/hamburger.jpg", Dinner: "img/dinner.jpg", Drinks: "img/drink.jpg"};
        this.menu = {
                        Pizzas: {
                                prices: ["15.50", "14.75", "30.00", "2420.00"],
                                food: ["Neapolitan Pizza", "Sicilian Pizza", "California Pizza", "White Truffle and Gold Pizza"]
                             },
                        Hamburgers: {
                                    prices: ["9.25", "12.99", "15.30", "5000.00"],
                                    food: ["Beef Burger", "Elk Burger", "Bison Burger", "Fleurburger"]
                     },
                        Dinner: {
                                    prices: ["20.99", "200.45", "70.35", "60.32", "120.50", "2500.00", "25000.00"],
                                    food: ["Tacos", "Chili crab", "Shish kebab", "Sushi", "Massaman curry", "Samundari Khazana", "Grand Velas Tacos"]
                        },
                        Drinks: {
                                    prices: ["50.25", "45.97", "77.46", "9999.99"],
                                    food: ["Chardonnay", "Belvedere Vodka", "Quilmes Beer", "Water"]
                        }
                    }
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
        const div = document.createElement("div");
        div.classList.add("img-arrow");
        if(!this.active){
            const arrow = Array.from(this.card.children).filter(content=> {
                if(content.nodeName == "DIV"){
                    return content;
                }
            })[0];
            this.card.classList.add("active");
            this.card.classList.remove("card");
            if(this.menu[this.type]){
                const numberOfPlates = this.menu[this.type].food.length;
                this.card.addEventListener("transitionend", this.putMenu.bind(this, numberOfPlates, 50));
            }
            this.event = this.arrowEvent.bind(this, arrow);
            arrow.addEventListener("click", this.event, true);
        }
        this.active = false;
    }

    putMenu(numberOfPlates, patterSize) {
        if(this.card.classList.contains("card")) return;
        const hasContent = Array.from(this.card.children).filter(child=> {
            if(child.classList.contains("menu-content")){
                return child;
            }
        })[0];
        if(!hasContent){
            const menu = this.menu[this.type];
            const div = document.createElement("div");
            div.classList.add("menu-content");
            for(let i = 0; i < numberOfPlates; i++){
                let dots = "";
                let para = document.createElement("p");
                let text = menu["prices"][i] + menu["food"][i];
                let numberOfDots = patterSize - text.length;
                for(let j = 0; j < numberOfDots; j++){
                    dots += ".";
                }
                para.textContent = menu["food"][i] + dots + "$" +menu["prices"][i];
                div.appendChild(para);
            }
            this.card.appendChild(div);
        }
    }

    arrowEvent(arrow) {
        const hasContent = Array.from(this.card.children).filter(child=> {
            if(child.classList.contains("menu-content")){
                return child;
            }
        })[0];
        if(hasContent){
            this.card.removeChild(hasContent);
        }
        this.card.classList.remove("active");
        this.card.classList.add("card");
        arrow.removeEventListener("click", this.event, true);
        this.active = true;
    }
}

export const Menu = ()=> {
    const container = document.querySelector("#content");
    const height = document.querySelector("#main-content").clientHeight;
    const cardsType = ["Pizzas", "Hamburgers", "Dinner", "Drinks"];
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