
function itemProperties(event) {
    

    let test = products.find((e)=>{

        if(e.name=='iPhone 12 Pro')
        return e.name
    })

    

    event.target.innerHTML += `<div>${test.name}</div>`;
   console.log(test.description);
    



    // console.log(test);
    

    // if(propertiesDiv.style.display=='block'){
    //     propertiesDiv.style.display='none';
    // }
    // else{
    //     propertiesDiv.style.display='block'
    // }
   
    



    
    




   
 


}