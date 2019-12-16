$(document).ready(function(){

    


// Reset Button
$('#reset').click(function(){
    enemyReset();
    playerReset();
    curFloor = floor;
  });

// Reset Key action

// End Reset Key Action

// Reset Button - Player Reset

// End Reset Key Action

// Reset Button - Player Reset

function enemyReset () {
  enemySprite.x = 300; enemySprite.y = floor; enemySprite.width = 50; enemySprite.height = 80; enemySprite.xVel = 5; enemySprite.yVel = 0; enemySprite.ColorR = 255; enemySprite.ColorG = 60; enemySprite.ColorB = 255; enemySprite.ColorA = 1; enemySprite.Line = 1; enemySprite.SizeRate = 1; enemySprite.health = 100; enemyDie = false; enemyDead = false;
};

// End Reset Button - Player Reset

// Reset Button - Enemy Reset

function playerReset () {
  playerSprite.x = 300; playerSprite.y = 700; playerSprite.width = 50; playerSprite.height = 80; playerSprite.xVel = 5; playerSprite.yVel = 0; playerSprite.ColorR = 40; playerSprite.ColorG = 100; playerSprite.ColorB = 255; playerSprite.ColorA = 1; playerSprite.Line = 1; playerSprite.SizeRate = 1; playerSprite.health = 100; playerDie = false; playerDead = false;
};

// End Reset Button - Enemy Reset

// End Reset Button - Enemy Reset

}); // End Document Ready Function