let currentIndex = 0;
let totalImages = 4;
let button1;
let button2;
let buttonok;

let canvasW;
let canvasH;

let images = [];
let name = [];

function preload() {
  // 预加载图片
  images[0] = loadImage("assets/page1/fruit/0.png");
  images[1] = loadImage("assets/page1/fruit/1.png");
  images[2] = loadImage("assets/page1/fruit/2.png");
  images[3] = loadImage("assets/page1/fruit/3.png");

  name[0] = loadImage("assets/page1/name/0.png");
  name[1] = loadImage("assets/page1/name/1.png");
  name[2] = loadImage("assets/page1/name/2.png");
  name[3] = loadImage("assets/page1/name/3.png");
}

let Mycanvas;
function setup() {
  canvasW = windowWidth;
  canvasH = canvasW;
  Mycanvas = createCanvas(canvasW, canvasH);
  Mycanvas.id("Mycanvas");
  Mycanvas.position(0, canvasW*0.27);
  Mycanvas.style("z-index", "1");

  images[0].resize(canvasW, 0);
  images[1].resize(canvasW, 0);
  images[2].resize(canvasW, 0);
  images[3].resize(canvasW, 0);

  //name[0].resize(canvasW*0.4,0);
  //name[1].resize(canvasW*0.4,0);
  //name[2].resize(canvasW*0.4,0);
  //name[3].resize(canvasW*0.4,0);

  button1 = select('#left');
  button1.mousePressed(changeImageleft);
  button2 = select('#right');
  button2.mousePressed(changeImageright);
  buttonok = select("#ok");
  buttonok.mousePressed(goColor)

  localStorage.setItem("GameA_icon_number",0);
}

function draw() {
  //background(255);
  // 将当前图片显示在画布中央
  imageMode(CENTER);
  clear();
  image(images[currentIndex], width*0.5, height*0.45);
  //image(name[currentIndex], width*0.5, height*0.94);
}

function changeImageleft() {
  // 切换图片
  currentIndex = (currentIndex + 3) % totalImages;
  localStorage.setItem("GameA_icon_number",currentIndex);
  console.log(currentIndex);
}
function changeImageright() {
  // 切换图片
  currentIndex = (currentIndex + 1) % totalImages;
  localStorage.setItem("GameA_icon_number",currentIndex);
  console.log(currentIndex);
}
function goColor(){
  location.href = '2_light.html';
  //localStorage.setItem("GameA_icon_number",currentIndex);
  /*
  if(currentIndex==0){
   location.href = '2_light0.html';
  }
  if(currentIndex==1){
    location.href = '2_light1.html';
  }
  if(currentIndex==2){
    location.href = '2_light2.html';
  }
  if(currentIndex==3){
    location.href = '2_light3.html';
  }
  */
}
