
        const Cloun = document.querySelector('#Cloun');
        const TopCover = document.querySelector('#topCover');
        const box = document.querySelector('#box');
        const boxButton = document.querySelector('.box');
        const plane = document.querySelector('#plane');
        const planeButton = document.querySelector('.plane');

        /* ליצן מופיע בלחיצה על קופסא */
        box.addEventListener('click', function (event1) {//box clicked
            console.log("box clicked");
            Cloun.style.width = "100px";
            Cloun.style.height = "100px";
            Cloun.style.transform = 'translate(0px,-100px)';
            Cloun.src = "img/clown.png";
            TopCover.style.top = "460px";
            TopCover.style.transform = "skewY(-20deg)";
            /*   top: 460px;
          transform: skewY(-20deg); */

            box.addEventListener('mouseleave', function (event) {
                console.log("Box leaved");
                Cloun.style.transform = 'translate(0px,20px)';
                /*  Cloun.src = ""; */
                /* Cloun.style.width = "0px";
                Cloun.style.height = "0px"; */
                TopCover.style.top = "495px";
                TopCover.style.transform = "skewY(0deg)";
            });

        });


        /* ליצן מופיע בלחיצה על מטוס */
        plane.addEventListener('click', function (event1) {//plane clicked
            console.log("box clicked");
            Cloun.style.width = "100px";
            Cloun.style.height = "100px";
            Cloun.style.transform = 'translate(0px,-100px)';
            Cloun.src = "img/clown.png";
            TopCover.style.top = "460px";
            TopCover.style.transform = "skewY(-20deg)";


            plane.addEventListener('mouseleave', function (event) {
                console.log("Plane leaved");
                Cloun.style.transform = 'translate(0px,20px)';
            });

        });


        boxButton.addEventListener('click', function (event1) {
            plane.style.display = "none";
            TopCover.style.display = "block";
            box.style.display = "block";

        });

        planeButton.addEventListener('click', function (event1) {
            plane.style.display = "block";
            TopCover.style.display = "none";
            box.style.display = "none";
        });
        plane.addEventListener('dragstart', function dragStart(event2){
            
          /*  setTimeout(() => (this.className = 'invisible'), 0); */
            var position = event2.target;
            console.log( position.x)
            plane.style.left = position.x + 'px';
            plane.style.top = position.y + 'px';
            console.log( plane.style.left)
        });

        