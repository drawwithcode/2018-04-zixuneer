var balls = [];

function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  frameRate(60);
  translate(width/2,height/2);

  background(0);

  var s='move your mouse';
  textFont('Aqua Grotesque');
  textStyle(BOLD);
  textSize(16);
  fill(50, 20, 218);
  text(s,-600,-270,500,500);

  for(i=0; i<47; i++){
    var x=mouseX/13;
    var y=mouseY/13;
    var r=i+3;

    balls[i] = new Ball(x+i*3,y+i*3,r);
  }


  for (var j = 0; j < balls.length; j++) {
    balls[j].move();
    balls[j].display();
  }
}

function Ball(tempX, tempY, tempDiameter) {

  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    var col=lerpColor(color(222, 229, 22, 200),color(98, 20, 218, 200),frameCount/600);
    if(frameCount>700){
      col=color(random(50,98), random(0,50), random(200,220), random(130,255));
    }
    fill(col);
    angleMode(RADIANS);
    rotate(frameCount/350);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    //text('x',0,0,100);
  };

}
