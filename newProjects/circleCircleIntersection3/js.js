  

// housekeeping
var canvas = document.getElementById('creativejs'),
    c = canvas.getContext('2d');

  var particles = [];

  //counter init
  var counter = 0;
  var curScore = 0;
  // play switch setup

  var playing = true;
// set Full Screen

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasW = canvas.width;
    canvasH = canvas.height;

// Nav button functions

$('.plus-Btn').click(function(){
  makeParticle(10)
 
});

$('.minus-Btn').click(function(){
  particles.shift();
  
});





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
 
  // Each frame link play function to particle emmision (particlesPerFrame)
// playing3
  particle3EmmisionFunct();

//particle limiter
  particleLimiter();

// particle 3 updater
  particle3Updater();

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
    size : random(50,200),
    fPassSw : false,
    pKill : false
    }; // close var p
      // create particles (p options)
      
      particles.push(p);
  } // close for loop

} // close function makeParticle3


function particleLimiter() {
// Limit the number of Particles

  if (particles.length > 15) {
    makeParticle(0);
  // particles.shift();
  } // close while
} // end particle limiter


function particle3Updater() {
// Particle 3 For Loop
  for(var i=particles.length-1; i>=0; i--) {
  var p = particles[i];
  c.globalCompositeOperation = "lighter";
// create gradient for particle color
  var grd3 = c.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
      grd3.addColorStop(0, 'rgba(25,255,255,0)');
      grd3.addColorStop(0.2, 'rgba(25,255,255,0)');
      grd3.addColorStop(0.8, 'rgba(25,255,255,1)');
      grd3.addColorStop(1, 'rgba(25,255,255,0)');
// create particle with gradient
      c.fillStyle = grd3;
      c.fillCircle(p.x,p.y,p.size);

//when particle hits left border reverse velocity
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
   
  } // close Particle 3 For Loop
} // close particle 3 updater


$(document).ready(function() {
}); // close doc ready