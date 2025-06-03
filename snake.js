
let blockSize = 25;
let snakeHeadX=0 
let snakeHeadY=0 
let velocityX= 0;
let velocityY = 0;


const ctx = document.getElementById("canvas").getContext("2d");

ctx.fillStyle="black";
ctx.fillRect(snakeHeadX,snakeHeadY,blockSize,blockSize)

addEventListener("keydown", e=>{
    //taken from https://github.com/ImKennyYip/snake/blob/master/snake.js
     if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
})

function snake(){
    snakeHeadX = snakeHeadX + velocityX;
    snakeHeadY = snakeHeadY + velocityY;
    ctx.fillStyle="black";
    ctx.fillRect(snakeHeadX,snakeHeadY,blockSize,blockSize)
}

function update(){

ctx.fillStyle="white"
ctx.fillRect(0,0,150,150)
snake()
    requestAnimationFrame(update);
}
update()