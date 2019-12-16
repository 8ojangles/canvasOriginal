



function createBackGround () { 

      // for(var i=0; i<=floorBlocks; i++) {
      //   xResult=bgSpBl.width*i;
      //   c.fillStyle = rgba(bgSpBl.ColorR,bgSpBl.ColorG,bgSpBl.ColorB,bgSpBl.ColorA);
      //   c.fillRect(xResult,floor+bgSpBl.height*3,bgSpBl.width,bgSpBl.height);
      //   };

        c.fillStyle = rgba(bgSpBl.ColorR,bgSpBl.ColorG,bgSpBl.ColorB,bgSpBl.ColorA);
        c.fillRect(0,floor+bgSpBl.height*3,canvasW,bgSpBl.height);

      // for(var i=0; i<floor2Blocks; i++) {
      //   xResult=bgSpBl.width*i;
      //   c.fillStyle = rgba(bgSpBl.ColorR,bgSpBl.ColorG,bgSpBl.ColorB,bgSpBl.ColorA);
      //   c.fillRect(xResult,floor-floorLevel1,bgSpBl.width,bgSpBl.height);
      //   };

      c.fillStyle = rgba(bgSpBl.ColorR,bgSpBl.ColorG,bgSpBl.ColorB,bgSpBl.ColorA);
      c.fillRect(0,floor-floorLevel1,canvasW/2,bgSpBl.height);

      // for(var i=0; i<floor2Blocks; i++) {
      // xResult=bgSpBl.width*i+(canvasW/2);
      // c.fillStyle = rgba(bgSpBl.ColorR,bgSpBl.ColorG,bgSpBl.ColorB,bgSpBl.ColorA);
      // c.fillRect(xResult,floor-floorLevel2,bgSpBl.width,bgSpBl.height);
      // };

      c.fillStyle = rgba(bgSpBl.ColorR,bgSpBl.ColorG,bgSpBl.ColorB,bgSpBl.ColorA);
      c.fillRect(canvasW/2,floor-floorLevel2,canvasW/2,bgSpBl.height);

      // for(var i=0; i<floor2Blocks; i++) {
      //   xResult=bgSpBl.width*i;
      //   c.fillStyle = rgba(bgSpBl.ColorR,bgSpBl.ColorG,bgSpBl.ColorB,bgSpBl.ColorA);
      //   c.fillRect(xResult,floor-floorLevel3,bgSpBl.width,bgSpBl.height);
      //   };

      c.fillStyle = rgba(bgSpBl.ColorR,bgSpBl.ColorG,bgSpBl.ColorB,bgSpBl.ColorA);
      c.fillRect(0,floor-floorLevel3,canvasW/2,bgSpBl.height);

  };

