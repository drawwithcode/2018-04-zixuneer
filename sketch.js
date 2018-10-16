
var mySound;
function preload() {

   mySound = loadSound('./assets/thunder.mp3');
  }


var balls = [];
var gravity = 0.1;

function setup() {
  createCanvas(windowWidth,windowHeight);
   mySound.setVolume(0.5);
   mySound.play();
}

function draw() {

  var col1=lerpColor(color(133, 193, 233),color(40, 55, 71),frameCount/200);
  background(col1);

  if(frameCount>200){

  var s1='It is going to rain';
  var s2='Create the raindrop by clicking';
  textFont('Aqua Grotesque');
  textSize(10);
  textStyle(NORMAL);
  text(s2,70,200,200,200);
  textStyle(BOLD);
  textSize(30);
  fill(136, 78, 160);
  text(s1,70,100,200,200);
}

  var col2=lerpColor(color(133, 193, 233),color(133, 193, 233,50),frameCount/200);
  noStroke();
  fill(col2);
  rect(0,height*0.8,width,height*0.8);

 for(var j=0; j<width; j+=128){
    var x1=100;
    var x2=40;
    var y1=height;
    var dis=100
    stroke(200);
    strokeWeight(5);
    bezier(x1+j, y1*0.87, x2+j, y1*0.82, x1+5+j, y1*0.9, x2+5+j, y1*0.85);
    bezier(x1+j+dis, y1*0.95, x2+j+dis, y1*0.9, x1+5+j+dis, y1*0.98, x2+5+j+dis, y1*0.93);
}

  for (var i = 0; i < balls.length; i ++ ) {
    balls[i].move();
    balls[i].display();
  }

}

function mousePressed() {

  var b = new Ball(mouseX,mouseY,18);
  balls.push(b);
}


function Ball(tempX, tempY, tempW){
    this.x = tempX;
    this.y = tempY;
    this.w = tempW;
    this.speed = 0;

    this.display=function(){
      fill(215, 189, 226);
      strokeWeight(1);
      stroke(200);
      ellipse(this.x,this.y,this.w);
    }

    this.move=function(){

    this.y = this.y + this.speed;
    this.speed = this.speed + gravity;
    if (this.y > height*0.8-10) {
      this.y = height*0.8-10;
      this.speed = this.speed * -0.97;
  }

 }
}
