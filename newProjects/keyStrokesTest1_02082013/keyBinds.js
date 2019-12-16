// Key Press Actions - Player Keys 

// Up Button Bind

  $(document).bind('keydown', 'w', function(){

    upKeyOn = true;

  });

  $(document).bind('keyup', 'w', function(){
    upKeyOn = false; 

  });

  // Down Button Bind

  $(document).bind('keydown', 's', function(){

    if (downKeyOn) {
      return false;
    } else {

      if (curFloor >= floor) {
        return false;
      } else {
        
        downKeyOn = true;
      }

  }

  });

  $(document).bind('keyup', 's', function(){

    downKeyOn = false;

  });

  // Left Button Bind

  $(document).bind('keydown', 'a', function(){

    if (leftKeyOn) {
      return false;
    } else {
      leftKeyOn = true;
      playerSprite.xVel-=1;
      faceLeft = true;
      faceRight = false;
      
    };

  });

  $(document).bind('keyup', 'a', function(){

    if (!leftKeyOn) {
      return false;
    } else {
      leftKeyOn = false;
    };

  });

  // Right Button Bind

  $(document).bind('keydown', 'd', function(){

    if (rightKeyOn) {
      return false;
    } else {
      rightKeyOn = true;
      faceLeft = false;
      faceRight = true;
      
    };
  });

  $(document).bind('keyup', 'd', function(){

    if (rightKeyOn) {
      rightKeyOn = false;
    } else {
      return false;
    };
  });

  // Jump Button Bind



  $(document).bind('keydown', 'space', function(){
    if (jumpKeyOn) {
      jumpKeyOn = false;
      return false;
    } else {
      if (jumpDelay) {
        return false;
      } else {
        jumpKeyOn = true;
        Ps.yVel+= -30;
        }
    }
  });

  $(document).bind('keyup', 'space', function(){

    if (jumpKeyOn) {
      jumpKeyOn = false;
    };

  });

  // Shoot Key Bind
 
   $(document).bind('keydown', 'k', function(){

      shootKeyOn = true;


  });

  $(document).bind('keyup', 'k', function(){

      shootKeyOn = false;

  });

  $(document).bind('keydown', 'r', function(){
    enemyReset();
    playerReset();
    curFloor = floor;
      resetKeyOn = true;


  });

  $(document).bind('keyup', 'r', function(){

      resetKeyOn = false;

  });