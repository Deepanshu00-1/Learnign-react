function content(otherFile, Content){
    const domElement = document.createElement(otherFile.type)
    domElement.innerHTML = otherFile.children
    for(const prop in otherFile.props){
        if(prop === 'children')continue;
        domElement.setAttribute(prop, otherFile.props[prop])
    }
    Content.appendChild(domElement)

}


const otherFile = {
    type: 'a',
    props: {
        href: './01basicreact',
        target: '_blank'
    },
    children: 'click here to visit 01basicreact webpage'
}

const mainContent = document.querySelector('#displayContent');

content(otherFile, mainContent)
