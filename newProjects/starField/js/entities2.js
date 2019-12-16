
var entity2Attributes = {
	width : 100,
	height : 100,
	radius : 5,
	colorR : 100,
	colorG : 100,
	colorB : 255,
	colorA : 1,
	x : player1.x,
	y : (player1.y - (player1.radius * 4)),
	xVel : -2,//  random(-10,10),
	yVel : 0,// random(-10,10),
	mass : 100,
	attractiveRate : 0.00005
};

var entity2 = entity2Attributes;

var deadStop = function () {
	entity2.xVel = 0;
	entity2.yVel = 0;
};

var entity2Inertia = function () {
	if ((entity2.xVel*1 > 0) || (entity2.xVel*1 < 0)) {
		entity2.xVel = entity2.xVel*0.95;
	}
	if ((entity2.yVel*1 > 0) || (entity2.yVel*1 < 0)) {
		entity2.yVel = entity2.yVel*0.95;
	}
};

var entity2Update = function () {
	entity2Attraction();
	entity2.x += entity2.xVel;
	entity2.y += entity2.yVel;
	// entityInertia();	
};

var entity2Attraction = function () {

	var distance = dist(player1.x, player1.y, entity2.x, entity2.y);

	if (distance > 0) {

		if (player1.x < entity2.x) {
			entity2.xVel = entity2.xVel - ((entity2.x - player1.x)*entity2.attractiveRate);	
		}
		if (player1.x > entity2.x) {
			entity2.xVel = entity2.xVel + ((player1.x - entity2.x)*entity2.attractiveRate);	
		}

		if (player1.y < entity2.y) {
			entity2.yVel = entity2.yVel - ((entity2.y - player1.y)*entity2.attractiveRate);	
		}
		if (player1.y > entity2.y) {
			entity2.yVel = entity2.yVel + ((player1.y - entity2.y)*entity2.attractiveRate);	
		}

	}
};

var entity2Entity = function () {
 	entity2Graphic();
 	entity2Update();
};

var entity2Graphic = function () {

	var gradPoint2x = entity2.x;
	var gradPoint2y = entity2.y - (entity2.radius);

	var grd=c2.createRadialGradient(entity2.x,entity2.y,entity2.radius,gradPoint2x,gradPoint2y,entity2.radius/2);
	grd.addColorStop(0,"rgb(0,0,255)");
	grd.addColorStop(1,"rgb(150,150,255)");

	// Fill with gradient
	c2.fillStyle=grd;

	// c2.fillStyle = rgb(
	// 	entity2.colorR,
	// 	entity2.colorG,
	// 	entity2.colorB
	// 	);
  	c2.fillCircle(
  		entity2.x,
  		entity2.y,
  		entity2.radius
  		);
};
