  

// housekeeping
var canvas = document.getElementById('creativejs'),
    c = canvas.getContext('2d');

  var particles = [];
  var particles2 = [];
  var particles3 = [];
  var c2cIntersect = false;
  //counter init
  var counter = 0;
  var curScore = 0;
  // play switch setup
  var currentTop = 100;
 
  var playing = true;
// set Full Screen

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasW = canvas.width;
    canvasH = canvas.height;

// Nav button functions

$('.plus-Btn').click(function(){
  makeParticle(5);
  
});

$('.minus-Btn').click(function(){
  particles.shift();
  
});


var circle1x = 300,
    circle1y = 300,
    circle1rad = 100,
    circle1xVel = random(-2,2),
    circle1yVel = random(-2,2),
    circle1SizeRate = 1;
    circle1SizeSwitch = true;

var circle2x = 900,
    circle2y = 300,
    circle2rad = 100,
    circle2xVel = random(-4,4),
    circle2yVel = random(-4,4),
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

  // Each frame link play function to particle emmision (particlesPerFrame)
// playing3
  particle3EmmisionFunct();

//particle limiter
  particleLimiter();

// particle 3 updater
  particleUpdater();
  particle2Updater();
  particle3Updater();

  var timerSec = counter/30;
  
  var tS = parseInt(timerSec,10);
  var tM = parseInt((timerSec/60),10);
  var tH = parseInt((tM/60),10);

  if (tS >= 59) {
    tS = ((tS - (tM*60))*1);
  }


  c.font = 'bold 30pt arial';
  c.fillStyle = '#ccc';
  c.fillText(particles2.length,canvas.width/2,100);

  c.font = 'bold 30pt arial';
  c.fillStyle = '#aaf';
  c.fillText(curScore,(canvas.width/2)+100,100);



  c.font = 'bold 30pt arial';
  c.fillStyle = '#faa';
  c.fillText(tH + ':' + tM + ':' + tS,(canvas.width/2)+200,100); 


  counter++;
  } // end Draw function

// *************** proximity detection

 function particle3EmmisionFunct() {
  if(playing) {
      if (counter%25 == 0){
        c.globalCompositeOperation = 'source-over';
        
      }
    }

  if(!playing) { 
    particles.length = 0;
  }
} // close $particle3EmmisionFunct


function makeParticle(numParticles) {
  
  for(var i=0; i<numParticles; i++){
    var p = {
    x : random(100,(canvas.width - 100)),
    y : random(100,(canvas.height - 100)),
    xVel : random(-4,4),
    yVel : random(-4,4),
    hue : random(360),
    size : random(100,200),
    fPassSw : false,
    pKill : false
    }; // close var p
      // create particles (p options)
      
      particles.push(p);
  } // close for loop

} // close function makeParticle

function makeParticle3(numParticles) {
  
  for(var l=0; l<numParticles; l++){
    var pInter = {
    x1 : 0,
    y1 : 0,
   
    pR : random(255),
    pG : random(255),
    pB : random(255),
    size : random(2,5),
    xVel : random(-20,20),
    yVel : random(-20,20),
    opacity : 0
    }; // close var p
      // create particles (p options)
      
      particles3.push(pInter);
  } // close for loop

} // close function makeParticle

var thisX = 0;
var thisY = 0;

function makeParticle2(numParticles) {
  
  for(var i=0; i<numParticles; i++){
    var p2 = {
    x : thisX,
    y : thisY,
    xVel : random(-60,60),
    yVel : random(-60,60),
    hue : random(360),
    size : random(2,50),
    opacity : 1,
    pR : 255,
    pG : 255,
    pB : 255,
    colorEase : 1
    }; // close var p2
      // create particles2 (p options)
      
      particles2.push(p2);
  } // close for loop

} // close function makeParticle2

function particleLimiter() {
// Limit the number of Particles

  if (particles.length > 15) {
    makeParticle(0);
  // particles.shift();
  } // close while
} // end particle limiter
  var mouseDistOutputHeight = 100;

var cTestColor = rgba(random(0,255),random(0,255),random(0,255),0.8);
function particleUpdater() {
// Particle For Loop
  for(var i=particles.length-1; i>=0; i--) {
  var p = particles[i];
  c.globalCompositeOperation = "lighter";
// create gradient for particle color
  
// create particle with gradient
        var mouseD = Math.sqrt((mouseX - p.x)*(mouseX - p.x) + (mouseY - p.y)*(mouseY - p.y)); 
        var mouseDist = parseInt(mouseD,10); 
        var currentPx = 0;
        var currentPy = 0;
        var currentMx = mouseX;
        
        c.lineWidth = 4;
        c.strokeStyle = "#fff";
        c.strokeCircle(p.x,p.y,p.size);

        

    for(k=0;k<particles.length;k++) {
      var pA = particles[k];
      var x1 = p.x;
      var y1 = p.y;
      
      var x2 = pA.x;
      var y2 = pA.y;
      var r1 = p.size;
      var r2 = pA.size;
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
      var a = ((r1*r1) - (r2*r2) + (d*d)) / (2 * d);
       
         // Determine the coordinates of point 2.
      var xInt =  (dx * a/d);
      var yInt = (dy * a/d);
       
        //Determine the distance from point 2 To either of the intersection points.
      var h = Math.sqrt((r2*r2) - (a*a));
       
          // Now determine the offsets of the intersection points from point 2.
      var rx = (2-dy2) * (h/d);
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


          if (c2cIntersect) {
          c.fillStyle = rgb(255,0,0);
          c.fillCircle(intersect1x,intersect1y,10);
          c.fillCircle(intersect2x,intersect2y,10);

          thisX = intersect1x;
          thisY = intersect1y;
          

        

        
          c.globalCompositeOperation = "source-over";
          c.strokeStyle = "#0f0";
          c.line(intersect1x,intersect1y,intersect2x,intersect2y);

          makeParticle3(10);
          if (particles3.length >= 100) {
            particles3.shift();
          }

   } 
  
    

    } // end Collision if/else

    if (actDist <= colDist) {

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

      }




    } // end Collision detection



      if (mouseD > p.size) {
        c.fillStyle = cTestColor;
      } else if (mouseDist <= p.size) {
      c.fillStyle = rgb(255,0,0);
      }
 
      

      c.fillCircle(p.x,p.y,p.size);

      if (mouseDown) {
        if (mouseDist <= p.size) {       
          p.size *=1.1;
          if (p.size >= 120) {

            thisX = p.x;
            thisY = p.y;

            particles.splice(i,1);




            c.globalCompositeOperation = "source-over";
            if (particles2.length >= 300) {
            particles2.splice(0,100);
          }
            makeParticle2(100);
            curScore+=1;
          }
        }
      }

  currentPx = parseInt(p.x);
  currentPy = parseInt(p.y);
  currentMx = mouseX;
  currentMy = mouseY;

  if (mouseDist <= p.size) {
  c.font = 'bold 24pt arial';
  c.fillStyle = '#f00';
} else {
  c.font = 'italic 24pt arial';
  c.fillStyle = '#ccc';
}

 c.fillText(mouseDist +' '+ i, canvas.width - 200,currentTop+(30+(i*30)));    

//if particle hits borders reverse velocity
    if (p.x <= p.size ){
      p.x = p.size;
      p.xVel*=-1;
    } // close if
    if (p.x >= canvas.width - p.size ){
      p.x = canvas.width - p.size;
      p.xVel*=-1;
    } // close if 
    if (p.y <= p.size ){
      p.y = p.size;
      p.yVel*=-1;
    } // close if 
    if (p.y >= canvas.height - p.size ){
      p.y = canvas.height - p.size;
      p.yVel*=-1;
    } // close if 

// update particle position for next frame 
    p.x += p.xVel;
    p.y += p.yVel;
    p.size*=1;

    // Collision detection

    




   
  } // close Particle For Loop



} // close particle updater

function particle2Updater() {
// Particle For Loop
  for(j=0;j<particles2.length;j++) {
  var p2 = particles2[j];
  c.globalCompositeOperation = "lighter";
// create gradient for particle color
  
// create particle with gradient
        var mouseD = Math.sqrt((mouseX - p2.x)*(mouseX - p2.x) + (mouseY - p2.y)*(mouseY - p2.y)); 
        var mouseDist = parseInt(mouseD,10); 
        var currentPx = 0;
        var currentPy = 0;
        var currentMx = mouseX;
        


        c.fillStyle = rgba(p2.pR,p2.pG,p2.pB,(p2.opacity));
        c.fillCircle(p2.x,p2.y,p2.size);
        

        p2.x += p2.xVel;
        p2.y += p2.yVel;
        p2.yVel += 0.9;
        p2.size *=0.9;
        p2.opacity *=0.99;
        // p2.pR -= colorEase;
        p2.pG -= p2.colorEase;
        p2.pB -= p2.colorEase;
        

        p2.colorEase *= random(0.7,1.9);




        

  
 //  c.font = 'bold 24pt arial';
 //  c.fillStyle = '#f00';

 // c.fillText(i, canvas.width - 600,100+(30+(j*30)));     


   
  } // close Particle2 For Loop



} // close particle2 updater

function particle3Updater() {
// Particle For Loop
  for(m=0;m<particles3.length;m++) {
  var p3 = particles3[m];
  c.globalCompositeOperation = "source-over";
// create gradient for particle color
  
// create particle with gradient
        


        c.fillStyle = rgba(255,255,255,1);
        c.fillCircle(p3.x1,p3.y1,p3.size);

        p3.x1 += p3.xVel;
        p3.y1 += p3.xYel;
        

       
   


   
  } // close Particle2 For Loop



} // close particle2 updater



$(document).ready(function() {
}); // close doc ready