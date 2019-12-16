/* *************************Button functions *********************** */



// button 1 (stars)
$('.playStopBtn').click(function () {
  canvas1StateButtonClick();
  preventDefault();
  return false;
});

// button 1 (smoke)
$('.action1Btn').click(function () {
  playing2 = !playing2;
  if (playing2) {
    $(this).parent().removeClass('on off').addClass('on');
  } else if (!playing2){
    $(this).parent().removeClass('on off').addClass('off');
  }
  preventDefault();
  return false;
});

// init button3 (wind)
$('.action2Btn').parent().addClass('off');
//wind variables
var windStrength = 0;
var windAcceleration = 1;

//button 3 (wind) function
$('.action2Btn').click(function(){
  if ($(this).parent().hasClass('off')) 
    {
      $(this).parent().removeClass('on off').addClass('on');
    } else if ($(this).parent().hasClass('on')) 
      {
    $(this).parent().removeClass('on off').addClass('off');
    }
});


var keyRuntime = function () {

  if (upKeyPress) {
  playerAttributes.yVel = playerAttributes.yVel + -0.5;
  };

  if (downKeyPress) {
  playerAttributes.yVel = playerAttributes.yVel + 0.5;
  };

  if (leftKeyPress) {
  playerAttributes.xVel = playerAttributes.xVel + -0.5;
  };

  if (rightKeyPress) {
  playerAttributes.xVel = playerAttributes.xVel + 0.5;
  };

};

var upKeyPress = false;
var downKeyPress = false;
var leftKeyPress = false;
var rightKeyPress = false;
var fireKeyPress = false;


// up key
$(document).bind('keydown', 'w', function(){  
     upKeyPress = true;    
  });

$(document).bind('keyup', 'w', function(){ 
     upKeyPress = false;  
  });

// down key
$(document).bind('keydown', 's', function(){  
     downKeyPress = true;    
  });

$(document).bind('keyup', 's', function(){ 
     downKeyPress = false;  
  });

// left key
$(document).bind('keydown', 'a', function(){  
     leftKeyPress = true;    
  });

$(document).bind('keyup', 'a', function(){ 
     leftKeyPress = false;  
  });

// right key
$(document).bind('keydown', 'd', function(){  
     rightKeyPress = true;    
  });

$(document).bind('keyup', 'd', function(){ 
     rightKeyPress = false;  
  });

$(document).bind('keydown', 'r', function(){
     playing = true;    
  });

$(document).bind('keyup', 'r', function(){ 
     playing = false;  
  });


