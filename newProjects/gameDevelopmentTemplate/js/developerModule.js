var devModOuterMargin = 50;
var devModInnerPad = 20;
var	devModOuterH = 100;
var devModOuterX = devModOuterMargin;
var	devModOuterY = canvas.height - (devModOuterMargin*2+devModOuterH);
var	devModOuterW = canvas.width - (devModOuterMargin*2);
 var textSize = 50;
var textPos1x = devModOuterX + devModInnerPad;
var textPos1y = devModOuterY + devModInnerPad + textSize;
var buttonSizeW = 200;
var buttonSizeH = 50;

var textPos3x = devModOuterW - (devModInnerPad*2) - (buttonSizeW*2);
var textPos3y = devModOuterY + devModInnerPad;

var textPos4x = devModOuterW - devModInnerPad - buttonSizeW;
var textPos4y = devModOuterY + devModInnerPad;

function canvas1StateButton() {
	c.fillStyle = rgba(255,255,255,0.2);
  	c.fillRect(textPos4x, textPos4y, buttonSizeW, buttonSizeH);
}

function canvas1StateResetButton() {
	c.fillStyle = rgba(255,255,255,0.3);
  	c.fillRect(textPos3x, textPos3y, buttonSizeW, buttonSizeH);
}

function canvas1StateButtonClick(event) {
	if (canvas1StateSwitch == 'off') {
		canvas1StateSwitch = 'gameStartIntro';
	} else if (canvas1StateSwitch == 'gameStartIntro') {
		canvas1StateSwitch = 'gameStartOutro';
	} else if (canvas1StateSwitch == 'gameStartOutro') {
		canvas1StateSwitch = 'level1StartIntro';
	} else if (canvas1StateSwitch == 'level1StartIntro') {
		canvas1StateSwitch = 'level1Play';
	} else if (canvas1StateSwitch == 'level1Play') {
		canvas1StateSwitch = 'level1FinishIntro';
	} else if (canvas1StateSwitch == 'level1FinishIntro') {
		canvas1StateSwitch = 'level1FinishOutro';
	} else if (canvas1StateSwitch == 'level1FinishOutro') {
		canvas1StateSwitch = 'interLevel1State';
	} else if (canvas1StateSwitch == 'interLevel1State') {
		canvas1StateSwitch = 'level2StartIntro';
	} else if (canvas1StateSwitch == 'level2StartIntro') {
		canvas1StateSwitch = 'level2Play';
	} else if (canvas1StateSwitch == 'level2Play') {
		canvas1StateSwitch = 'level2FinishIntro';
	} else if (canvas1StateSwitch == 'level2FinishIntro') {
		canvas1StateSwitch = 'level2FinishOutro';
	} else if (canvas1StateSwitch == 'level2FinishOutro') {
		canvas1StateSwitch = 'interLevel2State';
	} else if (canvas1StateSwitch == 'interLevel2State') {
		canvas1StateSwitch = 'level3StartIntro';
	} else if (canvas1StateSwitch == 'level3StartIntro') {
		canvas1StateSwitch = 'level3Play';
	} else if (canvas1StateSwitch == 'level3Play') {
		canvas1StateSwitch = 'level3FinishIntro';
	} else if (canvas1StateSwitch == 'level3FinishIntro') {
		canvas1StateSwitch = 'level3FinishOutro';
	} else if (canvas1StateSwitch == 'level3FinishOutro') {
		canvas1StateSwitch = 'gameFinishIntro';
	} else if (canvas1StateSwitch == 'gameFinishIntro') {
		canvas1StateSwitch = 'gameFinishOutro';
	} else if (canvas1StateSwitch == 'gameFinishOutro') {
		canvas1StateSwitch = 'off';
	}
	canvas1StateSwichMechanics();
	narTxt.colorA = 1;
	
};

var electroBuzzSwitch = false;

$('canvas').click(function(){
	if ((mouseX > textPos4x) && (mouseX <= textPos4x + buttonSizeW) && (mouseY > textPos4y) && (mouseY <= textPos4y + buttonSizeH)) {
		canvas1StateButtonClick();
	} 

	if ((mouseX > textPos3x) && (mouseX <= textPos3x + buttonSizeW) && (mouseY > textPos3y) && (mouseY <= textPos3y + buttonSizeH)) {
		canvas1StateSwitch = 'off';
		narratorText.message = narratorMessage[0];
	}
});

var buzzEmitter = {
	x : 500,
	y : 200,
	size : 50
}

$(document).bind('mousedown', function(){  
     electroBuzzSwitch = true;    
  });

$(document).bind('mouseup', function(){ 
     electroBuzzSwitch = false;  
  });

function developerModuleDisplay() {
	c.fillStyle = rgba(255,255,255,0.2);
  	c.fillRect(devModOuterX, devModOuterY, devModOuterW, devModOuterH);
  	// Canvas State Switch Display
  	c.fillStyle = '#0Ff';
  	c.font = 'normal 50px arial';
  	c.fillText(canvas1StateSwitch, textPos1x, textPos1y);
  	canvas1StateButton();
  	canvas1StateResetButton();
}

