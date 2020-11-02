for(let i=0;i<9;i++){
    console.log(i)
}
let numbers = [20,25,10,4,35,153,65];
numbers.forEach(function(el){
    console.log(el);
})
numbers.map((elm,index)=>{
    console.log(index,':',elm)
})