let canvasW;
let canvasH;

let butSizeX;
let butSizeY;

let game1ButX;
let game1ButY;

let game2ButX;
let game2ButY;

let butDown=[false, false, false, false, false, false, false];

let button1;
let button2;

function preload() {
  title = loadImage("./assets/page1/title.png");
  but1img = loadImage("./assets/page1/game1but.png");
  but1imgDown = loadImage("./assets/page1/game1butDown.png");
  but2img = loadImage("./assets/page1/game2but.png");
  but2imgDown = loadImage("./assets/page1/game2butDown.png");
  notokimg = loadImage("./assets/page1/notok.png");
  notokimgDown = loadImage("./assets/page1/notokDown.png");
}

let Mycanvas;
function setup() {
  canvasW = windowWidth;
  canvasH = canvasW*1.6;
  Mycanvas = createCanvas(canvasW, canvasH);
  Mycanvas.id("Mycanvas");
  imageMode(CENTER);

  //position
  game1ButX = canvasW*0.25;
  game1ButY = canvasW*0.4;

  game2ButX = canvasW*0.75;
  game2ButY = canvasW*0.4;

  game3ButX = canvasW*0.25;
  game3ButY = canvasW*0.7;

  game4ButX = canvasW*0.75;
  game4ButY = canvasW*0.7;

  game5ButX = canvasW*0.25;
  game5ButY = canvasW*1;

  game6ButX = canvasW*0.75;
  game6ButY = canvasW*1;


  butSizeX = canvasW*0.4;
  butSizeY = canvasW*0.17;

  //resize
  title.resize(canvasW*0.8,0);

  //set but
  button1 = select("#game1");
  button1.mousePressed(but1Click);
}

function draw() {
  background(255, 191, 107);
  image(title,canvasW*0.5, canvasW*0.1);
  //but1
  if(butDown[1]){
    image(but1imgDown, game1ButX, game1ButY, butSizeX, butSizeY);
  }
  else{
    image(but1img, game1ButX, game1ButY, butSizeX, butSizeY);
  }

  //but2
  if(butDown[2]){
    image(but2imgDown, game2ButX, game2ButY, butSizeX, butSizeY);
  }
  else{
    image(but2img, game2ButX, game2ButY, butSizeX, butSizeY);
  }

  //but3
  if(butDown[3]){
    image(notokimgDown, game3ButX, game3ButY, butSizeX, butSizeY);
  }
  else{
    image(notokimg, game3ButX, game3ButY, butSizeX, butSizeY);
  }

  //but4
  if(butDown[4]){
    image(notokimgDown, game4ButX, game4ButY, butSizeX, butSizeY);
  }
  else{
    image(notokimg, game4ButX, game4ButY, butSizeX, butSizeY);
  }

  //but5
  if(butDown[5]){
    image(notokimgDown, game5ButX, game5ButY, butSizeX, butSizeY);
  }
  else{
    image(notokimg, game5ButX, game5ButY, butSizeX, butSizeY);
  }

  //but6
  if(butDown[6]){
    image(notokimgDown, game6ButX, game6ButY, butSizeX, butSizeY);
  }
  else{
    image(notokimg, game6ButX, game6ButY, butSizeX, butSizeY);
  }
}

function mouseMoved(){
  if(mouseX >= game1ButX-butSizeX*0.5 && mouseX <= game1ButX+butSizeX*0.5 &&
     mouseY >= game1ButY-butSizeY*0.5 && mouseY <= game1ButY+butSizeY*0.5){
    //image(but1imgDown, game1ButX, game1ButY, butSizeX, butSizeY);
    butDown[1] = true;
  }
  else{
    butDown[1] = false;
  }

  if(mouseX >= game2ButX-butSizeX*0.5 && mouseX <= game2ButX+butSizeX*0.5 &&
     mouseY >= game2ButY-butSizeY*0.5 && mouseY <= game2ButY+butSizeY*0.5){
    //image(but1imgDown, game1ButX, game1ButY, butSizeX, butSizeY);
    butDown[2] = true;
  }
  else{
    butDown[2] = false;
  }

  if(mouseX >= game3ButX-butSizeX*0.5 && mouseX <= game3ButX+butSizeX*0.5 &&
     mouseY >= game3ButY-butSizeY*0.5 && mouseY <= game3ButY+butSizeY*0.5){
    //image(but1imgDown, game1ButX, game1ButY, butSizeX, butSizeY);
    butDown[3] = true;
  }
  else{
    butDown[3] = false;
  }

  if(mouseX >= game4ButX-butSizeX*0.5 && mouseX <= game4ButX+butSizeX*0.5 &&
     mouseY >= game4ButY-butSizeY*0.5 && mouseY <= game4ButY+butSizeY*0.5){
    //image(but1imgDown, game1ButX, game1ButY, butSizeX, butSizeY);
    butDown[4] = true;
  }
  else{
    butDown[4] = false;
  }
  if(mouseX >= game5ButX-butSizeX*0.5 && mouseX <= game5ButX+butSizeX*0.5 &&
     mouseY >= game5ButY-butSizeY*0.5 && mouseY <= game5ButY+butSizeY*0.5){
    //image(but1imgDown, game1ButX, game1ButY, butSizeX, butSizeY);
    butDown[5] = true;
  }
  else{
    butDown[5] = false;
  }

  if(mouseX >= game6ButX-butSizeX*0.5 && mouseX <= game6ButX+butSizeX*0.5 &&
     mouseY >= game6ButY-butSizeY*0.5 && mouseY <= game6ButY+butSizeY*0.5){
    //image(but1imgDown, game1ButX, game1ButY, butSizeX, butSizeY);
    butDown[6] = true;
  }
  else{
    butDown[6] = false;
  }
}

function but1Click(){
  setTimeout(function() {
    location.href = '3_thank.html';
  }, 1000);
}
