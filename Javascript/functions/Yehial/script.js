// Ex1
function calcAge(curentYear,birthDay){
    return curentYear-birthDay;

}

const birthYear = 1985;
const year = 2020;

console.log(calcAge(year,birthYear));




// Ex2 1.0v
function UserID(name,surname){
    this.name = name;
    this.surname = surname;
}

const userName = prompt("Please enter you name:");
const surname = prompt("Please enter you surname:");

const user1 = new UserID(userName,surname);
console.log(user1);


// Ex2 2.0v
function fullNameReturn(name,surname){
    return new UserID(name,surname);
}
console.log(fullNameReturn(userName,surname));


<<<<<<< Updated upstream
//HW
//1 Regular Function
const vatCurrentValue = 0.17;
const fullPriceOfSomeProduct = 300;

function returnVat(fullPrice)
{
    return fullPrice*vatCurrentValue;
}
//2 Arrow Function
vatOfSomeProduct = ()=>{

    //you should pass the arguments from the function's arguments
    return fullPriceOfSomeProduct*vatCurrentValue;
}

//3 Annonimus Function 
vatOfProduct = function(){
    //you should pass the arguments from the function's arguments
    fullPriceOfSomeProduct*vatCurrentValue;
}


=======
// Ways to write functions 
// regular
function func1(x){
    return x
}
// annoymous function
const func2 = function(a,b){
    return a*b;
}
// arrow function
const multi2 = (a,b)=>{
    return a*b;
}

>>>>>>> Stashed changes
