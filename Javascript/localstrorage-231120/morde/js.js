const morde = {
    name: "morde",
    age:29
}

const div = document.getElementById("root");
div.innerHTML = morde.name;


function handleClick(e){
    const name = e.target.innerText;
    localStorage.setItem("name",`${name}`)
    location.href = "index2.html"
}

