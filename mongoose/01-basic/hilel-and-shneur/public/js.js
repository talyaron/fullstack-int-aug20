onPageLoad()

function mysubmit(event) {
    event.preventDefault()
    const name = event.target.children.name.value
    const catgory = document.querySelector('#country').value
    const number = event.target.children.number.value
    fetch("/sendItem", {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'cache-control':'no-cache'
            },
            body: JSON.stringify({
                name,
                catgory,
                number
            })
        })
        .then(a => a.json())
        .then(data => {
            printData(data.data)
        })
}

function deleteitem(event) {
    const dataid = event.target.dataset.id

    fetch("/deleteItem", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dataid
            })
        })
        .then(a => a.json())
        .then(data => {
            printData(data.data)
        })
}

function onPageLoad() {
    fetch("/onPageLoad")
        .then(a => a.json())
        .then(data => {
            printData(data.data)
        })
}

function statusItem(event) {
    const checkBox = event.target.checked
    const dataid = event.target.dataset.id

    fetch("/checkIf", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                checkBox,
                dataid
            })
        })
        .then(a => a.json())
        .then(data => {
            printData(data.data)
        })
}

const item1 = document.querySelector('.item1')
const item2 = document.querySelector('.item2')
const item3 = document.querySelector('.item3')
const item4 = document.querySelector('.item4')

function printData(data) {
    item1.innerHTML = ''
    item2.innerHTML = ''
    item3.innerHTML = ''
    item4.innerHTML = ''
const style = 'rgba(181, 209, 200, 0.562);opacity:0.4;color:grey'

    for (i = 0; i < data.length; i++) {
        if (data[i].status == 'true') {
            if (data[i].number == null) {
<<<<<<< HEAD
<<<<<<< HEAD
                if (data[i].catgory == 'מוצרי חלב') {
                    item1.innerHTML += `<div class="lists" style='background:burlywood;opacity:0.4;color:grey'><input type="checkbox" checked="true" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">1</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                } else if (data[i].catgory == 'פירות וירקות') {
                    item2.innerHTML += `<div class="lists" style='background:burlywood;opacity:0.4;color:grey'><input type="checkbox" checked="true" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">1</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                } else if (data[i].catgory == 'חד פעמי') {
                    item3.innerHTML += `<div class="lists" style='background:burlywood;opacity:0.4;color:grey'><input type="checkbox" checked="true" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">1</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                } else if (data[i].catgory == 'קפואים') {
                    item4.innerHTML += `<div class="lists" style='background:burlywood;opacity:0.4;color:grey'><input type="checkbox" checked="true" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">1</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                } else {}
            } else {
                if (data[i].catgory == 'מוצרי חלב') {
                    item1.innerHTML += `<div class="lists" style='background:burlywood;opacity:0.4;color:grey'><input type="checkbox" checked="true" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">${data[i].number}</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                } else if (data[i].catgory == 'פרות וירקות') {
                    item2.innerHTML += `<div class="lists" style='background:burlywood;opacity:0.4;color:grey'><input type="checkbox" checked="true" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">${data[i].number}</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                } else if (data[i].catgory == 'חד פעמי') {
                    item3.innerHTML += `<div class="lists" style='background:burlywood;opacity:0.4;color:grey'><input type="checkbox" checked="true" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">${data[i].number}</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                } else if (data[i].catgory == 'קפואים') {
                    item4.innerHTML += `<div class="lists" style='background:burlywood;opacity:0.4;color:grey'><input type="checkbox" checked="true" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">${data[i].number}</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                } else {}
=======
=======
>>>>>>> master
                if (data[i].catgory == 'b') {
                    item1.innerHTML += `<div class="lists" style='${style}'><input type="checkbox" checked="true" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">1</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                }
                else if (data[i].catgory == 'c') {
                    item2.innerHTML += `<div class="lists" style='${style}'><input type="checkbox" checked="true" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">1</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                }
                else if (data[i].catgory == 'd') {
                    item3.innerHTML += `<div class="lists" style='${style}'><input type="checkbox" checked="true" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">1</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                }
                else if (data[i].catgory == 'e') {
                    item4.innerHTML += `<div class="lists" style='${style}'><input type="checkbox" checked="true" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">1</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                }
                else {
                }
            }
            else {
                if (data[i].catgory == 'b') {
                    item1.innerHTML += `<div class="lists" style='${style}'><input type="checkbox" checked="true" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">${data[i].number}</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                }
                else if (data[i].catgory == 'c') {
                    item2.innerHTML += `<div class="lists" style='${style}'><input type="checkbox" checked="true" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">${data[i].number}</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                }
                else if (data[i].catgory == 'd') {
                    item3.innerHTML += `<div class="lists" style='${style}'><input type="checkbox" checked="true" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">${data[i].number}</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                }
                else if (data[i].catgory == 'e') {
                    item4.innerHTML += `<div class="lists" style='${style}'><input type="checkbox" checked="true" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">${data[i].number}</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                }
                else {
                }
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
            }
        } else {
            if (data[i].number == null) {
                if (data[i].catgory == 'b') {
                    item1.innerHTML += `<div class="lists"><input type="checkbox" dataset="fauls" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">1</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
<<<<<<< HEAD
<<<<<<< HEAD
                } else if (data[i].catgory == 'פירות וירקות') {
                    item2.innerHTML += `<div class="lists"><input type="checkbox" dataset="fauls" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">1</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                } else if (data[i].catgory == 'חד פעמי') {
                    item3.innerHTML += `<div class="lists"><input type="checkbox" dataset="fauls" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">1</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                } else if (data[i].catgory == 'קפואים') {
                    item4.innerHTML += `<div class="lists"><input type="checkbox" dataset="fauls" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">1</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                } else {}
            } else {
                if (data[i].catgory == 'מוצרי חלב') {
                    item1.innerHTML += `<div class="lists"><input type="checkbox"dataset="fauls" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">${data[i].number}</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                } else if (data[i].catgory == 'פרות וירקות') {
                    item2.innerHTML += `<div class="lists"><input type="checkbox"dataset="fauls" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">${data[i].number}</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                } else if (data[i].catgory == 'חד פעמי') {
                    item3.innerHTML += `<div class="lists"><input type="checkbox"dataset="fauls" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">${data[i].number}</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                } else if (data[i].catgory == 'קפואים') {
=======
=======
>>>>>>> master
                }
                else if (data[i].catgory == 'c') {
                    item2.innerHTML += `<div class="lists"><input type="checkbox" dataset="fauls" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">1</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                }
                else if (data[i].catgory == 'd') {
                    item3.innerHTML += `<div class="lists"><input type="checkbox" dataset="fauls" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">1</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                }
                else if (data[i].catgory == 'e') {
                    item4.innerHTML += `<div class="lists"><input type="checkbox" dataset="fauls" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">1</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                }
                else {
                }
            }
            else {
                if (data[i].catgory == 'b') {
                    item1.innerHTML += `<div class="lists"><input type="checkbox"dataset="fauls" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">${data[i].number}</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                }
                else if (data[i].catgory == 'c') {
                    item2.innerHTML += `<div class="lists"><input type="checkbox"dataset="fauls" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">${data[i].number}</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                }
                else if (data[i].catgory == 'd') {
                    item3.innerHTML += `<div class="lists"><input type="checkbox"dataset="fauls" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">${data[i].number}</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                }
                else if (data[i].catgory == 'e') {
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
                    item4.innerHTML += `<div class="lists"><input type="checkbox"dataset="fauls" onclick="statusItem(event)"data-id="${data[i]._id}"><div class="list">${data[i].name}</div><div class="list">${data[i].number}</div><img src="img/icons8-close-window-100.png" onclick="deleteitem(event)" data-id="${data[i]._id}"></div>`
                } else {}
            }
        }
    }
}