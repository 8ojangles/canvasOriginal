  

// housekeeping

// Set Canvas 

var canvas = document.getElementById('creativejs'),
    c = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasW = canvas.width;
    canvasH = canvas.height;

// initialise counter

var counter = 0;




// initialise particles

    var particles = [];

    var enemySet = [];
    var playing = false;

    var enemyPathSet = [];
    var enemySetOn = false;

    var collision = false;

    var flare = false;
    
    enemyItem = {
      x : 350, y : floor, width : 50, height : 80, xVel : 5, yVel : 0, ColorR : 255, ColorG : 60, ColorB : 255, ColorA : 1, Line : 1, SizeRate : 1, health : 100, enemyDie : false, enemyDead : false
    };
    

  var enemyPathSetItem = {
    startX : 300,
    startY : 600,
    endX : 1000,
    endY : 600
  };

   var enemyPathSetItem = {
    startX : 300,
    startY : 600,
    endX : 1000,
    endY : 600
  };


// Create Player Sprite Object
var playerSprite = {
    x : 300, y : 700, width : 50, height : 80, xVel : 0, yVel : 0, ColorR : 40, ColorG : 100, ColorB : 255, ColorA : 1, Line : 1, SizeRate : 1, SizeSwitch : true, faceLeft : false, faceRight : false, gunPosX : 0, gunPosY : 0, gunMarkerSize : 30, gunMarkerCol : '#f00'
  };

  var enemySprite = {
    x : 350, y : floor, width : 50, height : 80, xVel : 5, yVel : 0, ColorR : 255, ColorG : 60, ColorB : 255, ColorA : 1, Line : 1, SizeRate : 1, health : 100, enemyDie : false, enemyDead : false
  };



  var enemyDie = false;
  var enemyDead = false;
  var energyBarColA = 0;

  var playerBulletSprite = {
    x : 300, y : 300, rad : 5, xVel : 50, yVel : 0, ColorR : 255, ColorG : 60, ColorB : 255, ColorA : 1
  };
  // Init playerSprite short name
  var pS = playerSprite;
  var eS = enemySprite;
  var bGSpriteBlockArray = [];
  var bGSpriteBlock = {
    x : 0, y : 0, width : 50, height : 25, ColorR : 100, ColorG : 100, ColorB : 100, ColorA : 1, playerCollision : true
  };

  var faceLeft = false, faceRight = false, gunPosX = 0, gunPosY = 0, bgSpBl = bGSpriteBlock, floorBlocks = Math.round(canvasW/bgSpBl.width), floor2Blocks = floorBlocks/2, xResult = 0, floorLevel1 = 200, floorLevel2 = 400, floorLevel3 = 600;



  
// Environmental parameter definition

  var grav = 2;
  var floor = canvasH-150;
  var curFloor = floor;

// key detection parameter definition

  var rightKeyOn = false;
  var leftKeyOn = false;
  var upKeyOn = false;
  var downKeyOn = false;
  var jumpKeyOn = false;
  var jumpDelay = false;
  var jumpDelayTimeThen = 0;
  var jumpDelayFactor = 25;

  var shootKeyOn = false;



/* **************** Draw Function ********************* */

function draw() {
// Housekeeping

// frame rate
  frameRate = 60;
// Each frame reset color overlay mode
  c.globalCompositeOperation = 'source-over';

// clearRect
c.fillStyle = rgba(0,0,0,1);
c.fillRect(0,0,canvas.width,canvas.height);

c.font = 'italic 24pt arial';
c.fillStyle = '#ccc';
c.fillText(curFloor+' '+pS.y, 100, 100);

c.font = 'italic 24pt arial';
c.fillStyle = '#ccc';
c.fillText(particles.length, canvasW-400, 100);

// Finit State MAchine Test readOuts
var gameState = null;
currState = gameState;
c.font = 'italic 24pt arial';
c.fillStyle = '#ccc';
c.fillText(currState, 100, 100);



createBackGround ();

if (pS.y <= floor-floorLevel1) {

    if ((pS.x >= 0)&&(pS.x <= (bgSpBl.width*floor2Blocks))&&(pS.y >= floor-floorLevel2+bgSpBl.height)) {

      curFloor = (floor-floorLevel1)-pS.height;   

} 

else if ((pS.y <= floor-floorLevel2)&&(pS.x > (canvasW/2-bgSpBl.width))) {

    curFloor = (floor-floorLevel2)-pS.height;

} else {
    curFloor = floor;
  }

}

if (pS.y <= floor-floorLevel3) {

  if ((pS.x >= 0)&&(pS.x <= (bgSpBl.width*floor2Blocks))) {
    curFloor = (floor-floorLevel3)-pS.height;
  }

}

if (downKeyOn) {
  if (pS.y >= floor-floorLevel1) {
    curFloor = floor;
  } else {
    
        curFloor = (curFloor+floorLevel1)-pS.height;
  }
}
 
  // c.lineWidth = "5";
  // c.strokeStyle = "#0f0";
  // c.line((canvasW/2)-pS.width*2,0,(canvasW/2)-pS.width*2,canvasH);
  // c.strokeStyle = "#f00";
  // c.line(canvasW/2-bgSpBl.width,0,canvasW/2-bgSpBl.width,canvasH);

  // c.strokeStyle = "#f00";
  // c.line(0,curFloor,canvasW,curFloor);





// Create Player Sprite
c.fillStyle = rgba(pS.ColorR,pS.ColorG,pS.ColorB,pS.ColorA);
c.fillRect(pS.x,pS.y,pS.width,pS.height);

// Create Player Gun Sprite


gunPosX = pS.x+pS.width;

if (faceLeft) {
  gunPosX = pS.x;
} else if (faceRight) {
  gunPosX = pS.x+pS.width;
}

gunPosY = pS.y+(pS.height/2);

c.fillStyle = rgba(230,230,230,pS.ColorA);
c.fillCircle(gunPosX,gunPosY,20);

// Update Player Position
  pS.x += pS.xVel;
  pS.y += pS.yVel;
  pS.yVel+=grav;
// Apply Gravity with floor collisions
  
if ((pS.y >= curFloor)&&(pS.yVel>=0)) {
  pS.y = curFloor;
  pS.yVel = 0;
}

if (pS.y >= floor) {
  pS.y = floor;
  pS.yVel = 0;
}

// Create Enemy Sprite
var enemyDead = false;

if (eS.health <= 0) {
  enemyDie = true;
} else {
  enemyDie = false;
}

if (enemyDead) {

  alert('hello');

  } else {

if (!enemyDie) {

  c.fillStyle = rgba(eS.ColorR,eS.ColorG,eS.ColorB,eS.ColorA);
  c.fillRect(eS.x,floorLevel1-eS.height/2,eS.width,eS.height);

  eS.x += eS.xVel;

  if (eS.ColorG > 60) {
    eS.ColorG-=20;
  }

  if ((eS.x > canvasW/2 - eS.width) || (eS.x<=0)) {
    eS.xVel*=-1;
  }

}

}

if (enemyDie && !enemyDead && eS.width < 300) {

  c.fillStyle = rgba(eS.ColorR,eS.ColorG,eS.ColorB,eS.ColorA);
  c.fillRect(eS.x,floorLevel1-eS.height/2,eS.width,eS.height);

    eS.ColorR -=20;
    eS.ColorG -=20;
    eS.ColorB -=20;
    eS.ColorA -=0.05;
    eS.width  +=40;
    eS.height +=40;
    eS.x  -=20;
    eS.y -=20;

} else if (enemyDie && enemyDead) {
    eS.width  =0;
    eS.height =0;
  }

if (enemyDie && !enemyDead && eS.width >= 300) {
    enemyDead = true;
  }

if (enemyDead) {
  eS.x = -300;
  eS.y = -300;
  eS.width  =0;
  eS.height =0;
}



// c.font = 'italic 24pt arial';
// c.fillStyle = '#ccc'
// c.fillText(eS.health, eS.x, 150);



c.fillStyle = rgba(255,0,0,energyBarColA);
c.fillRect(eS.x,(floorLevel1-eS.height/2)-50,eS.health*2,15);
if (energyBarColA > 0) {
  energyBarColA -=0.05;
}
// c.font = 'italic 24pt arial';
// c.fillStyle = '#ccc'
// c.fillText(enemyDead, eS.x, 100);


//   eS.y += eS.yVel;
//   eS.yVel+=grav;
// if (eS.x < canvasW/2) {
//   return false
// } else if (eS.x > canvasW/2) {
//   eS.xVel*-1;
// }



// Boundary Detection

  if (pS.x <= 0) {
    pS.x = 0;
    pS.xVel*=-1;
  }

  if (pS.x >= canvasW-pS.width) {
    pS.x = canvasW-pS.width;
    pS.xVel*=-1;
  }

  // Floor Detection

  // if ((pS.y > (floor-floorLevel1+pS.height))&&(pS.x >=0)&&(pS.x <= canvasW/2)) {
  //   floor = floor-floorLevel1+pS.height;
  // }

// Apply Key Runtime Functions

  keyFunctionRuntime();

if (shootKeyOn) {
  playing = true;
}

if (!shootKeyOn) {
  playing = false;
}

// playing1
  particle1EmmisionFunct();

// particle 1 updater
  particle1Updater();

  

  counter++;
  } // end Draw function

// *************** proximity detection

// *************** Ui Overlay functions *******************

function infoPanelButtonAction () {

 $('.infoPanelSwitch').toggleClass('off on');
    if ($('.infoPanelSwitch').hasClass('on')) {
    $('.infoPanel').removeClass('open closed').addClass('open');
    } else {
      $('.infoPanel').removeClass('open closed').addClass('closed');
    }

}

 $('.infoPanelSwitch').click(function(){
  infoPanelButtonAction();  
  });

// $('.infoButtons li a').click(function(){
//  preventDefault();
//  return false
// });

$('#ball1 a').click(function(){
    circle1x = canvasW - (canvasW/2);
    circle1y = canvasH - ((canvasH/4)*3);
    circle1xVel = 2;
    circle1yVel = 2;
    preventDefault();
    return false;
});





function keyFunctionRuntime () {

  // Key Functions - Player

// Right Key Function
  if ((rightKeyOn) && (pS.xVel < 10)) {
    pS.xVel+=0.5;
  }
// Right Key Off Function
  if ((!rightKeyOn) && (pS.xVel > 0)) {
    pS.xVel-=0.5;
  }
// Left Key Function
  if ((leftKeyOn) && (pS.xVel > -10)) {
    pS.xVel-=0.5;
  }
// Left Key Off Function
  if ((!leftKeyOn) && (pS.xVel < 0)) {
    pS.xVel+=0.5;
  }
// Jump Key Check Function
  if ((jumpKeyOn) && (pS.yVel  > 0)) {
    return false;
  }
// Jump Key Function
  if ((jumpKeyOn) && (pS.y = curFloor) ) {

    pS.yVel= -30;
    jumpKeyOn = false;
  }
}

// End Key Functions - Player

// particle array setup
var particles = [];
var particles2 = [];

// play switch setup
var playing = false;
var playing2 = false;

var bulletSpeed = 25;

function particle1EmmisionFunct() {
// if playing function is true
  if(playing) { 
// set Composite
    c.globalCompositeOperation = 'lighter';
//make 1 particle per frame
if (counter%5 === 0) {
    makeParticle(1);
  }
  }
} // close $particle1EmmisionFunct

function makeParticle(numParticles) {
  
  for(var i=0; i<numParticles; i++){
    var p = {
    x : gunPosX,
    y : gunPosY,
    xVel : bulletSpeed,
    yVel : 0,
    hue : random(360),
    size : random(15,18)
    }; // close var P
      
    // Per Particle adjustments

    if (faceLeft) {
      p.xVel = bulletSpeed*-1;
    } else if (faceRight) {
      p.xVel = bulletSpeed*1;
    }

    if (upKeyOn) {
      p.yVel = bulletSpeed*-1;
    }

    if (downKeyOn) {
      p.yVel = bulletSpeed*1;
    }
    // End Per Particle adjustments

    // create particles (p options)
    particles.push(p);
  } // close for loop

} // close function makeParticle

function particle1Updater() {
// Particle 1 For Loop
  for(var i=0; i<particles.length; i++) {
  var p = particles[i];

// Particle boundary check
  if (p.x < 0 || p.x > canvasW+p.size || p.y < 0 || p.y > canvasH+p.size)
  {
    particles.splice(i,1);
  } else {

    c.globalCompositeOperation = "lighter";
    c.fillStyle = rgb(255,40,40); 
    c.fillCircle(p.x,p.y,p.size);
     
    c.fillStyle = rgb(255,255,255);
    c.fillCircle(p.x,p.y,p.size*0.5);

var ctx = $('canvas').get(0).getContext('2d');

function circle(x, y, r, c) {
    ctx.beginPath();
    var rad = ctx.createRadialGradient(x, y, 1, x, y, r);
    rad.addColorStop(0, 'rgba('+c+',0.05)');
    rad.addColorStop(0.5, 'rgba('+c+',0.002)');
    rad.addColorStop(1, 'rgba('+c+',0)');
    ctx.fillStyle = rad;
    ctx.arc(x, y, r, 0, Math.PI*2, false);
    ctx.fill();
}

    // circle(p.x, p.y, p.size*25,'255,255,255');

    // c.fillStyle = rgba(255,200,200,0.1);
    // c.fillCircle(p.x,p.y,p.size*8);

    p.size*=0.98;

    p.x += p.xVel;
    p.y += p.yVel;

    // Particle/Enemy Collision
    var esY = floorLevel1-eS.height/2;

    if ( (p.x-p.size/2 >= eS.x) && (p.x+p.size/2 <= eS.x+eS.width) ) {
      if ( (p.y >= esY) && (p.y <= esY+eS.height) ) {
        eS.health -=1;
        eS.ColorR = 255;
        eS.ColorG = 255;
        eS.ColorB = 255;
        particles.splice(i,1);
      }
    }
 
  } 

}// close Particle 1 For Loop
}// close particle 1 updater



// particle array setup
var particles = [];
var particles2 = [];

// play switch setup
var playing = false;
var playing2 = false;

var bulletSpeed = 30;

function particle1EmmisionFunct() {
// if playing function is true
  if(playing) { 
// set Composite
    c.globalCompositeOperation = 'lighter';
//make 1 particle per frame
if (counter%5 === 0) {
    makeParticle(1);
  }
  }
} // close $particle1EmmisionFunct

function makeParticle(numParticles) {
  
  for(var i=0; i<numParticles; i++){
    var p = {
    x : gunPosX,
    y : gunPosY,
    xVel : bulletSpeed,
    yVel : 0,
    hue : random(360),
    size : random(15,18)
    }; // close var P
      
    // Per Particle adjustments

    if (faceLeft) {
      p.xVel = bulletSpeed*-1;
    } else if (faceRight) {
      p.xVel = bulletSpeed*1;
    }

    if (upKeyOn) {
      p.yVel = bulletSpeed*-1;
    }

    if (downKeyOn) {
      p.yVel = bulletSpeed*1;
    }
    // End Per Particle adjustments

    // create particles (p options)
    particles.push(p);
  } // close for loop

} // close function makeParticle

function particle1Updater() {
// Particle 1 For Loop
  for(var i=0; i<particles.length; i++) {
  var p = particles[i];

// Particle boundary check
  if (p.x < 0 || p.x > canvasW+p.size || p.y < 0 || p.y > canvasH+p.size)
  {
    particles.splice(i,1);
  } else {

    c.globalCompositeOperation = "lighter";
    c.fillStyle = rgb(255,40,40); 
    c.fillCircle(p.x,p.y,p.size);
     
    c.fillStyle = rgb(255,255,255);
    c.fillCircle(p.x,p.y,p.size*0.5);

// var ctx = $('canvas').get(0).getContext('2d');

// function circle(x, y, r, c) {
//     ctx.beginPath();
//     var rad = ctx.createRadialGradient(x, y, 1, x, y, r);
//     rad.addColorStop(0, 'rgba('+c+',0.01)');
//     rad.addColorStop(0.5, 'rgba('+c+',0.002)');
//     rad.addColorStop(1, 'rgba('+c+',0)');
//     ctx.fillStyle = rad;
//     ctx.arc(x, y, r, 0, Math.PI*2, false);
//     ctx.fill();
// }

//     circle(p.x, p.y, p.size*75,'255,255,255');

    // c.fillStyle = rgba(255,200,200,0.1);
    // c.fillCircle(p.x,p.y,p.size*8);

    p.size*=0.98;

    p.x += p.xVel;
    p.y += p.yVel;

    // Particle/Enemy Collision
    var esY = floorLevel1-eS.height/2;

    if ( (p.x-p.size/2 >= eS.x) && (p.x+p.size/2 <= eS.x+eS.width) ) {
      if ( (p.y >= esY) && (p.y <= esY+eS.height) ) {
        eS.health -=1;
        eS.ColorR = 255;
        eS.ColorG = 255;
        eS.ColorB = 255;
        particles.splice(i,1);
        energyBarColA = 1;
      }
    }
 
  } 

}// close Particle 1 For Loop
}// close particle 1 updater

// End Enemy Creation




// Reset Button
$('#reset').click(function(){
    enemyReset();
    playerReset();
  });

// Reset Key action

// End Reset Key Action

// Reset Button - Player Reset

function enemyReset () {
  enemySprite.x = 300;
  enemySprite.y = floor;
  enemySprite.width = 50;
  enemySprite.height = 80;
  enemySprite.xVel = 5;
  enemySprite.yVel = 0;
  enemySprite.ColorR = 255;
  enemySprite.ColorG = 60;
  enemySprite.ColorB = 255;
  enemySprite.ColorA = 1;
  enemySprite.Line = 1;
  enemySprite.SizeRate = 1;
  enemySprite.health = 100;
  enemyDie = false;
  enemyDead = false;
}

// End Reset Button - Player Reset

// Reset Button - Enemy Reset

function playerReset () {
  playerSprite.x = 300;
  playerSprite.y = 700;
  playerSprite.width = 50;
  playerSprite.height = 80;
  playerSprite.xVel = 5;
  playerSprite.yVel = 0;
  playerSprite.ColorR = 40;
  playerSprite.ColorG = 100;
  playerSprite.ColorB = 255;
  playerSprite.ColorA = 1;
  playerSprite.Line = 1;
  playerSprite.SizeRate = 1;
  playerSprite.health = 100;
  playerDie = false;
  playerDead = false;
}

// End Reset Button - Enemy Reset





$(document).ready(function() {
}); // close doc ready  