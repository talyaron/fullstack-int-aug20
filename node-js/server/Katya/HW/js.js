const canvas = document.getElementById('game'); //the canvas of game
const ctx = canvas.getContext("2d"); // style of game - 2d

const ground = new Image(); //creating img - ground
ground.src = "img/pole.png"; //src of img

const foodImg = new Image(); ////creating othe img - food
foodImg.src = "icons/carot.png"; //src of img

let box = 32; //variable

let score = 0; //variable of score - starting from zero

let foodCoardinat = {
    x: Math.floor((Math.random() * 17 + 1)) * box, //Math.random = random number. Math.flooor = rounding to integer number. 17 + 1 = number of cells. box = size of cell.
    y: Math.floor((Math.random() * 15 + 3)) * box
}

let snake = []; //the start of snake, where is start from
snake[0] = {
    x: 9 * box,
    y: 10 * box
}

document.addEventListener('keydown', direction); //now meter where you click on brouser, it will be react

let dir;

function direction(e) { //function of direction keys
    if (e.keyCode == 37 && dir != "right") //codes of keys - 37 = left arrow. && dir != "right" - snake cant move to other way
        dir = "left";
    else if (e.keyCode == 38 && dir != "down") //38 = up arrow
        dir = "up";
    else if (e.keyCode == 39 && dir != "left") //39 = right arrow
        dir = "right";
    else if (e.keyCode == 40 && dir != "up") //40 = down arrow
        dir = "down";
}

function eatTail(head, arr) { //if snake ate himself the game is stop
    for (let i = 0; i < arr.length; i++) {
        if (head.x == arr[i].x && head.y == arr[i].y)
            clearInterval(game)
    }
}

function drawGame() {
    ctx.drawImage(ground, 0, 0); //function of ground img, starting from 0,0 of area, calling for img to brouser

    ctx.drawImage(foodImg, foodCoardinat.x, foodCoardinat.y) //calling for foodImg and getting coardinats of x and y

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i == 0 ? "green" : "yellow"; //getting square of green color
        ctx.fillRect(snake[i].x, snake[i].y, box, box); //getting parametres of snake 
    }

    ctx.fillStyle = "white" //color of text
    ctx.font = "50px Arial" //size and font of text
    ctx.fillText(score, box * 2.5, box * 1.7) //marging of text

    let snakeX = snake[0].x; //save X coardinat of snake[0]
    let snakeY = snake[0].y // same with Y

    if (snakeX == foodCoardinat.x && snakeY == foodCoardinat.y) { //if the snake ate the food, the scoree ++ and we delete the last element
        score++;
        foodCoardinat = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box
        };
    } else {
        snake.pop(); //.pop() delete the last element if array
    }

    if (snakeX < box || snakeX > box * 17 || //if snake touching the border the game stop
        snakeY < 3 * box || snakeY > box * 17)
        clearInterval(game);

    if (dir == "left") snakeX -= box; //the snake mooving minus 1 box 
    if (dir == "right") snakeX += box; //plus box
    if (dir == "up") snakeY -= box; //the snake mooving minus 1 box
    if (dir == "down") snakeY += box; //plus box

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    eatTail(newHead, snake);

    snake.unshift(newHead)
}

let game = setInterval(drawGame, 100); //calling for drawGame function every 1ms