
let blockSize = 25;
let snakeHeadX=250 
let snakeHeadY=250 
let velocityX= 0;
let velocityY = 0;
let foodx=150;
let foody=150;



const ctx = document.getElementById("canvas").getContext("2d");

ctx.fillStyle="black";
ctx.fillRect(snakeHeadX,snakeHeadY,blockSize,blockSize)

addEventListener("keydown", e=>{
   
     if (e.code == "ArrowUp" && velocityY != 25 ) {
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
//curnelty just canvas border
function hit(){
//25 as width of square and 500 as size of canvas 
    if(snakeHeadX < 0 || (snakeHeadX + 25) > 500 || snakeHeadY < 0 || (snakeHeadY + 25) > 500){
        return true
    }else{
        false
    }

}
//to reigister if snake over food.
function foodHit(){
    //so if it hits it with top left corner
    //first seeing if top left corner somewhere hits food
    //then if top right hits it

    //then if got it on x axnies see if if got it on the y axies
if(snakeHeadX == foodx && snakeHeadY == foody){
    console.log("hit");
}

}

function food(){
ctx.fillStyle="red";
    ctx.fillRect(foodx,foody,blockSize,blockSize)
}

//500 by 500 is canvas
function snake(){
//so doesn't run if at border
    if(!(hit())){
    snakeHeadX = snakeHeadX + velocityX;
    snakeHeadY = snakeHeadY + velocityY;
}
    ctx.fillStyle="black";
    ctx.fillRect(snakeHeadX,snakeHeadY,blockSize,blockSize)
}

function update(){

ctx.fillStyle="white"
ctx.fillRect(0,0,500,500)
foodHit()
snake()
food()
    setTimeout(update,250);
}
update()