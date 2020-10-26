//primitive variabels

var city = 'Kedumim' //it is an old declaration, similar to let
let name = "Tal"; //string
const email = "Yaron";
let phoneNumber = 49; //number;

name = 23 //number
name = true;
name = false; //booleans
name = null // nothing, undefined in memory
name = undefined //there is a location in memory, but no value was asign

let student= {name:"tal", surename:'Yaron'} //obj {key:value, key:value, key:value}

console.log(student.name);
console.log(student['name']);

console.log(student.surename);
console.log(student['surename']);

//object variables


//object
const animal = {
    name: "אוגר",
    size: "קטן",
    src: "https://images.maariv.co.il/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_380,w_500/543439",
    color: "לבן",
    weight: "150g"
};



let image = document.getElementById('animalPic');
const title = document.getElementById('title')
console.dir(image)
image.src = animal.src;
title.innerText  = `My beloved animal is ${animal.name}`

//array
const arr = ['Gilad', 'Ira', 'Olga', 12, true] //[elm, elm, elm]
console.log(arr)
console.log(arr[0]);
console.log(arr[4])
arr[4] = false;

arr[5] = 1;

console.log(arr)
console.log(arr[4])
arr.push('')


//date
const today = new Date();
const days = ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'];
const todayInNumbers = today.getDay();
console.log('todayInNumbers',todayInNumbers )
console.log(`היום יום ${days[todayInNumbers]}`);

