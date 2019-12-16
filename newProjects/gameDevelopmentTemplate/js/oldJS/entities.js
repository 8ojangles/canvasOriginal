
var entity1Attributes = {
	width : 100,
	height : 100,
	radius : 20,
	colorR : 100,
	colorG : 100,
	colorB : 255,
	colorA : 1,
	x : player1.x,
	y : (player1.y - (player1.radius * 0.5)),
	xVel : -5,//  random(-10,10),
	yVel : 0,// random(-10,10),
	mass : 100,
	attractiveRate : 0.0001
};

var entity1 = entity1Attributes;

var deadStop = function () {
	entity1.xVel = 0;
	entity1.yVel = 0;
};

var entityInertia = function () {
	if ((entity1.xVel*1 > 0) || (entity1.xVel*1 < 0)) {
		entity1.xVel = entity1.xVel*0.95;
	}
	if ((entity1.yVel*1 > 0) || (entity1.yVel*1 < 0)) {
		entity1.yVel = entity1.yVel*0.95;
	}
};

var attractX = 0;
var attractY = 0;

var entityUpdate = function () {
	entityAttraction();
	entity1.x += entity1.xVel;
	entity1.y += entity1.yVel;

	if (entity1.xVel < 0) {
		entity1RenderBehind = true;
	}
	if (entity1.xVel > 0) {
		entity1RenderBehind = false;
	}
	entity1Scale();
	// entityInertia();	
};

var entityAttraction = function () {

	var distance = dist(player1.x, player1.y, entity1.x, entity1.y);

	if (distance > 0) {

		if (player1.x < entity1.x) {
			entity1.xVel = entity1.xVel - ((entity1.x - player1.x)*entity1.attractiveRate);	
		}
		if (player1.x > entity1.x) {
			entity1.xVel = entity1.xVel + ((player1.x - entity1.x)*entity1.attractiveRate);	
		}

		if (player1.y < entity1.y) {
			entity1.yVel = entity1.yVel - ((entity1.y - player1.y)*entity1.attractiveRate);	
		}
		if (player1.y > entity1.y) {
			entity1.yVel = entity1.yVel + ((player1.y - entity1.y)*entity1.attractiveRate);	
		}

	}
};

var entity1radius = entity1.radius;

var entity1Scale = function () {
	

	// if ((entity1.radius > 200) || (entity1.radius < 20)) {
	// 	return false;
	// } else {

		if (entity1.y > player1.y) {
			if (entity1.radius < 100){
			
				var yDist = entity1.y - player1.y;
		
				entity1.radius = (entity1radius + (yDist/4));
			}
		}

		if (player1.y > entity1.y) {
			if (entity1.radius > 10){
			var yDist = player1.y - entity1.y;
			entity1.radius = (entity1radius - (yDist/4));
		}
		}



		// if (entity1.y < player1.y) {
		// 	if (entity.radius > 10) {

		// 	var yDist = player1.y - entity1.y;

		// 	entity1.radius = entity1radius - yDist;

		// 	};
		// }

		// if (entity1.y < player1.y){

		// var yDist = player1.y - entity1.y;

		// entity1.radius = entity1radius - yDist;

		// }

		// if (entity1.xVel > 0) {
		// 	entity1.radius = entity1.radius - 0;
		// }
		// if (entity1.xVel < 0) {
		// 	entity1.radius = entity1.radius -10;
		// }
	//}
};

var entity1RenderBehind = false;

var entityEntity = function () {
 	entityGraphic();
 	entityUpdate();
};

var entityGraphic = function () {

	var gradPoint2x = entity1.x;
	var gradPoint2y = entity1.y - (entity1.radius);

	var grd=c2.createRadialGradient(entity1.x,entity1.y,0,gradPoint2x,gradPoint2y,100);
	grd.addColorStop(0,"rgb(0,0,255)");
	grd.addColorStop(1,"rgb(150,150,255)");

	// Fill with gradient
	c2.fillStyle=grd;

	// c2.fillStyle = rgb(
	// 	entity1.colorR,
	// 	entity1.colorG,
	// 	entity1.colorB
	// 	);
  	c2.fillCircle(
  		entity1.x,
  		entity1.y,
  		entity1.radius
  		);
};
