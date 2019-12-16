$(document).ready(function(){


var clearLvls = null;
var lvl1 = null;
var lvl2 = null;
var both = null;
var lvl1ClearList = $('.nav-global-lvl1');
var lvl2ClearList = $('.nav-global-lvl2');

$('.nav-global-lvl1').click(function(){
	if ($(this).hasClass('locked') ){
		lvl1ClearList.removeClass('locked unlocked').addClass('unlocked');
	}
	if ($(this).hasClass('unlocked') ){
		lvl1ClearList.removeClass('locked unlocked').addClass('unlocked');
		$(this).removeClass('locked unlocked').addClass('locked');
	}

});

$('.nav-global-lvl2').click(function(){

	if ($(this).hasClass('locked') ){
		lvl2ClearList.removeClass('locked unlocked').addClass('unlocked');
	}
	else{
		lvl2ClearList.removeClass('locked unlocked').addClass('unlocked');
		$(this).removeClass('locked unlocked').addClass('locked');
	}

});

// });




// $('#continue-game').click(function(e){
// 	$('#masterFrameBg-add').toggleClass('on off');

// 	var continueGameButton = $('#continue-game');

// 	continueGameButton.toggleClass('locked unlocked').parent().parent().toggleClass('locked unlocked');

// 	e.preventDefault();
// 	return false;
// });



});