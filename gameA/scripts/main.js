let Mycanvas;

let cardNumbers = [];
let open = [false, false, false, false, false, false, false, false, false]

function preload(){
  title = loadImage("./assets/page0/title.png");
  cardback = loadImage("./assets/page0/cardback.png");
	sp10Off = loadImage("./assets/page0/10off.png");
  sp20Off = loadImage("./assets/page0/20off.png");
  sp30Off = loadImage("./assets/page0/30off.png");

  gameANote = loadImage("./assets/page0/gameANote.png");

  pointFormUP = loadImage("./assets/page0/pointFormUP.png");
  pointFormDW = loadImage("./assets/page0/pointFormDW.png");

  star = loadImage("./assets/page0/star.png")

  //imgBG = loadImage('./assets/page0/2_lightBG.png');
  //train = loadImage("./assets/page0/light0/fram.png")
}

let canvasW;
let canvasH;
function setup() 
{
  canvasW = windowWidth;
  canvasH = canvasW*1.6;

  Mycanvas = createCanvas(canvasW, canvasH); 
  Mycanvas.id('Mycanvas');
  imageMode(CENTER);

  //排列數字
  for (let i = 1; i <= 9; i++) {
    cardNumbers.push(i);
  }
  shuffle(cardNumbers, true);
  console.log(cardNumbers);

  cardsize = [canvasW*0.2, canvasW*0.2];

  card1pos = [canvasW*0.47, canvasW*0.7];
  card2pos = [canvasW*0.67, canvasW*0.7];
  card3pos = [canvasW*0.87, canvasW*0.7];
  card4pos = [canvasW*0.47, canvasW*0.9];
  card5pos = [canvasW*0.67, canvasW*0.9];
  card6pos = [canvasW*0.87, canvasW*0.9];
  card7pos = [canvasW*0.47, canvasW*1.1];
  card8pos = [canvasW*0.67, canvasW*1.1];
  card9pos = [canvasW*0.87, canvasW*1.1];

  pointFormUP.resize(canvasW*0.4, 0);
  pointFormDW.resize(canvasW*0.4, 0);

  let resetBut = select("#resetBut");
  resetBut.mousePressed(reset);
}

//stage設定
let playStage = true;
let countStage = false;
let finalStage = false;

let firstGift = 0;
let secendGift = 0;
let thirdGift = 0;
let gift=0;
let wait=0;
let star1X;
let star2X;
let star3X;

function draw() 
{
  if(playStage){
    background(255, 187, 254);
    image(title, canvasW*0.5, canvasW*0.1, canvasW*1, canvasW*0.2);
    image(gameANote, canvasW*0.5, canvasW*0.4, canvasW, canvasW*0.3);
    image(pointFormDW,canvasW*0.19,canvasW*0.83);

    starLong(canvasW*0.05, canvasW*0.65, canvasW*0.2, canvasW*0.75, firstGift);
    starLong(canvasW*0.05, canvasW*0.78, canvasW*0.2, canvasW*0.88, secendGift);
    starLong(canvasW*0.05, canvasW*0.91, canvasW*0.2, canvasW*1.01, thirdGift);

    image(pointFormUP,canvasW*0.19,canvasW*0.83);
    image(cardback, card1pos[0], card1pos[1], cardsize[0], cardsize[1]);
    if(open[0]){
      push();
      //fill(255);
      //textSize(canvasW*0.1);
      //text(cardNumbers[0], card1pos[0], card1pos[1]);
      showColor(cardNumbers[0], card1pos[0], card1pos[1]);
      pop();
    }
    image(cardback, card2pos[0], card2pos[1], cardsize[0], cardsize[1]);
    if(open[1]){
      push();
      //fill(255);
      //textSize(canvasW*0.1);
      showColor(cardNumbers[1], card2pos[0], card2pos[1]);
      pop();
    }
    image(cardback, card3pos[0], card3pos[1], cardsize[0], cardsize[1]);
    if(open[2]){
      push();
      //fill(255);
      //textSize(canvasW*0.1);
      showColor(cardNumbers[2], card3pos[0], card3pos[1]);
      pop();
    }
    image(cardback, card4pos[0], card4pos[1], cardsize[0], cardsize[1]);
    if(open[3]){
      push();
      //fill(255);
      //textSize(canvasW*0.1);
      showColor(cardNumbers[3], card4pos[0], card4pos[1]);
      pop();
    }
    image(cardback, card5pos[0], card5pos[1], cardsize[0], cardsize[1]);
    if(open[4]){
      push();
      //fill(255);
      //textSize(canvasW*0.1);
      showColor(cardNumbers[4], card5pos[0], card5pos[1]);
      pop();
    }
    image(cardback, card6pos[0], card6pos[1], cardsize[0], cardsize[1]);
    if(open[5]){
      push();
      //fill(255);
      //textSize(canvasW*0.1);
      showColor(cardNumbers[5], card6pos[0], card6pos[1]);
      pop();
    }
    image(cardback, card7pos[0], card7pos[1], cardsize[0], cardsize[1]);
    if(open[6]){
      push();
      //fill(255);
      //textSize(canvasW*0.1);
      showColor(cardNumbers[6], card7pos[0], card7pos[1]);
      pop();
    }
    image(cardback, card8pos[0], card8pos[1], cardsize[0], cardsize[1]);
    if(open[7]){
      push();
      //fill(255);
      //textSize(canvasW*0.1);
      showColor(cardNumbers[7], card8pos[0], card8pos[1]);
      pop();
    }
    image(cardback, card9pos[0], card9pos[1], cardsize[0], cardsize[1]);
    if(open[8]){
      push();
      //fill(255);
      //textSize(canvasW*0.1);
      showColor(cardNumbers[8], card9pos[0], card9pos[1]);
      pop();
    }
  }
  if(countStage){
    //console.log("count Stage")
    //console.log(gift);
    if(wait<60){
      wait++;
    }else{
      finalStage = true;
      resetBut.style.display = "block";
    }
  }
  if(finalStage){
    switch(gift){
      case 1:
        image(sp10Off, canvasW*0.5, canvasH*0.5, canvasW*0.6, canvasW*0.6);
        break;
      case 2:
        image(sp20Off, canvasW*0.5, canvasH*0.5, canvasW*0.6, canvasW*0.6);
        break;
      case 3:
        image(sp30Off, canvasW*0.5, canvasH*0.5, canvasW*0.6, canvasW*0.6);
        break;
    }
  }

  //update
  if(firstGift==3||secendGift==3||thirdGift==3){
    countStage = true;
    if(firstGift==3){
      gift = 1;
    }else if(secendGift ==3){
      gift = 2;
    }
    else if(thirdGift ==3){
      gift = 3;
    }
  }
}


function mousePressed() {
  if(!countStage){
      if (mouseX < card1pos[0] + cardsize[0]*0.4 && mouseX > card1pos[0] - cardsize[0]*0.4 && 
      mouseY < card1pos[1] + cardsize[1]*0.4 && mouseY > card1pos[1] - cardsize[1]*0.4) {
      if(!open[0]){
        console.log(cardNumbers[0]);
        countPoint(cardNumbers[0]);
        open[0] = true;
      }
    }
    if (mouseX < card2pos[0] + cardsize[0]*0.4 && mouseX > card2pos[0] - cardsize[0]*0.4 && 
      mouseY < card2pos[1] + cardsize[1]*0.4 && mouseY > card2pos[1] - cardsize[1]*0.4) {
      if(!open[1]){
        console.log(cardNumbers[1]);
        countPoint(cardNumbers[1]);
        open[1] = true;
      }
    }
    if (mouseX < card3pos[0] + cardsize[0]*0.4 && mouseX > card3pos[0] - cardsize[0]*0.4 && 
      mouseY < card3pos[1] + cardsize[1]*0.4 && mouseY > card3pos[1] - cardsize[1]*0.4) {
      if(!open[2]){
        console.log(cardNumbers[2]);
        countPoint(cardNumbers[2]);
        open[2] = true;
      }
    }
    if (mouseX < card4pos[0] + cardsize[0]*0.4 && mouseX > card4pos[0] - cardsize[0]*0.4 && 
      mouseY < card4pos[1] + cardsize[1]*0.4 && mouseY > card4pos[1] - cardsize[1]*0.4) {
      if(!open[3]){
        console.log(cardNumbers[3]);
        countPoint(cardNumbers[3]);
        open[3] = true;
      }
    }
    if (mouseX < card5pos[0] + cardsize[0]*0.4 && mouseX > card5pos[0] - cardsize[0]*0.4 && 
      mouseY < card5pos[1] + cardsize[1]*0.4 && mouseY > card5pos[1] - cardsize[1]*0.4) {
      if(!open[4]){
        console.log(cardNumbers[4]);
        countPoint(cardNumbers[4]);
        open[4] = true;
      }
    }
    if (mouseX < card6pos[0] + cardsize[0]*0.4 && mouseX > card6pos[0] - cardsize[0]*0.4 && 
      mouseY < card6pos[1] + cardsize[1]*0.4 && mouseY > card6pos[1] - cardsize[1]*0.4) {
      if(!open[5]){
        console.log(cardNumbers[5]);
        countPoint(cardNumbers[5]);
        open[5] = true;
      }
    }
    if (mouseX < card7pos[0] + cardsize[0]*0.4 && mouseX > card7pos[0] - cardsize[0]*0.4 && 
      mouseY < card7pos[1] + cardsize[1]*0.4 && mouseY > card7pos[1] - cardsize[1]*0.4) {
      if(!open[6]){
        console.log(cardNumbers[6]);
        countPoint(cardNumbers[6]);
        open[6] = true;
      }
    }
    if (mouseX < card8pos[0] + cardsize[0]*0.4 && mouseX > card8pos[0] - cardsize[0]*0.4 && 
      mouseY < card8pos[1] + cardsize[1]*0.4 && mouseY > card8pos[1] - cardsize[1]*0.4) {
      if(!open[7]){
        console.log(cardNumbers[7]);
        countPoint(cardNumbers[7]);
        open[7] = true;
      }
    }
    if (mouseX < card9pos[0] + cardsize[0]*0.4 && mouseX > card9pos[0] - cardsize[0]*0.4 && 
      mouseY < card9pos[1] + cardsize[1]*0.4 && mouseY > card9pos[1] - cardsize[1]*0.4) {
      if(!open[8]){
        console.log(cardNumbers[8]);
        countPoint(cardNumbers[8]);
        open[8] = true;
      }
    }
  }

/*
  let cloud = {
    x: mouseX,
    y: mouseY,
    color: thiscolor, // 随机生成颜色
    alpha: 255 // 初始透明度
  };
  effectArr.push(cloud);
*/
}

function showColor(number, x, y){
  switch(number){
    case 1:
    case 2:
    case 3:
      image(sp10Off,x, y ,cardsize[0], cardsize[1]);
      break;
    case 4:
    case 5:
    case 6:
      image(sp20Off,x, y ,cardsize[0], cardsize[1]);
      break;
    case 7:
    case 8:
    case 9:
      image(sp30Off,x, y ,cardsize[0], cardsize[1]);
      break;
  }
}

function countPoint(number){
  switch(number){
    case 1:
    case 2:
    case 3:
      firstGift++;
      break;
    case 4:
    case 5:
    case 6:
      secendGift++;
      break;
    case 7:
    case 8:
    case 9:
      thirdGift++;
      break;
  }
}

function starLong(x1, y1, x2, y2, long){
  let starWidth;
  push();
  imageMode(CORNERS);
  switch(long){
   case 0:
    starWidth = x1 + canvasW*0.15;
    break;
   case 1:
    starWidth = x1 + canvasW*0.2;
    break;
   case 2:
    starWidth = x1 + canvasW*0.25;
    break;
   case 3:
    starWidth = x1 + canvasW*0.3;
    break;
  }
  image(star, x1, y1, starWidth, y2);
  pop();
}

function reset(){
  resetBut.style.display = "none";
  open = [false, false, false, false, false, false, false, false, false]
  shuffle(cardNumbers, true);
  console.log(cardNumbers);
  playStage = true;
  countStage = false;
  finalStage = false;
  firstGift = 0;
  secendGift = 0;
  thirdGift = 0;
  gift=0;
  wait=0;
}