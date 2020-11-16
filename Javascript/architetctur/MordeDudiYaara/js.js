        function handleClick(e){
            const choosenColor = e.target.className;
            console.log(choosenColor);
            const newDiv = document.querySelector("#newDiv");
            return newDiv.innerHTML += `<div class=${choosenColor}></div>`;
        }
