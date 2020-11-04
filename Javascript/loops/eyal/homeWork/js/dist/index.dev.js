"use strict";

var fruts = [];
var namefild = document.getElementById('name');
var genderfild = document.getElementById('gender');
var colorfild = document.getElementById('color');
var weightfild = document.getElementById('weight');
var seasonfild = document.getElementById('season');

function getfrut() {
  var name = namefild.value;
  var gender = genderfild.value;
  var color = colorfild.value;
  var weight = weightfild.value;
  var season = seasonfild.value;
  namefild.value = "";
  genderfild.value = "";
  colorfild.value = "";
  weightfild.value = "";
  seasonfild.value = "";
  var frut = {
    name: name,
    gender: gender,
    color: color,
    weight: weight,
    season: season
  };
  fruts.push(frut);
  displayarray(fruts);
  return fruts;
}

;

function displayarray(fruts) {
  var frutNameArray = [];
  var Arryoutput = document.getElementById("Arryoutput");
  Arryoutput.innerHTML = "<h1>\u05D4\u05E4\u05D9\u05E8\u05D5\u05EA \u05E9\u05D4\u05D5\u05D6\u05E0\u05D5</h1>";
  fruts.forEach(function (obj) {
    frutNameArray.push(obj.name);
  });
  frutNameArray.forEach(function (name) {
    Arryoutput.innerHTML += "<p> ".concat(name, " </p>");
  });
}

function caloryValue(frut) {
  var seasonValue = 0;
  var colorValue = 0;
  var weightValue = 0;

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

  var clalckValue = seasonValue * colorValue * weightValue;
  console.log(clalckValue);
  return clalckValue;
}

function findAndprintTheBestFrut(fruts) {
  var calFrutArry = [];
  fruts.forEach(function (frut) {
    var calfrut = {
      name: frut.name,
      CALVAL: caloryValue(frut)
    };
    calFrutArry.push(calfrut);
  });
  console.log(calFrutArry); // calFrutArry.max.apply(calFrutArry, array.map(function(o) { return o.calval; }))

  var max = Math.max.apply(Math, calFrutArry.map(function (t) {
    return t.CALVAL;
  })); // const maxValFrutName = math.find.apply(math,calFrutArry.map(function(t){return t.name}));

  var maxValFrutName = calFrutArry.find(function (o) {
    return o.CALVAL === max;
  }).name;
  console.log(maxValFrutName);
  return maxValFrutName;
}

function printThebestfrut() {
  var outputForm = document.getElementById("outputForm");
  outputForm.innerHTML = " <p> \u05D4\u05E4\u05E8\u05D9 \u05E2\u05DD \u05D4\u05E2\u05E8\u05DA \u05D4\u05D2\u05D1\u05D5\u05D4 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05D4\u05D5\u05D0: ".concat(findAndprintTheBestFrut(fruts), " </p>");
}

function findTheGrean(fruts) {
  var greanFroots = [];
  fruts.forEach(function (frut) {
    if (frut.color == "ירוק") {
      greanFroots.push(frut);
    }
  });
  return greanFroots;
}

function printTheGreanFruts() {
  var outputFormHeder = document.getElementById("outputFormHeder");
  outputFormHeder.innerHTML = " \u05D4\u05D9\u05E8\u05E7\u05D5\u05EA \u05D4\u05D9\u05E8\u05D5\u05E7\u05D9\u05DD \u05D4\u05DD";
  outputForm.innerHTML = "<h1 id=\"outputFormHeder\">\u05DC\u05D5\u05D7 \u05D4\u05EA\u05D5\u05E6\u05D0\u05D5\u05EA</h1>";
  var greanFroots = findTheGrean(fruts);
  greanFroots.forEach(function (frut) {
    outputForm.innerHTML += " <p> ".concat(frut.name, " </p>");
  });
} // console.log(fruts);