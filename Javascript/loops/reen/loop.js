for(let i=0;i<9;i++){
    console.log(i)
}

let i=0
console.log('while')
while(i<1001){
    console.log(i);
    i++
}



let cars = ["tesla","bmw","volvo","citroen","subaro","toyota","Renault"];
cars.forEach(function(el){
    console.log(el);
})
cars.map((elm,index)=>{
    console.log(index,':',elm)
})