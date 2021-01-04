const contact = function (){
    
    const Contact = ()=> {
        const contact = {Phone: "(55) 555-6420", Email: "best4eat@potato.com", Address: "Area 51, NV, USA"};
        const container = document.querySelector("#content");
        let main = document.querySelector("main");
        if(main){
            container.removeChild(main);
        }
        main = document.createElement("main");
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        h2.id = "main-text";
        h2.textContent = "Contact";
        div.appendChild(h2);
        div.classList.add("box");
        for(let key in contact){
            let block = document.createElement("div");
            block.classList.add("contact");
            let h3 = document.createElement("h3");
            let para = document.createElement("p");
            h3.textContent = key + " : ";
            para.textContent = contact[key];
            block.appendChild(h3);
            block.appendChild(para);
            div.appendChild(block);
        }
        main.appendChild(div);
        container.appendChild(main);
        window.scrollTo({top: container.clientHeight, left: 0, behavior: "smooth"});
    }
    return {Contact};
}

const contactEvent = contact();

export {contactEvent};