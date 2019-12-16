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
    if (counter%4 == 0){
  // make glow
      // makeGlow();
  // set Composite
      c.globalCompositeOperation = 'lighter';
  //make 1 particle per frame
      makeParticle(1);
    }
  }
} // close $particle1EmmisionFunct


function makeParticle(numParticles) {
  
  for(var i=0; i<numParticles; i++){


    var randomStarShine = random(0,50);

    var p = {
    x : random(0,canvas.width),
    y : random(0,canvas.height),
    xVel : random(-2,0),
    yVel : 0,// random(-5,-15),
    hue : 360,// random(360),
    size : random(1,2),
    glow : false,
    gradSize : random(4,100)
    }; // close var P

    if (randomStarShine > 49) {
    p.glow = true;
  }

  if (particles.length < 150) {
      // create particles (p options)
      particles.push(p);
    }
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




// function makeGlow(){
//   c.fillStyle = rgba(255,0,0,1);
//   c.fillRect(0,0,canvas.width,canvas.height);
  
//   var gradCenterX = canvas.width/2;
//   var gradCenterY = canvas.height/2;
//   var shimr = random(-15,15);
//   var grd = c.createRadialGradient(gradCenterX+shimr, gradCenterY+shimr, 10, gradCenterX+shimr, gradCenterY+shimr, 500);
//       grd.addColorStop(0, 'rgba(0,0,0,0)');
//       grd.addColorStop(1, 'rgba(0,0,0,0.7)');

//   // var myImage = new Image();
//   //           myImage.src = "images/blueStones_background05.jpg";
//   //           c.drawImage(myImage, 0, 0, canvas.width, canvas.height);

//   c.fillStyle = grd;
//   c.fillRect(0, 0, canvas.width, canvas.height); 
  

// }

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
  if (particles.length > 350) {
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

  // var randomStarShine = random(0,50);

  if (p.glow) {
  // c.fillStyle = rgb(255,0,0);
  // c.fillCircle(p.x,p.y,random(5,10));
  var gradCenterX = p.x;
  var gradCenterY = p.y;
  var thisSizeGrad = p.gradSize;
  var grd = c.createRadialGradient(gradCenterX, gradCenterY, 0, gradCenterX, gradCenterY, thisSizeGrad);
      grd.addColorStop(0, 'rgba(255,255,255,1)');
      grd.addColorStop(0.1, 'rgba(255,255,255,0)');
      grd.addColorStop(0.6, 'rgba(255,255,255,0.05)');
      grd.addColorStop(0.8, 'rgba(255,255,255,0)');
      grd.addColorStop(1, 'rgba(255,255,255,0)');

  c.fillStyle = grd;
  c.fillCircle(gradCenterX, gradCenterY, thisSizeGrad);
}
  
  c.fillStyle = rgb(255,255,255);
  c.fillCircle(p.x,p.y,p.size);

  

  p.x += p.xVel-windStrength/*+turbulance*/;
  p.y += p.yVel;
  // p.size*=0.87;
    if (p.x < -10) {
      p.x = canvas.width +10;
      p.y = random(0,canvas.height);
      p.xVel = random(-2,0);
      p.yVel = 0;
      p.size = random(1,2);
      p.glow = false;
      p.gradSize = random(4,100);
      randomStarShine = random(0,50);
      if (randomStarShine > 49) {
      p.glow = true;
      }
    }
  } // close Particle 1 For Loop
}// close particle 1 updater

function particle1ClearRect() {
// Particle 1 For Loop
  for(var i=0; i<particles.length; i++) {
  var p = particles[i];
  var thisX = (p.x/2)  - p.xVel;
  var thisX = (p.y/2) - p.xVel;
  var thisSize = p.size*2; 
  c.clearRect(thisX,thisY,thisSize,thisSize);

  
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