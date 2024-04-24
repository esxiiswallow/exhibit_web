let Mycanvas;


let effectArr = [];
//let selfclound1=[0,0,0,0];
let trainAlpha = [0, 0, 0, 0];

function preload(){
	imgBG = loadImage('./assets/page2/2_lightBG.png');
  train = loadImage("./assets/page2/light0/fram.png")
}

let canvasW;
let canvasH;
function setup() 
{
  canvasW = windowWidth;
  canvasH = canvasW*1.8;

  Mycanvas = createCanvas(canvasW, canvasH); 
  Mycanvas.id('Mycanvas');

  effectColor = color(255, 0, 0)
}

function draw() 
{
  //background(0);
  image(imgBG, 0, 0, canvasW, canvasH);

  //隱藏圖
  push();
  switch(trainAlpha[0]+trainAlpha[1]+trainAlpha[2]+trainAlpha[3]){
    case 0:
      tint(255, 10);
      break;
    case 1:
      tint(255, 60);
      break;
    case 2:
      tint(255, 110);
      break;
    case 3:
      tint(255, 180);
      break;
    case 4:
      tint(255, 255);
      setTimeout(function() {
        location.href = '3_thank.html';
      }, 2000);
      break;
  }
  image(train, 0, 0, canvasW, canvasH);
  pop();

  //點的位置
  push();
  noStroke();
  fill(255,255,255);
  ellipse(canvasW*0.2, canvasH*0.4, 10, 10);
  ellipse(canvasW*0.6, canvasH*0.4, 10, 10);
  ellipse(canvasW*0.3, canvasH*0.7, 10, 10);
  ellipse(canvasW*0.7, canvasH*0.7, 10, 10);
  pop();

  //點擊特效
  for (let i = effectArr.length - 1; i >= 0; i--) {
    let effect = effectArr[i];
    fill(effect.color); // 设置填充颜色
    effect.alpha -= 10; // 逐渐降低透明度
    if (effect.alpha <= 0) {
      effectArr.splice(i, 1); // 从数组中移除圆形对象
    } else {
      fill(effect.color.levels[0], effect.color.levels[1], effect.color.levels[2], effect.alpha); // 设置填充颜色和透明度
      noStroke();
      ellipse(effect.x, effect.y, 50, 50); // 绘制圆形
    }
  }
  
}


function mousePressed() {
  let thiscolor = color(255, 255, 255);
  if (mouseX < canvasW*0.25 && mouseX > canvasW*0.15 && mouseY<canvasH*0.45 && mouseY>canvasH*0.35) {
    trainAlpha[0] = 1;
    thiscolor = color(255, 0, 0);
    console.log(trainAlpha);
  }
  if (mouseX < canvasW*0.65 && mouseX > canvasW*0.55 && mouseY<canvasH*0.45 && mouseY>canvasH*0.35) {
    trainAlpha[1] = 1;
    thiscolor = color(255, 255, 0);
    console.log(trainAlpha);
  }
  if (mouseX < canvasW*0.35 && mouseX > canvasW*0.25 && mouseY<canvasH*0.75 && mouseY>canvasH*0.65) {
    trainAlpha[2] = 1;
    thiscolor = color(255, 0, 255);
    console.log(trainAlpha);
  }
  if (mouseX < canvasW*0.75 && mouseX > canvasW*0.65 && mouseY<canvasH*0.75 && mouseY>canvasH*0.65) {
    trainAlpha[3] = 1;
    thiscolor = color(0, 255, 255);
    console.log(trainAlpha);
  }

  let cloud = {
    x: mouseX,
    y: mouseY,
    color: thiscolor, // 随机生成颜色
    alpha: 255 // 初始透明度
  };
  effectArr.push(cloud);
}