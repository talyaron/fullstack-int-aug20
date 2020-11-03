
let fruts = [];

function getfrut() {
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const color = document.getElementById('color').value;
    const weight = document.getElementById('weight').value;
    const season = document.getElementById('season').value;

    let frut = {
        name: name,
        gender: gender,
        color: color,
        weight: weight,
        season: season
    };
    fruts.push(frut);
    return fruts;
};

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
    outputForm.innerHTML = ` <p> הפרי עם הערך הגבוה ביותר הוא: ${findAndprintTheBestFrut(fruts)} `;
}








// console.log(fruts);


