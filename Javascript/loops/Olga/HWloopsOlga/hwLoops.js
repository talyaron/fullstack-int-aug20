let actors = [{name: 'Charlie Hunnam', age: 40, gender: 'male', height: 1.85},
              {name: 'Charlize Theron', age: 45, gender: 'female', height: 1.77},
              {name: 'Jude Law', age: 47, gender: 'male', height: 1.78},
              {name: 'Natalie Portman', age: 39, gender: 'female', height: 1.60},
              {name: 'Vincent Cassel', age: 53, gender: 'male', height: 1.87},
              {name: 'Sharon Stone', age: 62, gender: 'female', height: 1.74}]

              

let highGrowth = document.getElementById('highGrowth') 
let notYoung = document.getElementById('notYoung')  
let women = document.getElementById('women')    

let htmlHighGrowth = ''

actors.forEach(elm =>{
    if(elm.height>1.75){
    htmlHighGrowth+=`<p style="font-weight:bold;">Name:${elm.name}</p>
                     <p>Age:${elm.age}</p>
                     <p>Gender:${elm.gender}</p>
                     <p>Height:${elm.height}</p>`
    }
    
})
console.log(htmlHighGrowth)
highGrowth.innerHTML += htmlHighGrowth;


let htmlNotYoung = ''

actors.forEach(elm =>{
    if(elm.age>45){
        htmlNotYoung+=`<p style="font-weight:bold;">Name:${elm.name}</p>
        <p>Age:${elm.age}</p>
        <p>Gender:${elm.gender}</p>
        <p>Height:${elm.height}</p>`
    }
})
console.log(htmlNotYoung)
notYoung.innerHTML = htmlNotYoung

let htmlWomen = ''

actors.forEach(elm => {
    if(elm.gender == 'female'){
        htmlWomen+=`<p style="font-weight:bold;">Name:${elm.name}</p>
        <p>Age:${elm.age}</p>
        <p>Gender:${elm.gender}</p>
        <p>Height:${elm.height}</p>`
    }
})
console.log(htmlWomen)
women.innerHTML = htmlWomen

