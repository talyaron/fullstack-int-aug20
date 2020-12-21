console.log(document.cookie)
setInterval(() => {
    if(!document.cookie){
      location.replace("/");
    }
}, 10000); 