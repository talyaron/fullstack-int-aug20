let yearNow = new Date().getFullYear();

whatIsAge = (yearNow, bornYear) =>{
    return yearNow - bornYear;
}
let myAge = whatIsAge(yearNow,2000)


console.log(myAge)