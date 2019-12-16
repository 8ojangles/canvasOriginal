var playerAttributes = {
	width : 100,
	height : 100,
	radius : 80,
	colorR : 100,
	colorG : 100,
	colorB : 255,
	colorA : 1,
	x : canvas.width/2,
	y : canvas.height/2,
	xVel : 0,
	yVel : 0,
	mass : 100
};

var player1 = playerAttributes;

var deadStop = function () {
	player1.xVel = 0;
	player1.yVel = 0;
};

var playerInertia = function () {
	if ((player1.xVel*1 > 0) || (player1.xVel*1 < 0)) {
		player1.xVel = player1.xVel*0.95;
	}
	if ((player1.yVel*1 > 0) || (player1.yVel*1 < 0)) {
		player1.yVel = player1.yVel*0.95;
	}
};

var playerUpdate = function () {
	player1.x += player1.xVel;
	player1.y += player1.yVel;
	playerInertia();	
};

var playerEntity = function () {
 	playerGraphic();
 	playerUpdate();
};

var playerGraphic = function () {

	var gradPoint2x = player1.x;
	var gradPoint2y = player1.y - (player1.radius);

	var grd=c2.createRadialGradient(player1.x,player1.y,player1.radius,gradPoint2x,gradPoint2y,player1.radius/2);
	grd.addColorStop(0,"rgb(0,0,255)");
	grd.addColorStop(1,"rgb(150,150,255)");

	// Fill with gradient
	c2.fillStyle=grd;

	// c2.fillStyle = rgb(
	// 	player1.colorR,
	// 	player1.colorG,
	// 	player1.colorB
	// 	);
  	c2.fillCircle(
  		player1.x,
  		player1.y,
  		player1.radius
  		);
};
