
        function handlesubmit(e) {
            e.preventDefault()
            let userName = e.target.userName.value
            let passWord = e.target.passWord.value
            console.log(userName)
            console.log(passWord)
            console.log(window.location.href)
            fetch('/log-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName, passWord })
            }).then(res => res.json())
                .then(data => {
                    console.log(data.ok)
                    document.cookie
                    console.log(document.cookie)
                    if (document.cookie == 'ok=true') {
                        console.log('succes')
                        window.location.replace("loggin.html");
                    }
                    else{
                        window.location.replace("failed.html");
                    }


                })


        }
        function returnHome(e){
            window.location.replace("index.html");
        };
        setInterval(() => {
            if (document.cookie=='' && window.location.href == "http://localhost:3000/loggin.html")
            {
                window.location.replace("index.html");
            }
            
        }, 3000);
    