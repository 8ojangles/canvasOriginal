var canvas1StateSwitch = 'off';

function canvas1StateSwichMechanics() {
  
  switch (canvas1StateSwitch)
  {
  case 'off':
  narratorText.message = narratorMessage[0];
    break;
  case 'gameStartIntro':
    narratorText.message = narratorMessage[1];
    break;
  case 'gameStartOutro':
    narratorText.message = narratorMessage[2];
    break;
  case 'level1StartIntro':
    narratorText.message = narratorMessage[3];
    break;
  case 'level1Play':
    narratorText.message = narratorMessage[4];
    break;
  case 'level1FinishIntro':
    narratorText.message = narratorMessage[5];
    break;
  case 'level1FinishOutro':
    narratorText.message = narratorMessage[6];
    break;
  case 'interLevel1State':
    narratorText.message = narratorMessage[7];
    break;
  case 'level2StartIntro':
    narratorText.message = narratorMessage[8];
    break;
  case 'level2Play':
    narratorText.message = narratorMessage[9];
    break;
  case 'level2FinishIntro':
    narratorText.message = narratorMessage[10];
    break;
    case 'level2FinishOutro':
    narratorText.message = narratorMessage[11];
    break;
  case 'interLevel2State':
    narratorText.message = narratorMessage[12];
    break;
  case 'level3StartIntro':
    narratorText.message = narratorMessage[13];
    break;
  case 'level3Play':
    narratorText.message = narratorMessage[14];
    break;
  case 'level3FinishIntro':
    narratorText.message = narratorMessage[15];
    break;
    case 'level3FinishOutro':
    narratorText.message = narratorMessage[16];
    break;

  case 'gameFinishIntro':
    narratorText.message = narratorMessage[17];
    break;
  case 'gameFinishOutro':
    narratorText.message = narratorMessage[18];
    break;
  }

}