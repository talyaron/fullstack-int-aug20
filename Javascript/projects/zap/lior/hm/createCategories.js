function cratecategorey (){
    const categorisarray = []
    products.forEach(product => {
        categorisarray.push(product.category)
        duplicates(categorisarray)
    })
}

function duplicates(categorisarray){
const filterarray = []
categorisarray.forEach(category => {
    if(!filterarray.includes(category)){
        filterarray.push(category)
        filterarray.sort((a,b)=>{
            if(a<b)return -1
        })
    }
})
rendercategoris(filterarray)
}

function rendercategoris(filterarray){
    const rendercategoris = document.getElementById("categoriesName")
    let html=''
    filterarray.forEach(category=>{
        html+=`<div>${category}</div>
        <div><img src="img/${category}.jpg"></div>`
    })
    rendercategoris.innerHTML=html;
}