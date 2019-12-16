

// housekeeping
var canvas = document.getElementById('creativejs'),
    c = canvas.getContext('2d');

// particle array setup
var particles = [];
var particles2 = [];

//counter init
var counter = 0;
// play switch setup
var playing = false;
var playing2 = false;


/* ******************************* Draw Function *************************** */

function draw() {
// Housekeeping

// frame rate
  frameRate = 30;
// Each frame reset color overlay mode
  c.globalCompositeOperation = 'source-over';
// clearRect  
  c.fillStyle = rgba(0,0,0,1);
  c.fillRect(0,0,canvas.width,canvas.height);

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

  counter++;

/* **************** Close Draw Function ******************** */
}
/* **************** Close Draw Function ******************** */



/* *****************Functions ****************************** */

function particle2EmmisionFunct() {
// if playing2 function is true
  if(playing2) {
// and counter/1 leaves 0 (i.e. every frame) 
      if (counter%1 == 0){
// set Composite
        c.globalCompositeOperation = 'source-atop';
//make 1 particle per frame
        makeParticle2(1);   
        }
    }
// if playing2 function is false empty particle2 array
  if(!playing2) {
      particles2.length = 0;
    }
} // close $particle2EmmisionFunct

function particle1EmmisionFunct() {
// if playing function is true
  if(playing) {
// make glow
    makeGlow();
// set Composite
    c.globalCompositeOperation = 'lighter';
//make 1 particle per frame
    makeParticle(1);
  }
} // close $particle1EmmisionFunct


function makeParticle(numParticles) {
  
  for(var i=0; i<numParticles; i++){
    var p = {
    x : 400,
    y : 300,
    xVel : random(-0.1,0.1),
    yVel : random(-5,-15),
    hue : random(360),
    size : random(40,42)
    }; // close var P
      // create particles (p options)
      particles.push(p);
  } // close for loop

} // close function makeParticle

function makeParticle2(numParticles) {
  
  for(var i=0; i<numParticles; i++){
    var p2 = {
    x : 400,
    y : 300,
    xVel : random(-0.1,0.1),
    yVel : random(-10,-15),
    hue : random(360),
    size : random(5,10),
    smokeOpacity : 0
    }; // close var P2
      // create particles (p2 options)
      particles2.push(p2);
  } // close for loop

} // close function makeParticle2




function makeGlow(){
  c.fillStyle = rgba(255,0,0,1);
  c.fillRect(0,0,canvas.width,canvas.height);
  
  var gradCenterX = 400;
  var gradCenterY = 300;
  var shimr = random(-15,15);
  var grd = c.createRadialGradient(gradCenterX+shimr, gradCenterY+shimr, 10, gradCenterX+shimr, gradCenterY+shimr, 500);
      grd.addColorStop(0, 'rgba(0,0,0,0)');
      grd.addColorStop(1, 'rgba(0,0,0,0.7)');

  // var myImage = new Image();
  //           myImage.src = "images/blueStones_background05.jpg";
  //           c.drawImage(myImage, 0, 0, canvas.width, canvas.height);

  c.fillStyle = grd;
  c.fillRect(0, 0, canvas.width, canvas.height); 
  

}

function windEffectFunction() {
// link Button on to Wind Effect
  if ($('.action2Btn').parent().hasClass('on'))
    {
// if button is "on" and wind strength is under 20
      if (windStrength < 20)
        {
// set change rate with modulous (every frame)
          if (counter%1 == 0)
            {
// add wind acceleration to current wind strength             
              windStrength+=windAcceleration;
            }
          if (counter%1 == 0)
// set change rate with modulous (every frame) and increment wind acceleration
                {
                  windAcceleration++;
                }
        }
    } // End // link Button to Wind Effect On

// link Button Off to Wind Effect Reset
  else if ($('.action2Btn').parent().hasClass('off'))
    {
// reset wind acceleration
      windAcceleration = 1;
// if wind strength is 1 or over 
      if (windStrength >= 1)
        {
// minus wind acceleration from wind strength
          windStrength-=windAcceleration;
// set change rate with modulous (every 5 frames)?
          if (counter%5 == 0)
            {
              if (windAcceleration > 1) 
                {
// if wiind acceleration is over 1 then increment wind acceleration
                  windAcceleration++;
                }
            }
        }
    } // End link Button Off to Wind Effect Reset
} // End Wind effect function

function particleLimiter() {
// Limit the number of Particles
  while (particles.length > 7) {
  particles.shift();
  } // close while

  while (particles2.length > 40) {
  particles2.shift();
  } // close while

} // end particle limiter

function particle1Updater() {
// Particle 1 For Loop
  for(var i=0; i<particles.length; i++) {
  var p = particles[i];

  c.globalCompositeOperation = "lighter";
  c.fillStyle = rgb(255,40,40); 
  c.fillCircle(p.x,p.y,p.size);
   c.fillStyle = rgb(255,190,0);
  c.fillCircle(p.x,p.y,p.size*0.9);
  c.fillStyle = rgb(255,255,255);
  c.fillCircle(p.x,p.y,p.size*0.5);

  p.x += p.xVel-windStrength/*+turbulance*/;
  p.y += p.yVel;
  p.size*=0.87;
  
  } // close Particle 1 For Loop
}// close particle 1 updater

function particle2Updater() {

  for(var i=0; i<particles2.length; i++) {
  var p2 = particles2[i];
  c.globalCompositeOperation = "source-over";
  c.fillStyle = rgba(0,0,0,p2.smokeOpacity);
  c.fillCircle(p2.x,p2.y,p2.size);
  
  p2.x += p2.xVel-windStrength;
  p2.y += p2.yVel;
  p2.size*=1.01;
  p2.smokeOpacity = p2.smokeOpacity+0.001;

  /*p.yVel+=0.9;*/
  } // close Particle 2 For Loop
}// close particle2 updater

/* *************************Button functions *********************** */

// show/hide button
$('.showHide').click(function(){
  if ($('.buttonBox').hasClass('open'))
  {
    $('.showHide').html('Show');
    $('.buttonBox').removeClass('open').addClass('closed');
  } else {
    $('.showHide').html('Hide');
    $('.buttonBox').removeClass('closed').addClass('open');
  }
});


// button 1 (flame)
$('.playStopBtn').click(function () {
  playing = !playing;
  if (playing) {
    $(this).parent().removeClass('on off').addClass('on');
  } else if (!playing){
    $(this).parent().removeClass('on off').addClass('off');
  }
  preventDefault();
  return false;
});

// button 1 (smoke)
$('.action1Btn').click(function () {
  playing2 = !playing2;
  if (playing2) {
    $(this).parent().removeClass('on off').addClass('on');
  } else if (!playing2){
    $(this).parent().removeClass('on off').addClass('off');
  }
  preventDefault();
  return false;
});
// init button3 (wind)
$('.action2Btn').parent().addClass('off');
//wind variables
var windStrength = 0;
var windAcceleration = 1;

//button 3 (wind) function
$('.action2Btn').click(function(){
  if ($(this).parent().hasClass('off')) 
    {
      $(this).parent().removeClass('on off').addClass('on');
    } else if ($(this).parent().hasClass('on')) 
      {
    $(this).parent().removeClass('on off').addClass('off');
    }
});

