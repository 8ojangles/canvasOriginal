var narratorMessage = [
  'hello',
  'Game Starts',
  'Game Intro Finishes',
  'Level 1 Intro',
  'Level 1 Play',
  'Level 1 Finish Intro',
  'Level 1 Finish Outro',
  'Inter Level',
  'Level 2 Intro',
  'Level 2 Play',
  'Level 2 Finish Intro',
  'Level 2 Finish Outro',
  'Inter Level',
  'Level 3 Intro',
  'Level 3 Play',
  'Level 3 Finish Intro',
  'Level 3 Finish Outro',
  'Game Finish Intro',
  'Game Finish Outro'
];


var narratorText = {
  x : canvas.width/2,
  y : canvas.height,
  colorR : 255,
  colorG : 255,
  colorB : 255,
  colorA : 0.3,
  xVel : 0,
  yVel : 0,
  size : 150,
  dimension : 'px',
  scaleRate : 0.1,
  message : narratorMessage[0]
}

var narTxt = narratorText;

function narratorTextUpdate() { 
  narTxt.x = narTxt.x + narTxt.xVel;
  narTxt.y = narTxt.y + narTxt.yVel;
  // narTxt.size = narTxt.size - narTxt.scaleRate;
  narratorTextBoundaryCollision();

  // introTextSize = introTextSize + introTextScaleRate;
};

function narratorTextBoundaryCollision() {
  if ((narTxt.x <= 0) || (narTxt.x >= canvas.width-(canvas.width/4))) {
    narTxt.xVel*=-1;
  };
  if ((narTxt.y <= 0 + narTxt.size) || (narTxt.y >= canvas.height)) {
    narTxt.yVel*=-1;
  };
};

function narratorTextRender() {
  c.save();
  var thisSize = (narTxt.size/2)*-1;
  if (narTxt.colorA > 0.3) {
    narTxt.colorA = narTxt.colorA - 0.01;
  }
  var thisColorBox = rgba(narTxt.colorR,narTxt.colorG,narTxt.colorB,narTxt.colorA);
  c.translate(thisSize, -450);

  // c.fillStyle = rgba(255,255,255,0.3);
  // c.fillRect(narTxt.x, narTxt.y-200, 900, 150);
  c.textAlign="center";
  c.fillStyle = thisColorBox;
  c.font = 'normal '+narTxt.size+narTxt.dimension+' arial';  
  c.fillText(narTxt.message, narTxt.x, narTxt.y);
  narratorTextUpdate();

  c.restore();
};

function narratorTextContent() {

};

