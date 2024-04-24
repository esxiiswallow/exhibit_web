let gameA;
let gameB;
let gameC;
let gameD;
let gameE;
let gamePointColors = [];

function preload(){
    imgBG = loadImage('./assets/page3/BG.png');
    localStorage.setItem("GameA_over",1);
    gameA = localStorage.getItem("GameA_over")
    gameB = localStorage.getItem("GameB_over");
    gameC = localStorage.getItem("GameC_over");
    gameD = localStorage.getItem("GameD_over");
    gameE = localStorage.getItem("GameE_over");
    console.log(gameA, gameB, gameC, gameD, gameE)
}

function setup(){

    canvasW = windowWidth;
    canvasH = canvasW*1.8;

    Mycanvas = createCanvas(canvasW, canvasH); 
    Mycanvas.id('Mycanvas');

    if(gameA==1){
        gamePointColors[0] = color(100, 100, 100);
    }else{
        gamePointColors[0] = color(250, 250, 250);
    }

    if(gameB==1){
        gamePointColors[1] = color(100, 100, 100);
    }else{
        gamePointColors[1] = color(250, 250, 250);
    }

    if(gameC==1){
        gamePointColors[2] = color(100, 100, 100);
    }else{
        gamePointColors[2] = color(250, 250, 250);
    }

    if(gameD==1){
        gamePointColors[3] = color(100, 100, 100);
    }else{
        gamePointColors[3] = color(250, 250, 250);
    }

    if(gameE==1){
        gamePointColors[4] = color(100, 100, 100);
    }else{
        gamePointColors[4] = color(250, 250, 250);
    }
}

function draw(){
    image(imgBG, 0, 0, canvasW, canvasH);
    noStroke();
    push();
    fill(gamePointColors[0]);
    ellipse(canvasW*0.2, canvasH*0.4, 50, 50);
    pop();
    push();
    fill(gamePointColors[1]);
    ellipse(canvasW*0.8, canvasH*0.4, 50, 50);
    pop();
    push();
    fill(gamePointColors[2]);
    ellipse(canvasW*0.2, canvasH*0.8, 50, 50);
    pop();
    push();
    fill(gamePointColors[3]);
    ellipse(canvasW*0.8, canvasH*0.8, 50, 50);
    pop();
    push();
    fill(gamePointColors[4]);
    ellipse(canvasW*0.5, canvasH*0.6, 50, 50);
    pop();

    //現在位置
    push();
    fill(255, 0, 0, 150)
    ellipse(canvasW*0.2, canvasH*0.4, 60, 60);
    pop();

}
