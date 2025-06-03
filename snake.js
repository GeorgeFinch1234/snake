
let blockSize = 25;
let snakeHeadX = 375;
let snakeHeadY = 375;
let velocityX = 0;
let velocityY = 0;
let foodx = 300;
let foody = 300;
let gameover = false;
let snakeBody = [];
let score = 0;
class snakeSection {
    constructor(x, y) {
        this.x = x
        this.y = y

    }
}


const ctx = document.getElementById("canvas").getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(snakeHeadX, snakeHeadY, blockSize, blockSize)

addEventListener("keydown", e => {

    if (e.code == "ArrowUp" && velocityY != 25) {
        velocityX = 0;
        velocityY = -25;
    }
    else if (e.code == "ArrowDown" && velocityY != -25) {
        velocityX = 0;
        velocityY = 25;
    }
    else if (e.code == "ArrowLeft" && velocityX != 25) {
        velocityX = -25;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -25) {
        velocityX = 25;
        velocityY = 0;
    }
})

function hit() {
    //25 as width of square and 500 as size of canvas 
    if (snakeBody[0].x < 0 || (snakeBody[0].x + 25) > 500 || snakeBody[0].y < 0 || (snakeBody[0].y + 25) > 500) {
        gameover = true

    }
    for (let i = snakeBody.length - 1; i >= 0; i--) {
        //as will always hit head on head
        if (i != 0) {
            if (snakeBody[i].x == snakeBody[0].x && snakeBody[i].y == snakeBody[0].y) {
                gameover = true;
            }
        }
    }


}
//to reigister if snake over food.
function foodHit() {
    
//checking if head hit anything
    if (snakeBody[0].x == foodx && snakeBody[0].y == foody) {

        snakeBody.push(new snakeSection(foodx, foody))


        //moves the food
        // used as 500%25 = 20, eg so have 20 rows, as one row is 25 pixes in this game 
        //*25 so actually moving it to the correct row
        //math.floor => to get rid of floating points
        foodx = (Math.floor((Math.random() * 20)) * 25)
        foody = (Math.floor((Math.random() * 20)) * 25)
        score += 1
    }

}

function food() {
    ctx.fillStyle = "red";
    ctx.fillRect(foodx, foody, blockSize, blockSize)
}

//500 by 500 is canvas
function snake() {

    //just so don't keep calling command as not needed
    ctx.fillStyle = "black";
    for (let i = snakeBody.length - 1; i >= 0; i--) {

        //one is head so don't need to worry about that but rest do.
        //as its location is auto done by control 
        if (i != 0) {
            //so setting section to where one before it was
            snakeBody[i].x = snakeBody[i - 1].x
            snakeBody[i].y = snakeBody[i - 1].y
        } else {
            //done here else the seond element will have the same new position as the head which 
            snakeBody[0].x = snakeBody[0].x + velocityX;
            snakeBody[0].y = snakeBody[0].y + velocityY;
        }




        ctx.fillRect(snakeBody[i].x, snakeBody[i].y, 25, 25)
    }

}

function update() {

    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 500, 500)

    snake()
    hit()
    foodHit()
    food()
    if (!gameover) {
        setTimeout(update, 125);

    } else {
        if (localStorage.getItem("score") == null) {
            localStorage.setItem("score", score)
            window.alert("Game over your score was " + score)
        } else if (localStorage.getItem("score") > score) {
            window.alert("Game over your score was " + score + " past high score was " + localStorage.getItem("score"))
        } else {
            window.alert("game over, new high score " + score)
            localStorage.setItem("score", score)
        }

    }
}

//set up
function draw() {
    //set initial head in list
    snakeBody.push(new snakeSection(snakeHeadX, snakeHeadY))

    update()


}
draw()
