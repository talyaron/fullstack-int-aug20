
    let fruts = [];
    const namefild = document.getElementById('name');
    const genderfild = document.getElementById('gender');
    const colorfild = document.getElementById('color');
    const weightfild = document.getElementById('weight');
    const seasonfild = document.getElementById('season');

function getfrut() {
    const name = namefild.value;
    const gender = genderfild.value;
    const color = colorfild.value;
    const weight = weightfild.value;
    const season = seasonfild.value;
 
    namefild.value ="";
    genderfild.value="";
    colorfild.value="";
    weightfild.value="";
    seasonfild.value="";

    let frut = {
        name: name,
        gender: gender,
        color: color,
        weight: weight,
        season: season
    };
    fruts.push(frut);
    displayarray(fruts);
    return fruts;
};

function displayarray(fruts){ 
    const frutNameArray = [];
    const Arryoutput = document.getElementById("Arryoutput");
    Arryoutput.innerHTML = `<h1>הפירות שהוזנו</h1>`;
    
    fruts.forEach(obj=>{
        frutNameArray.push(obj.name);
    })

    frutNameArray.forEach(name=>{
        Arryoutput.innerHTML += `<p> ${name} </p>`;
    });

}

function caloryValue(frut) {
    let seasonValue = 0;
    let colorValue = 0;
    let weightValue = 0;

    if (frut.season == "חורף") {
         seasonValue = 0.3;
    } else {
        if (frut.season == "קיץ") {
             seasonValue = 0.7;
        } else {
            if (frut.season == "אביב") {
                 seasonValue = 0;
            } else {
                if (frut.season == "סתיו") {
                     seasonValue = 0;
                } else {
                    if (frut.season == "שנתי") {
                         seasonValue = 0.4;
                    } else {
                         seasonValue = 0;
                    }
                }
            }
        }
    }

    if (frut.color == "אדום") {
         colorValue = 0.9;
    } else {
        if (frut.color == "כתום") {
             colorValue = 0.7;
        } else {
            if (frut.color == "צהוב") {
                 colorValue = 0.6;
            } else {
                if (frut.color == "ירוק") {
                     colorValue = 0.2;
                } else {
                     colorValue = 0;
                }
            }
        }
    }


    if (frut.weight >= 1000) {
         weightValue = 0.1;
    } else {
        if (frut.weight >= 500) {
             weightValue = 0.2;
        } else {
            if (frut.weight >= 100) {
                 weightValue = 0.8;
            } else {
                if (frut.weight >= 10) {
                     weightValue = 0.6;
                } else {
                    if (frut.weight == 0) {
                         weightValue = 0;
                    } else {
                         weightValue = 0;
                    }
                }
            }
        }
    }



    const clalckValue = (seasonValue * colorValue * weightValue);
    console.log(clalckValue);
    return clalckValue;

}

function findAndprintTheBestFrut(fruts) {
    const calFrutArry = [];
    fruts.forEach(function (frut) {
        const calfrut = { name: frut.name, CALVAL: caloryValue(frut) };
        calFrutArry.push(calfrut);
    });
    console.log(calFrutArry);
    // calFrutArry.max.apply(calFrutArry, array.map(function(o) { return o.calval; }))
    const max = Math.max.apply(Math,calFrutArry.map(function(t){return t.CALVAL}));
    // const maxValFrutName = math.find.apply(math,calFrutArry.map(function(t){return t.name}));
    const maxValFrutName = calFrutArry.find(o => o.CALVAL === max).name;
    console.log(maxValFrutName);
    return maxValFrutName;
}

function printThebestfrut() {

    const outputForm = document.getElementById("outputForm");
    outputForm.innerHTML = ` <p> הפרי עם הערך הגבוה ביותר הוא:</p> <p>${findAndprintTheBestFrut(fruts)}</p> <div id="imag"><img src="img/${findAndprintTheBestFrut(fruts)}.jpg" alt=""></div>`;
}

function findTheGrean(fruts){
    const greanFroots =[];
    fruts.forEach(frut=>{
if (frut.color == "ירוק"){

    greanFroots.push(frut)  
}

    }); 

return greanFroots;
}


function printTheGreanFruts(){
    outputForm.innerHTML =`<h1 id="outputFormHeder">הפירות הירוקים הם:</h1>`;
    const greanFroots = findTheGrean(fruts);
    greanFroots.forEach(frut=>{
     outputForm.innerHTML += ` <p> ${frut.name} </p> <div id="imag"><img src="img/${frut.name}.jpg" alt=""></div>`;
    
    
   })
}


// console.log(fruts);


