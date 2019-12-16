  

// housekeeping
var canvas = document.getElementById('creativejs'),
    c = canvas.getContext('2d');

    var particles = [];

    var counter = 0;

    var collision = false;

    var flare = false;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasW = canvas.width;
    canvasH = canvas.height;

var circle1x = 300,
    circle1y = 300,
    circle1rad = 100,
    circle1xVel = random(-6,6),
    circle1yVel = random(-6,6 ),
    circle1SizeRate = 1;
    circle1SizeSwitch = true;

var circle2x = 900,
    circle2y = 300,
    circle2rad = 100,
    circle2xVel = random(-10,10),
    circle2yVel = random(-10,10),
    circle2SizeRate = 1,
    circle2SizeSwitch = true;

/* **************** Draw Function ********************* */

function draw() {
// Housekeeping

// frame rate
  frameRate = 30;
// Each frame reset color overlay mode
  c.globalCompositeOperation = 'source-over';
// clearRect  
 
  c.fillStyle = rgba(0,0,0,1);
  c.fillRect(0,0,canvas.width,canvas.height);
 
  c.strokeStyle = "rgba(200,200,200,0.9)";
  c.lineWidth = 1;
  c.strokeCircle(circle1x,circle1y,circle1rad);

  c.strokeStyle = "rgba(100,100,255,0.9)";
  c.lineWidth = 1;
  c.strokeCircle(circle2x,circle2y,circle2rad);

  circle1x = circle1x + circle1xVel;
  circle2x = circle2x + circle2xVel;
  circle1y = circle1y + circle1yVel;
  circle2y = circle2y + circle2yVel;



// *************** boundary detection

// *************** circle1
  if (circle1x <= circle1rad) {
    circle1x = circle1rad;
    circle1xVel *= -1;
  }
  if (circle1x >= canvas.width - (circle1rad)) {
    circle1x = canvas.width - (circle1rad);
    circle1xVel *= -1;
  }

  if (circle1y <= circle1rad) {
    circle1y = circle1rad;
    circle1yVel *= -1;
  }

  if (circle1y >= canvas.height - (circle1rad)) {
    circle1y = canvas.height - (circle1rad);
    circle1yVel *= -1;
  }

// *************** circle2
  if (circle2x <= circle2rad) {
    circle2x = circle2rad;
    circle2xVel *= -1;
  }
  if (circle2x >= canvas.width - (circle2rad)) {
    circle2x = canvas.width - (circle2rad);
    circle2xVel *= -1;
  }

  if (circle2y <= circle2rad) {
    circle2y = circle2rad;
    circle2yVel *= -1;
  }

  if (circle2y >= canvas.height - (circle2rad)) {
    circle2y = canvas.height - (circle2rad);
    circle2yVel *= -1;
  }

  if (circle1rad <=100){
    circle1SizeSwitch = true;
  }

  if (circle1rad >=350){
    circle1SizeSwitch = false;
  }

  if (circle2rad <=100){
    circle2SizeSwitch = true;
  }

  if (circle2rad >=350){
    circle2SizeSwitch = false;
  }

  
  if (circle1SizeSwitch) {
  circle1rad+=circle1SizeRate/4;
  }
  if (!circle1SizeSwitch) {
  circle1rad-=circle1SizeRate/4;
  }

  if (circle2SizeSwitch) {
  circle2rad+=circle2SizeRate/4;
  }
  if (!circle2SizeSwitch) {
  circle2rad-=circle2SizeRate/4;
  }

  var x1 = circle1x;
  var y1 = circle1y;
  var x2 = circle2x;
  var y2 = circle2y;
  var r1 = circle1rad;
  var r2 = circle2rad;
  var colDist = r1+r2;

  var dx = (x1-x2)*(x1-x2);
  var dy = (y1-y2)*(y1-y2);
  var actDist =  Math.sqrt(dx+dy);

  var colPointX = ((x1 * r2) + (x2 * r1)) / (r1 + r2);
  var colPointY = ((y1 * r2) + (y2 * r1)) / (r1 + r2);


  var c2cIntersect = false;
  var dx2 = x2 - x1;
  var dy2 = y2 - y1;
 
  // Determine the straight-Line distance between the centers.
  var d = Math.sqrt((dy2*dy2) + (dx2*dx2));
 
 
    // Check for solvability.
if (actDist > colDist){
      // no solution. circles do Not intersect
        c2cIntersect = false;
    }        
 
if (d < Math.abs(r1 - r2)) {
    // no solution. one circle is contained in the other
        c2cIntersect = false;
      }
    // point 2' is the point where the Line through the circle intersection points crosses the Line between the circle centers.
else {
    // Determine the distance from point 1 To point 2.
var a = ((r1*r1) - (r2*r2) + (d*d)) / (2.0 * d);
 
   // Determine the coordinates of point 2.
var xInt =  (dx * a/d);
var yInt = (dy * a/d);
 
  //Determine the distance from point 2 To either of the intersection points.
var h = Math.sqrt((r2*r2) - (a*a));
 
    // Now determine the offsets of the intersection points from point 2.
var rx = (0-dy2) * (h/d);
var ry = dx2 * (h/d);
 
  // Determine the absolute intersection points.
    var xi1 = x2 - rx;
    var xi2 = x2 + rx;
    var yi1 = y2 - ry;
    var yi2 = y2 + ry;

    var intersect1x = xi1 + (x1 - colPointX);
    var intersect1y = yi1 + (y1 - colPointY);
    var intersect2x = xi2 - (x2 - colPointX);
    var intersect2y = yi2 - (y2 - colPointY);


 
    c2cIntersect = true;

};







  c.font = "20pt arial";
  c.fillStyle = "#ccc";
  c.fillText(parseInt(x1,10),canvas.width-400,100);
  c.fillText(parseInt(y1,10),canvas.width-400,130);
  c.fillText(parseInt(x2,10),canvas.width-400,160);
  c.fillText(parseInt(y2,10),canvas.width-400,190);
 

  actDistDisplay = parseInt(actDist,10);

  c.font = "30pt arial";
  c.fillStyle = "#ddd";
  c.fillText('distance' + ' ' + actDistDisplay,canvas.width-400,230);

// **************** Collision actions

 if (actDist <= colDist) {
  c.font = "30pt arial";
  c.fillStyle = "#f00";
  c.fillText('distance' + ' ' + actDistDisplay,canvas.width-400,230);

  c.strokeStyle = "#0f0";
  c.line(circle1x,circle1y,circle2x,circle2y);
  c.strokeStyle = "#0f0";
  c.line(intersect1x,intersect1y,intersect2x,intersect2y);


  c.fillStyle = "rgb(255,0,0)";
  c.fillCircle(x1,y1,10);
  c.fillStyle = "rgb(255,0,0)";
  c.fillCircle(x2,y2,10);

  c.fillStyle = "rgb(0,0,255)";
  c.fillCircle(colPointX,colPointY,10);

 } //end collision actions

 // **************** Intersection actions

 if (c2cIntersect = true) {

  c.fillStyle = "rgb(0,255,0)";
  c.fillCircle(intersect1x,intersect1y,6);

  c.fillStyle = "rgb(0,255,0)";
  c.fillCircle(intersect2x,intersect2y,6);

  



 };


  counter++;
  } // end Draw function

// *************** proximity detection

 







$(document).ready(function() {
}); // close doc ready