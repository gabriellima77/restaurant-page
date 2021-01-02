const about = function() {

    const About = ()=> {
        let para;
        const main = document.querySelector("main");
        const children = Array.from(main.children);
        const hasPara = children.filter(child =>{
            if(child.id != "cover"){
                main.removeChild(child);
            }
            else if(child.node == "P"){
                para = child;
                return true;
            }
        })[0];
        if(!hasPara){
            para = document.createElement("p")
            para.classList.add("text");
        }
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        h2.id = "main-text";
        h2.textContent = "About";
        div.appendChild(h2);
        div.classList = "box";
        para.textContent = "We're the best restaurant on galaxy, if you don't belive in us come here to eat." +
                           "We have the best meat in our planet. The meat that we use is made in a 3d printer and" +
                           " our scientists are 100% sure that this don't cause cancer." +
                           " If you're vegan you can eat here too, because we don't kill any animal to make our meat." +
                           "We also have vegetables and fruits, but we don't want to be boring like a salad, nothing against" +
                           " salads.";
        div.appendChild(para);
        main.appendChild(div);
    }
    return {About}
}

const aboutEvent = about();

export {aboutEvent};