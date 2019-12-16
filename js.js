$(window).resize(resizeCanvas);
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      canvasWidth = canvas.width();
      canvasHeight = canvas.height();
    };  

// housekeeping
var canvas = document.getElementById('creativejs'),
    c = canvas.getContext('2d');
canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
// particle array setup
var particles = [];
var particles2 = [];
var particles3 = [];

//counter init
var counter = 0;
var curScore = 0;
// play switch setup
var playing = false;
var playing2 = false;
var playing3 = false;



$('.showHide').click(function(){

  if ($('.buttonBox').hasClass('open'))
  {
    $('.showHide').html('Show Buttons');
    $('.buttonBox').removeClass('open').addClass('closed');
  } else {
    $('.showHide').html('Hide Buttons');
    $('.buttonBox').removeClass('closed').addClass('open');
  }

});



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

$('.action2Btn').parent().addClass('off');

var windStrength = 0;
var windAcceleration = 1;

$('.action2Btn').click(function(){
  if ($(this).parent().hasClass('off')) 
    {
      $(this).parent().removeClass('on off').addClass('on');
    } else if ($(this).parent().hasClass('on')) 
      {
    $(this).parent().removeClass('on off').addClass('off');
    }


});

$('.action3Btn').click(function(){
  playing3 = !playing3;
  if ($(this).parent().hasClass('off')) 
    {
      $(this).parent().removeClass('on off').addClass('on');
    } else if ($(this).parent().hasClass('on')) 
      {
    $(this).parent().removeClass('on off').addClass('off');
    }


});

// Listen to mouse click
canvas.addEventListener('mousedown',mousePressed);
// switch on/clickagain to switch off
// function mousePressed(e) { 
//   playing = !playing;
// }


  



function draw() {

// frame rate
  frameRate = 60;

// Each frame reset color overlay mode
  c.globalCompositeOperation = 'source-over';

// clearRect  
  c.fillStyle = rgba(0,0,0,1);
  c.fillRect(0,0,canvas.width,canvas.height);

// set turbulence
  var turbulance = random(-3,3);



// Each frame link play function to particle emmision (particlesPerFrame)


// playing3
  if(playing3) {
      if (counter%25 == 0){
        c.globalCompositeOperation = 'source-over';
        makeParticleSmoke(1);
      }
    }

  if(!playing3) { 
    particles3.length = 0;
  }

  // playing2
  if(playing2) { 
      if (counter%2 == 0){
        c.globalCompositeOperation = 'source-atop';
        makeParticle2(1); 
        }
    }

  if(!playing2) {
      particles2.length = 0;
    }

  if(playing) { 
    makeGlow();
    c.globalCompositeOperation = 'lighter';
    makeParticle(1);
  }


// link Button to Wind Effect On
  if ($('.action2Btn').parent().hasClass('on'))
    {
      if (windStrength < 20)
        {
          if (counter%1 == 0)
            {
              windStrength+=windAcceleration;
            }
          if (counter%1 == 0)
                {
                  windAcceleration++;
                }
        }
    } // End // link Button to Wind Effect On

// link Button Off to Wind Effect Reset
  else if ($('.action2Btn').parent().hasClass('off'))
    {
      windAcceleration = 1;
      if (windStrength >= 1)
        {

          windStrength-=windAcceleration;
          if (counter%5 == 0)
            {

              if (windAcceleration > 1) 
                {
                  windAcceleration++;
                }
            }
        }
    } // End link Button Off to Wind Effect Reset

// Limit the number of Particles

  while (particles.length > 7) {
  particles.shift();
  } // close while

  while (particles2.length > 20) {
  particles2.shift();
  } // close while

  while (particles3.length > 25) {
  makeParticleSmoke(0);
  //particles3.shift();
  } // close while
  

// Particle 2 For Loop

  for(var i=0; i<particles2.length; i++) {
  var p2 = particles2[i];
  c.globalCompositeOperation = "source-over";
  c.fillStyle = rgba(0,0,0,p2.smokeOpacity); 
  c.fillCircle(p2.x,p2.y,p2.size);
  p2.x += p2.xVel-windStrength;
  p2.y += p2.yVel;
  p2.size*=1.07;
  /*p.yVel+=0.9;*/
  } // close Particle 2 For Loop

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

 /*
  var drag = 0.95; 
  p.xVel *= drag;
  p.yVel *= drag;
  
    if (p.x <=0 ){
      p.x = p.size;
      p.xVel*=-1;
    } // close if
    
     if (p.x >=400 ){
      p.x = 400-p.size;
      p.xVel*=-1;
    } // close if
    
     if (p.y >=400 ){
      p.y = 400-p.size;
      p.yVel*=-1;
    }  // close if */
  
  } // close Particle 1 For Loop


var currentPx = 0;
var currentPy = 0;
var currentMx = mouseX;
var currentTop = 100;

// Particle 3 For Loop

  for(var i=0; i<particles3.length; i++) {
  var p3 = particles3[i];
  c.fillStyle = rgba(25,255,255,0.5);
  c.fillCircle(p3.x,p3.y,p3.size); 
  p3.x += p3.xVel-windStrength;
  p3.y += p3.yVel;
  p3.size*=1;


  
   //particle3.splice(currentId,1);
  
  
  } // close Particle 1 For Loop

 for(var i=0; i<particles3.length; i++) {
  var p3 = particles3[i];

  currentPx = parseInt(p3.x);
  currentPy = parseInt(p3.y);
  currentMx = mouseX;
  currentMy = mouseY;
  currentId = i;

c.font = 'italic 24pt arial';
  c.fillStyle = '#ccc'
 c.fillText(currentPx+' '+currentPy+' '+currentMx + ' ' + currentId, 100,currentTop);

  c.fillText('Hit ' + curScore, 800,100);
  currentTop+=30; 

  if ( (currentPx >= (currentMx-p3.size)) &&  (currentPx <= (currentMx+p3.size)) && (currentPy >= (currentMy-p3.size)) &&  (currentPy <= (currentMy+p3.size)) ) {
    
    
    curScore+=1;
    
      
 }

}



  counter++;





/* **************** Close Draw Function ******************** */
}
/* **************** Close Draw Function ******************** */



function makeParticle(numParticles) {
  
  for(var i=0; i<numParticles; i++){
    var p = {
    x : 600,
    y : 350,
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
    x : 600,
    y : 350,
    xVel : random(-0.1,0.1),
    yVel : random(-10,-15),
    hue : random(360),
    size : random(10,20),
    smokeOpacity : 0.05
    }; // close var P2
      // create particles (p2 options)
      particles2.push(p2);
  } // close for loop

} // close function makeParticle2

function makeParticleSmoke(numParticles) {
  
  for(var i=0; i<numParticles; i++){
    var p3 = {
    x : 1300,
    y : random(50,550),
    xVel : random(-3,-7),
    yVel : 0,
    hue : random(360),
    size : random(30,50)
    }; // close var P3
      // create particles (p3 options)
      
      particles3.push(p3);
  } // close for loop

} // close function makeParticle3

function makeGlow(){
  c.fillStyle = rgba(255,0,0,1);
  c.fillRect(0,0,canvas.width,canvas.height);
  
  var gradCenterX = 600;
  var gradCenterY = 350;
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

function makeGlow2(){
  
  var grad2CenterX = 400;
  var grad2CenterY = 400;
  var shimr = random(-15,15);
  var grd2 = c.createRadialGradient(grad2CenterX+shimr, grad2CenterY+shimr, 10, grad2CenterX+shimr, grad2CenterY+shimr, 500);
      grd2.addColorStop(0, 'rgba(0,0,0,0)');
      grd2.addColorStop(1, 'rgba(0,0,0,0.7)');

  c.fillStyle = grd2;
  c.fillRect(0, 0, canvas.width, canvas.height); 
}



