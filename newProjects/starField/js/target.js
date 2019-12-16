
var targetAttributes = {
	width : 100,
	height : 100,
	radius : 20,
	colorR : 100,
	colorG : 100,
	colorB : 255,
	color2R : 200,
	color2G : 200,
	color2B : 255,
	colorA : 1,
	x : mouseX,
	y : mouseY
};

var target = targetAttributes;

var targetUpdate = function () {
	target.x = mouseX;
	target.y = mouseY;	
};


var targetEntity = function () {
 	targetGraphic();
 	targetUpdate();
};

var targetGraphic = function () {

	c2.lineWidth = 5;

	c2.strokeStyle = rgb(
		target.colorR,
		target.colorG,
		target.colorB
		);

  	c2.strokeCircle(
  		target.x,
  		target.y,
  		target.radius
  		);

  	

  	var diameter = target.radius*2;

  	var targetLine1A = target.y - diameter;
  	var targetLine1B = target.y + diameter;
  	var targetLine2A = target.x - diameter;
  	var targetLine2B = target.x + diameter;
	
	c2.strokeStyle = rgb(
		target.color2R,
		target.color2G,
		target.color2B
		);
	c2.lineWidth = 2;

  	c2.beginPath();
      c2.moveTo(target.x, targetLine1A);
      c2.lineTo(target.x, targetLine1B);
      c2.stroke();

      c2.beginPath();
      c2.moveTo(targetLine2A, target.y);
      c2.lineTo(targetLine2B, target.y);
      c2.stroke();
};
