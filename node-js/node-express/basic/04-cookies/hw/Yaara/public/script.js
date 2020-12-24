  function handleClick (e) {
     let selection = e.target.outerText;
     let chosenArr = [];
     chosenArr =  getCookie();
     chosenArr ? chosenArr.push(selection) : chosenArr = [selection];
 
     setItemsToDisplay(chosenArr);

    post(chosenArr);
}



 function onLoad() {
    chosenArr =  getCookie();
    setItemsToDisplay(chosenArr);
}

function setItemsToDisplay(items) {
    if (items && items.length != 0) {
        document.getElementById('theList').innerHTML= `<ol>${items.map(item => `<li>${item}</li>`).join('')}</ol>`;
    }
}

const post = (chosenArr) => {
    fetch('/send-chosen', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({chosenArr})
    }).then(res => {
        
    })
    .then(data=>{
        // document.getElementById('theList').innerHTML = data.chosen;
    }) 
}

const reset = () => {
    fetch('/reset', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => {
        
    })
    .then(data=>{
        document.getElementById('theList').innerHTML ='';
    }) 
}


const getCookie = () => {
    var name = "IFollowYou" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return JSON.parse(c.substring(name.length, c.length).replaceAll("'",""));
        }
    }
    return null;
}
