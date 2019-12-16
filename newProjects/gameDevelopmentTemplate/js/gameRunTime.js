

/* ******************************* Draw Function *************************** */

function draw() {
// Housekeeping

// frame rate
  frameRate = 60;
// Each frame reset color overlay mode
  c.globalCompositeOperation = 'source-over';
  c2.globalCompositeOperation = 'source-over';
//clearRect  
  // c.fillStyle = rgba(0,0,0,1);
  c.clearRect(0,0,canvas.width,canvas.height);
  c2.clearRect(0,0,canvas.width,canvas.height);

narratorTextRender();

developerModuleDisplay();

if (electroBuzzSwitch) {

var buzzEmitterx = canvas.width/4;
var buzzEmittery = canvas.height/2;

var electroLineX1, electroLineX2, electroLineX3, electroLineX4, electroLineX5, electroLineY1, electroLineY2, electroLineY3, electroLineY4, electroLineY5;

if (buzzEmitterx < mouseX) {
  var electroLineDistX = mouseX - buzzEmitterx;

  var electroLineX1 = buzzEmitterx + electroLineDistX*0.15 + random(-20,20);
  var electroLineX2 = buzzEmitterx + electroLineDistX*0.3 + random(-60,60);
  var electroLineX3 = buzzEmitterx + electroLineDistX*0.45 + random(-50,50);
  var electroLineX4 = buzzEmitterx + electroLineDistX*0.6 + random(-35,35);
  var electroLineX5 = buzzEmitterx + electroLineDistX*0.75 + random(-20,20);

} else if (buzzEmitterx > mouseX) {
  var electroLineDistX = buzzEmitterx - mouseX;

  var electroLineX1 = buzzEmitterx - electroLineDistX*0.15 - random(-20,20);
  var electroLineX2 = buzzEmitterx - electroLineDistX*0.3 - random(-60,60);
  var electroLineX3 = buzzEmitterx - electroLineDistX*0.45 - random(-50,50);
  var electroLineX4 = buzzEmitterx - electroLineDistX*0.6 - random(-35,35);
  var electroLineX5 = buzzEmitterx - electroLineDistX*0.75 - random(-20,20);

}

if (buzzEmittery < mouseY) {
  var electroLineDistY = mouseY - buzzEmittery;

  var electroLineY1 = buzzEmittery + electroLineDistY*0.15 + random(-20,20);
  var electroLineY2 = buzzEmittery + electroLineDistY*0.3 + random(-60,60);
  var electroLineY3 = buzzEmittery + electroLineDistY*0.45 + random(-50,50);
  var electroLineY4 = buzzEmittery + electroLineDistY*0.6 + random(-35,35);
  var electroLineY5 = buzzEmittery + electroLineDistY*0.9 + random(-20,20);

} else if (buzzEmittery > mouseY) {
  var electroLineDistY = buzzEmittery - mouseY;

  var electroLineY1 = buzzEmittery - electroLineDistY*0.15 - random(-20,20);
  var electroLineY2 = buzzEmittery - electroLineDistY*0.3 - random(-60,60);
  var electroLineY3 = buzzEmittery - electroLineDistY*0.45 - random(-50,50);
  var electroLineY4 = buzzEmittery - electroLineDistY*0.6 - random(-35,35);
  var electroLineY5 = buzzEmittery - electroLineDistY*0.9 - random(-20,20);
}


  c.fillStyle = rgba(255,255,255,1);
  c.fillCircle(buzzEmitterx,buzzEmittery,buzzEmitter.size);
  c.fillCircle(mouseX,mouseY,buzzEmitter.size/4);

  // c.fillCircle(electroLineX3,electroLineY3,buzzEmitter.size);

  c.strokeStyle = rgba(100,100,255,1);
  c.lineWidth = random(3,20);

  c.beginPath();
  c.moveTo(buzzEmitterx,buzzEmittery);
  c.lineTo(electroLineX1,electroLineY1);
  c.lineTo(electroLineX2,electroLineY2);
  c.lineTo(electroLineX3,electroLineY3);
  c.lineTo(electroLineX4,electroLineY4);
  c.lineTo(electroLineX5,electroLineY5);
  c.lineTo(mouseX,mouseY);
  c.stroke();

  c.strokeStyle = rgba(255,255,255,1);
  c.lineWidth = 4;

  c.beginPath();
  c.moveTo(buzzEmitterx,buzzEmittery);
  c.lineTo(electroLineX1,electroLineY1);
  c.lineTo(electroLineX2,electroLineY2);
  c.lineTo(electroLineX3,electroLineY3);
  c.lineTo(electroLineX4,electroLineY4);
  c.lineTo(electroLineX5,electroLineY5);
  c.lineTo(mouseX,mouseY);
  c.stroke();

}

counter++;

/* **************** Close Draw Function ******************** */
}
/* **************** Close Draw Function ******************** */