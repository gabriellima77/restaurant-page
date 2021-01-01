const events = function () {
    const para = document.createElement("p");
    para.classList.add("text");
    const About = ()=> {
        const main = document.querySelector("#main-content");
        const h1 = document.querySelector("#main-text");
        h1.textContent = "About";
        para.textContent = "We're the best restaurant on galaxy, if you don't belive in us come here to eat." +
                           "We have the best meat in our planet. The meat that we use is made in a 3d printer and" +
                           " our scientists are 100% sure that this don't cause cancer." +
                           " If you're vegan you can eat here too, because we don't kill any animal to make our meat." +
                           "We also have vegetables and fruits, but we don't want to be boring like a salad, nothing against" +
                           " salads.";
        main.appendChild(para);
    }

    const Menu = ()=> {
        alert("menu");
    }

    const Contact = ()=> {
        const main = document.querySelector("#main-content");
        const h1 = document.querySelector("#main-text");
        h1.textContent = "Contact";
        para.textContent = "Something related with contacts";
        main.appendChild(para);
    }
    return {About, Menu, Contact};    
}

const functions = events();
export {functions};
