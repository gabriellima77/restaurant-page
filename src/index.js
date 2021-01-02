import {webPage} from './initial';
import {aboutEvent} from './about';
import {Menu} from './menu';
import {contactEvent} from './contact';


const page = (function () {
    const content = document.querySelector("#content");
    content.appendChild(webPage.makeNavBar);
    content.appendChild(webPage.makeMain);
    const options = document.querySelectorAll(".option");
    const functions = {About: aboutEvent.About, Menu, Contact: contactEvent.Contact};
    options.forEach(label=> {
        const key = label.textContent.trim();
        label.children[1].onclick = ()=> {
            functions[key](label);
            const children = Array.from(label.children);
            const checkBox = children[1];
            const span = children[0];
            if(checkBox.checked){
                label.style.color = "#fccb90";
                span.style.backgroundColor = "#fccb90";
                options.forEach(lab => {
                    if(lab != label){
                        lab.style.color = "white";
                        lab.firstElementChild.style.backgroundColor = "white";
                    }
                })
            }
        };
    });
    content.appendChild(webPage.makeFooter);
})();

