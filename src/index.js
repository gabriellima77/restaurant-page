import {nav} from "./bar";
import {main} from "./main-content";


const page = (function () {
    const content = document.querySelector("#content");
    content.appendChild(nav.makeNaveBar());
    content.appendChild(main.makeMain());
})();

