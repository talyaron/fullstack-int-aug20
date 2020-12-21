const getCookie = () => {
    let cookieName = 'details';
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


const checkForCookie = () => {
    const user = getCookie();
    if (user != "") {
        return user;
    } else {
        return null;
    }
}



const onLoadHomePage = () => {
    let user = checkForCookie();
    if (!user) {
        window.location.href = 'index.html';
    } else {
        // user is logged in with cookie
        document.getElementById('welcome').innerHTML = `Welcome ${user}`
    }
    setInterval(() => {
        user = checkForCookie();
        if (!user) {
            window.location.href = 'index.html';
        }
    }, 5000);
}

const onLoadIndex = () => {
    let user = checkForCookie();
    if (user) {
        // user is connected - redirect to homepage
        window.location.href = 'HomePage.html';
    }
    setInterval(() => {
        user = checkForCookie();
        if (user) {
            window.location.href = 'HomePage.html';
        }
    }, 5000);
}

const login = (e) => {
    e.preventDefault();

    let firstname = e.target.children.firstname.value;
    let password = e.target.children.password.value;
    let concat = {
        "name": firstname,
        "password": password
    }


    fetch('http://localhost:3000/send-details', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(concat)
        }).then(res =>
            res.json()
        )
        .then(data => {
            if (data) {
                window.location.href = 'HomePage.html';
            } else {
                document.getElementById('root').innerHTML = "You are not allowed";
            }
        })
}