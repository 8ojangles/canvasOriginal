$(document).ready(function(){

// game Front End using finite state machine principles for control

 
var gameState = null;
var pastGameState = null;
var currState = null;

var introFade_speed = 10000;

updateGameState("start");


function updateGameState(gameState){

	switch(gameState)
		{
		case "start":
            initStartAnim();
            break;
		case "page1":
            initStartOutroAnim();
            initPage1Anim();
            break;
		case "page2":
            initPage1OutroAnim();
            initPage2Anim();
            break;
		case "page3":
            initStartAnim();
            break;
		// default:
		//   return false;
		}
	}

	currState = gameState;

// function pastStatePush() {

// };

// function initStateDivs() {

// };

function initStartAnim() {
	$('#vingetteBg, #vingetteBg2').removeClass('outro intro staticOn staticOff').addClass('staticOn');
	$('#start, #background, #stateSwitchBtns, #vingetteGrp, #gameTitle').removeClass('outro intro staticOn staticOff').addClass('intro');
	

	setTimeout(function(){
			$('#start, #background, #stateSwitchBtns, #vingetteGrp, #gameTitle').removeClass('outro intro staticOn staticOff').addClass('staticOn');
	},introFade_speed);
} // end initStartAnim

function initStartOutroAnim() {
	$('#start,#background,#stateSwitchBtns,#gameTitle').removeClass('outro intro staticOn staticOff').addClass('outro');
	setTimeout(function(){
			$('#start,#background,#stateSwitchBtns,#gameTitle').removeClass('outro intro staticOn staticOff').addClass('staticOff');
	},introFade_speed);
} // end initStartAnim

function initPage1Anim() {
	$('#background2').removeClass('outro intro staticOn staticOff').addClass('intro');
	setTimeout(function(){
			$('#background2').removeClass('outro intro staticOn staticOff').addClass('staticOn');
		
	},introFade_speed);
} // end initStartAnim

function initPage1OutroAnim() {
	$('#background2').removeClass('outro intro staticOn staticOff').addClass('outro');
	setTimeout(function(){
			$('#background2').removeClass('outro intro staticOn staticOff').addClass('staticOff');
		
	},introFade_speed);
} // end initStartAnim

function initPage2Anim() {
	$('#background3').removeClass('outro intro staticOn staticOff').addClass('intro');
	setTimeout(function(){
			$('#background3').removeClass('outro intro staticOn staticOff').addClass('staticOn');
		
	},introFade_speed);
} // end initStartAnim

function initPage2OutroAnim() {
	$('#background3').removeClass('outro intro staticOn staticOff').addClass('outro');
	setTimeout(function(){
			$('#background3').removeClass('outro intro staticOn staticOff').addClass('staticOff');
		
	},introFade_speed);
} // end initStartAnim

	



$('.playSwitch').click(function(event){
	var currState = gameState;
	
	gameState="page1";
	updateGameState(gameState);
	return false;
	event.preventDefault();

});

$('.continueSwitch').click(function(event){
	var currState = gameState;
	
	gameState="page2";
	updateGameState(gameState);
	return false;
	event.preventDefault();

});


}); // End Document Ready Function