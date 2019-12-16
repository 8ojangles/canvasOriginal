
bulletArray = [];
var bulletXVel = 0;
var bulletYVel = 0;

var gunPosX = player1.x;
var gunPosY = player1.y;

var bulletAttributes = {
	radius : 5,
	colorR : 255,
	colorG : 100,
	colorB : 100,
	color2R : 200,
	color2G : 200,
	color2B : 255,
	colorA : 1,
	x : player1.x,
	y : player1.y,
	xVel : 0,
	yVel : 0
};

var bullet = bulletAttributes;

var bulletUpdate = function () {
	bullet.x = bullet.x + bullet.xVel;
	bullet.y = bullet.y + bullet.yVel;	
};


var bulletEntity = function () {
 	bulletGraphic();
 	bulletUpdate();
};

var bulletGraphic = function () {

	c2.lineWidth = 3;

	c2.strokeStyle = rgb(
		bullet.colorR,
		bullet.colorG,
		bullet.colorB
		);

  	c2.strokeCircle(
  		bullet.x,
  		bullet.y,
  		bullet.radius
  		);

};

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

  	var gunPosX = player1.x;
  	var gunPosY = player1.y;

    var p = {
    x : gunPosX,
    y : gunPosY,
    xVel : bulletSpeed,
    yVel : 0,
    hue : random(360),
    size : random(15,18)
    }; // close var P
      
    // Per Particle adjustments

    // if (faceLeft) {
    //   p.xVel = bulletSpeed*-1;
    // } else if (faceRight) {
    //   p.xVel = bulletSpeed*1;
    // }

    // if (upKeyOn) {
    //   p.yVel = bulletSpeed*-1;
    // }

    // if (downKeyOn) {
    //   p.yVel = bulletSpeed*1;
    // }
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
  if (p.x < 0 || p.x > canvas.width+p.size || p.y < 0 || p.y > canvas.height+p.size)
  {
    particles.splice(i,1);
  } else {

    c.globalCompositeOperation = "lighter";
    c.fillStyle = rgb(255,40,40); 
    c.fillCircle(p.x,p.y,p.size);
     
    c.fillStyle = rgb(255,255,255);
    c.fillCircle(p.x,p.y,p.size*0.5);

    p.size*=0.98;

    p.x += p.xVel;
    p.y += p.yVel;

    // Particle/Enemy Collision
    // var esY = floorLevel1-eS.height/2;

    // if ( (p.x-p.size/2 >= eS.x) && (p.x+p.size/2 <= eS.x+eS.width) ) {
    //   if ( (p.y >= esY) && (p.y <= esY+eS.height) ) {
    //     eS.health -=1;
    //     eS.ColorR = 255;
    //     eS.ColorG = 255;
    //     eS.ColorB = 255;
    //     particles.splice(i,1);
    //     energyBarColA = 1;
    //   }
    // }
 
  } 

}// close Particle 1 For Loop
}// close particle 1 updater
