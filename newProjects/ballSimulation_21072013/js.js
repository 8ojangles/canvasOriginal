  

// housekeeping
var canvas = document.getElementById('creativejs'),
    c = canvas.getContext('2d');
    var particles = [];
    var particles2 = [];
    var playing = false;
    var playing2 = false;
    var counter = 0;

    var collision = false;

    var flare = false;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasW = canvas.width;
    canvasH = canvas.height;

var circle1x = canvasW - (canvasW/2),
    circle1y = 300,
    circle1rad = 200,
    circle1rad1 = 200,
    circle1xVel = 0,
    circle1yVel = 0,
    circle1ColorR = 255,
    circle1ColorG = 255,
    circle1ColorB = 255,
    circle1ColorA = 0.4,
    circle1Line = 1,
    circle1SizeRate = 1,
    circle1SizeSwitch = true;

var circle1Bounce = 20,
    circle1BounceIn = false,
    circle1BounceOut = false,
    circle1BounceRad = 0,
    circle1BounceRad1 = 0,
    circle1BounceMomentum = 0,
    circle1MomentumResult = 0,
    circle1BounceRate = 50,
    circle1BounceRate1 = 50,
    circle1BounceResult = 0,
    circle1BounceResult1= 0;


    var tempDist = 0;
    var hasBall = false;

     var grabSwitch = false;

 var curVelX = 0;

 var curVelY = 0;

 var prevMouseX = 0;
 var prevMouseY = 0;

 var previousCirclePosX = 0;
 var previousCirclePosY = 0;

    var grav = 1;
  var drag = 0.99;
  var drag1 = 0.95;
  // Environmental parameter definition


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
 
  c.fillStyle = rgba(circle1ColorR,circle1ColorG,circle1ColorB,circle1ColorA);
  c.fillEllipse(circle1x,circle1y,circle1rad,circle1rad1);
  // Circle2
  c.fillStyle = "#f00";
  c.fillCircle(circle1x,circle1y,75);

  var barrier1x = 400;
  var barrier1y = 400;
  var barrier1r = 60;

  var barrier2x = 700;
  var barrier2y = 400;
  var barrier2r = 30;

  c.fillStyle = rgba(0,0,255,1);
  c.fillCircle(barrier1x,barrier1y,barrier1r);

 

 
  tempDist = dist(mouseX,mouseY,circle1x,circle1y);


  if (tempDist <= 75) {
    c.fillStyle = "#f00";
    grabSwitch = true;
  } else {
    c.fillStyle = "#fff";
    grabSwitch = false;
  }
    curVelX =  mouseX-prevMouseX;
    curVelY =  mouseY-prevMouseY;
    prevMouseX = mouseX;
    prevMouseY = mouseY;
    

  $('canvas').mousedown(function(){
  
  if (grabSwitch) {
    hasBall = true;
    circle1xVel = 0;
    circle1yVel = 0;
  }

  if (!grabSwitch) {
    hasBall = false;
  }

});

  $('canvas').mouseup(function(){
    if (hasBall) {
    circle1xVel = curVelX;
    circle1yVel = curVelY;
    hasBall = false;
    }
    if (!hasBall) {
      return false;
    }
});

  var releaseVectorAmount = 200;

  if (hasBall) {
    if ((curVelX > releaseVectorAmount) || (curVelX < -releaseVectorAmount) || (curVelY > releaseVectorAmount) || (curVelY < -releaseVectorAmount)) {
      circle1xVel = curVelX;
    circle1yVel = curVelY;
    hasBall = false;
    }
    circle1x = mouseX;
    circle1y = mouseY;
    grav = 0;
  } else {
    hasBall = false;
    grav = 1;
  }

  

  var tempDistOutput = parseInt(tempDist,10);

  c.fillText(tempDistOutput,100,200);
  c.fillText(grabSwitch,100,250);
  c.fillText(hasBall,100,300);
  c.fillText(curVelX,100,350);
  c.fillText(curVelY,100,400);

  // grav = 1;
  // drag = 0.99;
  // drag1 = 0.95;

  circle1yVel+=grav;
  circle1x += circle1xVel;
  circle1y += circle1yVel;
  circle1yVel*=drag;
  circle1xVel*=drag;


  if (circle1ColorA > 0.4) {
    circle1ColorA -= 0.09;
  }


// *************** boundary detection

// *************** circle1
  if (circle1x <= circle1rad/2) {
    circle1x = circle1rad/2;
    circle1xVel *= -1;
    circle1ColorA = 1;
  }
  if (circle1x >= canvas.width - circle1rad/2 ) {
    circle1x = canvas.width - circle1rad/2;
    circle1xVel *= -1;
    circle1ColorA = 1;
  }

  if (circle1y <= circle1rad1/2) {
    circle1y = circle1rad1/2;
    circle1yVel *= -1;
    circle1ColorA = 1;
  }

  if ((circle1y + circle1rad1/2) >= (canvas.height)) {
    circle1y = (canvas.height - circle1rad1/2);
    circle1yVel *= -1;
    circle1ColorA = 1;
  }

  
var dx = (circle1x-barrier1x);
    var dy = (circle1y-barrier1y);
    var dxSq = (dx*dx);
    var dySq = (dy*dy);
    var actDist =  Math.sqrt(dxSq+dySq);
    var anglSin = dy/actDist;
    var angle = Math.atan((circle1y - barrier1y) / (circle1x - barrier1x)) * (180 / Math.PI);
    var angleOutput = parseFloat(angle).toFixed(2);
    var r1 = circle1rad;
    var r2 = barrier1r;


    var a = ((r1*r1) - (r2*r2) + (actDist*actDist)) / (2.0 * actDist);
    // Determine the coordinates of point 2.
    var xInt =  (dx * a/actDist);
    var yInt = (dy * a/actDist);

    
   

    c.font = "20pt arial";
  c.fillStyle = "#ccc";
  c.fillText(xInt,200,100);
  c.fillText(yInt,200,150);
  c.fillText(angleOutput,200,200);
  

  if (dist(barrier1x,barrier1y,circle1x,circle1y) <= (barrier1r + circle1rad/2))
  {
    circle1xVel *= -1;
    circle1yVel *= -1;
  }
  c.lineWidth = "5";
  c.strokeStyle = "#0f0";
  c.line(circle1x,circle1y,barrier1x,barrier1y);
  
  c.line(circle1x,circle1y,circle1x,barrier1y);
  c.line(circle1x,barrier1y,barrier1x,barrier1y);

 c.fillCircle(xInt,yInt,30);

  previousCirclePosX = circle1x;
  previousCirclePosY = circle1y;


  counter++;
  } // end Draw function

// *************** proximity detection

// *************** Ui Overlay functions *******************

$('.infoPanelSwitch').click(function(){

  $('.infoPanelSwitch').toggleClass('off on');
  if ($('.infoPanelSwitch').hasClass('on')) {
  $('.infoPanel').removeClass('open closed').addClass('open');
  } else {
    $('.infoPanel').removeClass('open closed').addClass('closed');
  }
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




$(document).ready(function() {
}); // close doc ready