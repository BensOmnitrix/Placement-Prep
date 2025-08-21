function customRender(reactElement,container){
    const tagType = reactElement.type;
    const attributes = reactElement.props;
    const text = reactElement.children;

    const childElement = document.createElement(tagType);
    for(const key in attributes){
        childElement.setAttribute(key,attributes[key]);
    }

    childElement.innerHTML = text;

    container.appendChild(childElement);
}

const mainContainer = document.querySelector("#root")

customRender(reactElement,mainContainer);