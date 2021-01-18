innerhtmlarray()
const boxi = document.querySelector(".boxi")

setInterval(() => {
    innerhtmlarray()
}, 100)

function mysubmit(event) {
    event.preventDefault()


    const name = event.target.children.name.value
    const Family = event.target.children.Family.value
    const tel = event.target.children.tel.value


    fetch("/getserver", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            Family,
            tel
        })
    })
        .then(a => a.json())
        .then(data => {
            document.querySelector('.VALU1').value = ''
            document.querySelector('.VALU2').value = ''
            document.querySelector('.VALU3').value = ''
            innerhtmlarray()
        })
}

function innerhtmlarray() {
    fetch("/get")
        .then(e => e.json())
        .then(data => {
            const datafor = data.tt
            boxi.innerHTML = ''
            for (i = 0; i < datafor.length; i++) {
                if (datafor[i].tel == null) {
                    boxi.innerHTML +=
                        `<div class="box"><div class="text">${datafor[i].name}</div> <div class="text">${datafor[i].Family}</div><div class="text"></div></div>`

                }
                else {
                    boxi.innerHTML +=
                        `<div class="box"><div class="text">${datafor[i].name}</div> <div class="text">${datafor[i].Family}</div><div class="text">0${datafor[i].tel}</div></div>`
                }

            }
        })

}