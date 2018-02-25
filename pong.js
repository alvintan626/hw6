var gamepoint = 2;

var puck = {
  x: 200,
  y: 200,
  xSpeed: 5,
  ySpeed: -5,
  r: 15
};
var edgeOffset = 20;

var player1 = {
  x: edgeOffset,
  y: 200,
  ht: 50,
  wd: 10,
  score:0
};

var player2 = {
  x: 400-edgeOffset,
  y: 200,
  ht: 50,
  wd: 10,
  score:0
};


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  //border material
  rect(0,0,399,30);
  rect(0,370,399,399);
  textSize(32);
	text('Ice Hockey', 100, 28);
  textSize(16);
	text('by Alvin Tan', 300, 25);
  textSize(16);
	text(player2.score, 380, 390);
  text(player1.score, 10, 390);
  
    
  // draw puck
  ellipse(puck.x, puck.y, puck.r*2);
  
  // move puck
  if (puck.y-30 < puck.r || puck.y > height - puck.r-30) {
    puck.ySpeed = -puck.ySpeed;
  }
  
  puck.x += puck.xSpeed;
  puck.y += puck.ySpeed;
  
  // draw paddles
  rect(player1.x, player1.y, player1.wd, player1.ht);
  rect(player2.x-player2.wd, player2.y, player2.wd, player2.ht);
  
  // paddle movement
  if (player1.paddleDown && ! player1.paddleUp) {
    player1.y += 3;
  }
  if (player1.paddleUp && ! player1.paddleDown) {
    player1.y -= 3;
  } 

  if (player2.paddleDown && ! player2.paddleUp) {
    player2.y += 3;
  }
  if (player2.paddleUp && ! player2.paddleDown) {
    player2.y -= 3;
  }
  
  // don't let paddles outside of the play area
  player1.y = constrain(player1.y, 30, height-player1.ht-31);
  player2.y = constrain(player2.y, 30, height-player2.ht-31);
  
  // bounce puck on paddles -- player 1 -- based on x-coordinate
  if (puck.x - puck.r < player1.x + player1.wd) {
    // check if puck is within paddle height...
    if (puck.y > player1.y && puck.y < player1.y + player1.ht) {
      puck.xSpeed = abs(puck.xSpeed);
    } else if (puck.x == -100){
      player2.score=player2.score + 1;
    }
  }
  
  // bounce puck on paddles -- player 2 -- based on x-coordinate
  if (puck.x + puck.r > player2.x - player2.wd) {
    // check if puck is within paddle height...
    if (puck.y > player2.y && puck.y < player2.y + player2.ht) {
      puck.xSpeed = -abs(puck.xSpeed);
    } else if (puck.x==500){
      player1.score=player1.score + 1;
    }
  }
  
  // conclusion of game
if (player1.score==gamepoint) {
        puck.x=200;
        puck.y=200;
        puck.ySpeed=0;
        puck.xSpeed=0;
        text('Player 1 wins!',150,390)
      }
  if (player2.score==gamepoint) {
        puck.x=200;
        puck.y=200;
        puck.ySpeed=0;
        puck.xSpeed=0;
        text('Player 2 wins!',150,390)
      }
  
}

// keyboard input
function keyPressed() {
  if (key == 'A') {
    player1.paddleDown = true;
  } else if (key == 'Q') {
    player1.paddleUp = true;
  }
  
  if (keyCode == DOWN_ARROW) {
    player2.paddleDown = true;
  } else if (keyCode == UP_ARROW) {
    player2.paddleUp = true;
  } 
 
}

function keyReleased() {
  if (key == 'A') {
    player1.paddleDown = false;
  } else if (key == 'Q') {
    player1.paddleUp = false;
  }
  
  if (keyCode == DOWN_ARROW) {
    player2.paddleDown = false;
  } else if (keyCode == UP_ARROW) {
    player2.paddleUp = false;
  }
}

 // if (keyIsPressed === true) {
  //  puck.x=200;
    //    puck.y=200;
      // puck.x += puck.xSpeed;
  //puck.y += puck.ySpeed;
  //}
