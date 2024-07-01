
function customRender2(youtubeLink, container){
    const domElement = document.createElement(youtubeLink.type)
    domElement.innerHTML = youtubeLink.children
    for(const prop in youtubeLink.props){
        if(prop === 'children')continue;
        domElement.setAttribute(prop, youtubeLink.props[prop])
    }
    container.appendChild(domElement);
}

const youtubeLink = {
    type: 'a',
    props:{
        href: 'http://youtube.com',
        target: '_blank'
    },
    children: 'click here to visit Youtube'
}

const mainContainer = document.querySelector("#content");

customRender2(youtubeLink, mainContainer)