$(document).ready(function() {

// housekeeping
var canvas = document.getElementById('creativejs'),
    c = canvas.getContext('2d');

    var particles = [],
        particles2 = [],
    playing = false,
    playing2 = false,
    counter = 0,
    collision = false,
    flare = false;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var canvasW = canvas.width;
    var canvasH = canvas.height;

var circle1x = 300,
    circle1y = 300,
    circle1rad = 100,
    circle1xVel = random(-3,3),
    circle1yVel = random(-3,3),
    circle1ColorR = 200,
    circle1ColorG = 200,
    circle1ColorB = 200,
    circle1Line = 1,
    circle1Bounce = false,
    circle1SizeRate = 1,
    circle1SizeSwitch = true;


var circle2x = 900,
    circle2y = 300,
    circle2rad = 100,
    circle2xVel = random(-3,3),
    circle2yVel = random(-3,3),
    circle2ColorR = 100,
    circle2ColorG = 100,
    circle2ColorB = 200,
    circle2Line = 1,
    circle2Bounce = false,
    circle2SizeRate = 1,
    circle2SizeSwitch = true;

  var intersectPointSize = 50;
  var intersectPointRadius = intersectPointSize;
  var intersectPointIndex = 0.01;
  var intersectPointSwitch = false;
  var intersectPointRadiusResult = 0;

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


  var circle2ColorAdder = false;
 

  c.strokeStyle = rgba(circle1ColorR,circle1ColorG,circle1ColorB,1);
  c.lineWidth = circle1Line;
  c.strokeCircle(circle1x,circle1y,circle1rad);

  
  c.strokeStyle = rgba(circle2ColorR,circle2ColorG,circle2ColorB,1);
  c.lineWidth = circle2Line;
  c.strokeCircle(circle2x,circle2y,circle2rad);



  circle1x = circle1x + circle1xVel;
  circle2x = circle2x + circle2xVel;
  circle1y = (circle1y + circle1yVel);
  circle2y = (circle2y + circle2yVel);



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

}

  c.font = "20pt arial";
  c.fillStyle = "#ccc";
  c.fillText('X:'+' '+parseInt(x1,10),circle1x,circle1y-90);
  c.fillText('Y:'+' '+parseInt(y1,10),circle1x,circle1y-60);

  c.fillText('X:'+' '+parseInt(x2,10),circle2x,circle2y-90);
  c.fillText('Y:'+' '+parseInt(y2,10),circle2x,circle2y-60);

  actDistDisplay = parseInt(actDist,10);

  c.font = "30pt arial";
  c.fillStyle = "#ddd";
  c.fillText('distance',colPointX,colPointY-90);
  c.fillText(actDistDisplay,colPointX,colPointY-60);

// **************** Collision actions

 if (actDist <= colDist) {

  c.font = "30pt arial";
  c.fillStyle = "#f00";
  c.fillText('distance',colPointX,colPointY-90);
  c.fillText(actDistDisplay,colPointX,colPointY-60);

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

  // **************** Intersection actions
  playing = true;
  playing2 = true;

  c.fillStyle = "rgb(0,255,0)";
  c.fillCircle(intersect1x,intersect1y,intersectPointRadius);
  c.fillCircle(intersect2x,intersect2y,intersectPointRadius); 
  
  if (intersectPointRadius > 7) {
    intersectPointRadius-=5;
  }

  if (intersectPointRadius <= 7) {
    intersectPointRadius=7;
  }

  // **************** End Intersection actions

  if (circle1ColorR <255) {
    circle1ColorR += 1;
  }
  if (circle1ColorG <255) {
    circle1ColorG += 1;
  }
  if (circle1ColorB <255) {
    circle1ColorB += 1;
  }

  if (circle2ColorB <255) {
      circle2ColorB += 1;
    }
  if (circle2ColorR <230) {
      circle2ColorR += 2;
    }
  if (circle2ColorG <230) {
      circle2ColorG += 2;
    }

  if (circle1Line < 3 ) { 
    circle1Line += 0.3;
  }

  if (circle2Line < 3 ) { 
    circle2Line += 0.3;
  }


 }  else {

  if (circle1ColorR > 200) {
    circle1ColorR -= 1;
  }
  if (circle1ColorG > 200) {
    circle1ColorG -= 1;
  }
  if (circle1ColorB > 200) {
    circle1ColorB -= 1;
  }

  if (circle2ColorB > 200) {
    circle2ColorB -= 1;
  }

  if (circle2ColorR >100) {
    circle2ColorR -= 2;
  }

  if (circle2ColorG >100) {
      circle2ColorG -= 2;
    }

  if (circle1Line > 1 ) { 
    circle1Line -= 0.3;
  }

  if (circle2Line > 1 ) { 
      circle2Line -= 0.3;
    }

  intersectPointRadius = intersectPointSize;
  playing = false;
  playing2 = false;

 } // Close Else, Close actDist/colDist ifElse

 //end collision actions

 if(playing) { 
    c.globalCompositeOperation = 'lighter';
    makeParticle(4);
    makeParticle2(4);
  }

  if(!playing) { 
    particles.length = 0;
    particles2.length = 0;
  }

  while (particles.length > 10) {
  particles.shift();
  } // close while

  while (particles2.length > 10) {
  particles2.shift();
  } // close while

  function makeParticle(numParticles) {
  
  for(var i=0; i<numParticles; i++){
    var p = {
    x : intersect1x,
    y : intersect1y,
    xVel : random(-20,20),
    yVel : random(-20,20),
    hue : random(360),
    size : random(1,2)
    }; // close var P
      // create particles (p options)
      particles.push(p);
  } // close for loop

} // close function makeParticle

 for(var i=0; i<particles.length; i++) {
  var p = particles[i];
  c.globalCompositeOperation = "source-over";
  c.fillStyle = rgb(255,255,255); 
  c.fillCircle(p.x,p.y,p.size); 
  p.x += p.xVel;
  p.y += p.yVel;
}

  function makeParticle2(numParticles) {
  
  for(var i=0; i<numParticles; i++){
    var p = {
    x : intersect2x,
    y : intersect2y,
    xVel : random(-20,20),
    yVel : random(-20,20),  
    size : random(1,2)
    }; // close var P
      // create particles (p options)
      particles2.push(p);
  } // close for loop

} // close function makeParticle

   for(var i=0; i<particles2.length; i++) {
    var p = particles2[i];
    c.globalCompositeOperation = "source-over";
    var hueR = random(1,255);
      var hueG = random(1,255);
      var hueB = 255;
    c.fillStyle = rgb(hueR,hueG,hueB); 
    c.fillCircle(p.x,p.y,p.size); 
    p.x += p.xVel;
    p.y += p.yVel;
  }

  counter++;
} // end Draw function

// *************** proximity detection


}); // close doc ready