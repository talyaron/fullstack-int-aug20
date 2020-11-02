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
