const theElement=[];

function addElementToTheScrollBar(e){

    
    const currntElement = e.target;
    
    theElement.push(currntElement);
    console.dir(theElement);
    
    let elemetsMainBox =  document.getElementById('addedElements');
    console.dir(elemetsMainBox);
    
    elemetsMainBox.innerHTML+=theElement;

    
}