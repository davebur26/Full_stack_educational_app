// var canvasWidth1 = 450;
// var canvasHeight1 = 300;

// var spriteWidth1 = 3177;
// var spriteHeight1 = 486;

// var rows1 = 1;
// var cols1 = 10;

// var trackRight = 0;
//
// var trackLeft = 1;

var width1 = 3177/10;

var height1 = 486;

var curFrame1 = 0;

var frameCount1 = 10;

// var x1=-2;
// var y1=0;

// var srcX1=0;
// var srcY1=0;

// var left = false;
//
// var right = false;
//
// var speed = 10;

var canvas1 = document.getElementById('explorer1');

canvas1.width = 450;
canvas1.height = 300;

var ctx1 = canvas1.getContext("2d");

var character1 = new Image();

character1.src = "character1fixed.png";

function updateFrame1(){

 curFrame1 = ++curFrame1 % frameCount1;

 srcX1 = curFrame1 * width1;
 ctx1.clearRect(-2,0,width1,height1);
}

function draw1(){

 updateFrame1();

 ctx1.drawImage(character1,srcX1,0,width1,height1,-3,0,width1,height1);
}

setInterval(draw1,180);
