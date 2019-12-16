/* ******************************* Draw Function *************************** */

function draw() {
// Housekeeping

// frame rate
  frameRate = 60;
// Each frame reset color overlay mode
  c.globalCompositeOperation = 'source-over';
  c2.globalCompositeOperation = 'source-over';
//clearRect  
  // c.fillStyle = rgba(0,0,0,1);
  c.clearRect(0,0,canvas.width,canvas.height);
  c2.clearRect(0,0,canvas.width,canvas.height);

// particle1ClearRect();

// set turbulence
  var turbulance = random(-3,3);

// Each frame link play function to particle emmision (particlesPerFrame)
// playing2
  particle2EmmisionFunct();
// playing1
  particle1EmmisionFunct();
//windEffectFunction
  windEffectFunction();
//particle limiter
  particleLimiter();
// particle 2 updater
  particle2Updater();
// particle 1 updater
  particle1Updater();
var gunPosX = player1.x;
var gunPosY = player1.y;
particle1EmmisionFunct();
renderLayers();

c.font = 'italic 24pt arial';
c.fillStyle = '#ccc';
c.fillText(particles.length, 100, 100);

keyRuntime();

  counter++;

/* **************** Close Draw Function ******************** */
}
/* **************** Close Draw Function ******************** */