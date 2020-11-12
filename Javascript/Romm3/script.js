const theElement=[];

function addElementToTheScrollBar(e){

    
    const currntElement = e.target;
    console.dir(currntElement.dataset.color);
    theElement.push(currntElement);
    console.dir(theElement);
    
    let elemetsMainBox =  document.getElementById('addedElements');
    console.dir(elemetsMainBox);
    
    theElement.forEach(element => {
        elemetsMainBox.innerHTML+=`<div data-set=${theElement.dataset.color}"></div>`;
    });

    
}