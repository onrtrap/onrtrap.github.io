const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const btn = document.createElement('button');

const div = document.createElement('div');

btn.textContent = "Game Reset";

btn.addEventListener('click', ()=>{
    player.score = 0;

    player2.score = 0;

    ballReset();

    player.x = 50;
    player2.x = canvas.width - (50 + player2.width);
    player.y = canvas.height/2 - player.height/ 2; 
    player2.y = canvas.height/2 - player2.height/ 2; 
})
document.body.prepend(div);

div.append(btn);

let speed = 5;

let playing = false;

const player = {x:50, y:canvas.height/2 -75, speed : 5, width: 15, height: 150, score: 0};
const player2 = {x:canvas.width - (50 + 15), y:canvas.height/2 - 75, speed : 5, width: 15, height: 150, score: 0};
const ball = {
    x:canvas.width / 2, y:canvas.height/2,width:10,height:10, xs:speed, ys:-speed
}
const keys = {ArrowRight:false, ArrowLeft:false, ArrowUp:false, ArrowDown:false};

const keys2 = {KeyD:false, KeyA:false, KeyW:false, KeyS:false};

const startKey = {spacebar:false};




requestAnimationFrame(draw);

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp); 

function keyDown(event){
   
   if(event.code in keys){ keys[event.code] = true;}
   if(event.code in keys2){ keys2[event.code] = true;}
   if(event.code in startKey){startKey[event.code] = true;}
}

function keyUp(event){
    
    if(event.code in keys){ keys[event.code] = false;}
    if(event.code in keys2){ keys2[event.code] = false;}
    if(event.code in startKey){startKey[event.code] = true;}
}

function gameStart(){
    if(startKey.spacebar){
        
    }
}

function ballReset(){
    speed = 5;
    ball.x = canvas.width / 2
    ball.y = canvas.height / 2
    ball.width = 10
    ball.height = 10 
    ball.xs = speed 
    ball.ys = -speed

}

function move(){
    
    //Commenting out left and right control to constrain movement to y axis
    /**if(keys.ArrowRight && player.x < (canvas.width/2 - player.width)){player.x += player.speed;}
        else if (keys.ArrowLeft && player.x > 0){player.x -= player.speed;} **/
        
        if(keys.ArrowUp && player.y > 0){player.y -= player.speed}
        else if (keys.ArrowDown && player.y < (canvas.height - player.height)){player.y += player.speed};
        
        /**if(keys2.KeyD && player2.x < (canvas.width - player2.width)){player2.x += player2.speed;}
        else if (keys2.KeyA && player2.x > canvas.width/2){player2.x -= player2.speed;}**/
        
        if(keys2.KeyW && player2.y > 0){player2.y -= player2.speed}
        else if (keys2.KeyS && player2.y < (canvas.height - player2.height)){player2.y += player2.speed};
        ball.x += ball.xs;
        ball.y += ball.ys;

        if(ball.x < 0){
            player2.score ++;
            ballReset();
        }

        if(ball.x > canvas.width){
            player.score++;
            ballReset();
        }

        if(ball.x < 0 || ball.x > canvas.width){
            ball.xs *= -1;
        }
        if(ball.y < 0 || ball.y > canvas.height){
            ball.ys *= -1;
        }

        if(checkCol(ball, player) ){
            ball.xs *= -1;
            let pTempY = ((player.y + player.height /2))
            let bTempY = ((ball.y + ball.height)/2);
            if(pTempY < bTempY){
                ball.ys = speed;
            }

            else{
                ball.ys = -speed;
            }

            speed++;

            }

        if(checkCol(ball, player2)){
            ball.xs *= -1;
            let pTempY = ((player2.y + player2.height /2))
            let bTempY = ((ball.y + ball.height)/2);
            if(pTempY < bTempY){
                ball.ys = speed;
            }

            else{
                ball.ys = -speed;
            }

        }

}

function checkCol(obj1, obj2){
   
    //checks collision between the two paddles

    let hit = obj1.x < obj2.x + obj2.width && obj1.x + obj1.width > obj2.x && obj1.y < obj2.y + obj2.height && obj1.y + obj1.height > obj2.y
      
    return hit;
}

function checkBounds(obj1, obj2){

    let bounded = (obj1.x < canvas.width/2 || obj1.x > 0 && obj1.y - obj1.height/2 < canvas.height || obj1.y + obj1.height/2 > 0)
                    && (obj2.x > canvas.width/2 || obj2.x < canvas.width && obj2.y - obj2.height/2 < canvas.height || obj2.y + obj2.height/2 > 0) 
                    
    return bounded;
}

function draw(){

    ctx.clearRect(0,0, canvas.width, canvas.height);

    move();
    
    checkCol(player, player2);
 
ctx.fillStyle = 'blue';

ctx.fillRect(player.x, player.y, player.width, player.height);

ctx.fillStyle = 'red';

ctx.fillRect(player2.x, player2.y, player2.width, player2.height);

ctx.fillStyle = 'white';

ctx.fillRect(ball.x, ball.y, ball.width, ball.height);



let output = 'Player 1: ' +  player.score + ' Player 2: ' + player2.score;   


 //Display Score
  ctx.font = '24px serif';
ctx.textAlign = 'center';
ctx.fillStyle = 'white';
ctx.fillText(output, 300, 20);

requestAnimationFrame(draw);

}