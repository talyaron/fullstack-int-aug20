function handleSubmit(e){
    e.preventDefault()
    let image = e.target.children.image.value
    let name = e.target.children.name.value
    let price = e.target.children.price.value
    console.log( image)
   

    fetch('/postProduct', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, price, image })
    })
        .then(r => r.json())
        .then(data => {
            console.log(data)
           let products = data.products
           if(data.ok){
            writeToDome(products)
           }
           else{
               alert('A product with chosen name alreay exist. please choose a different product')
           }
            
    
        })
}
 function handleDelet(e)
 {
    let name= e.target.value
     console.log(name)
     

     fetch('/delete', {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
    })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            const { products } = data;
            writeToDome(products);
        })
}
     
     
 
 function writeToDome(products){
    let display = ''
    
    products.forEach(product => {
         let image = imageCreator(product.image)
        console.log(`product name: ${product.name}`)
        console.log(`product price: ${product.price}$`)
        console.log(`product image: ${product.image}`)
        display += `<div class = "products"><span class="name">${product.name}</span> <br> <span class="price">Price:${product.price}$</span><br> <div> <img src="./image/${image}" alt=""> </div> <button value=${product.name} onclick="handleDelet(event)" class="button">DELETE</button></div>`
        
    });
    console.log(display)
    document.getElementById('root').innerHTML=display
    

 }
 function imageCreator(image){
     let imgarr = image.split("")
     console.log(imgarr);

     for(i=0;i<12;i++)
     {
     imgarr.shift()
    }
    console.log(imgarr)
    let newImage = ''
    imgarr.forEach(chr => {
        newImage+=chr 
    });
    console.log(newImage)
     return newImage

 }
 function handleLogin(e){
     e.preventDefault()
     let user= e.target.userName.value
     let passWord =e.target.PassWord.value
     console.log(user,passWord)
     fetch('/login', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user,passWord})
    })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            if(data.ok){
                document.getElementById(`store`).style = `display: block;`
                document.getElementById(`loginHtml`).style = `display: none;`
                console.log(document.cookie)
               let roleArr = document.cookie.split("")
               console.log(roleArr)
               for(i=0;i<5;i++){
                   roleArr.shift()
               }
               console.log(roleArr)
                let role=""
               roleArr.forEach(chr => {
                   
                role+=chr
               });
               console.log(role) 
               document.getElementById('role').innerHTML = `you are signed in as ${role} <br>`
               writeToDome(data.products)
               if(role == 'admin'){
                document.getElementById('role').innerHTML+= 'to add products please fill the folowing details'
                writeToDome(data.products)

               }
               else{
                   document.getElementById(`productCreator`).style = `display: none;`
                   document.getElementsByClassName('button').style = `display: none;`
               }

            }
            else{
               document.getElementById(`login`).innerHTML='incorrect username or password. Please try again'
               
            }
            
           
        })
}

 
 