import {nav} from "./bar";


const page = (function () {
    const content = document.querySelector("#content");
    content.appendChild(nav.makeNaveBar());
})();

