const root = document.querySelector("#root");
const anchorData = {
    value: "Click to visit Google",
    ref: "https://google.com"
}

function customRender(element,{value,ref}){
    element.innerHTML = value;
    element.setAttribute("href",ref);
    root.appendChild(element);
}

function reactElement(){
    const element = document.createElement("a");
    return element;
}

customRender(reactElement(),anchorData);