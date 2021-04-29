
function setup() {
  
  createCanvas(800,400);
  angleMode(DEGREES);

}

function draw() {
  background("purple"); 
 
translate(400,200);
rotate(-90);
  hr = hour();
mn = minute();
sc = second();
  
scAngle = map(sc,0,60,0,360); 
mnAngle = map(mn,0,60,0,360); 
hrAngle = map(hr%12,0,12,0,360); 

//drawingsecoundhand
push();
rotate(scAngle);
stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //drawingsminutehand
push();
rotate(mnAngle);
stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  //drawinghourhand
push();
rotate(hrAngle);
stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();


stroke(255,0,255);
strokeWeight(10);
noFill();
stroke(255,0,0);
arc(0,0,300,300,0,scAngle);

stroke(0,255,0);
arc(0,0,280,280,0,mnAngle);

stroke(0,0,255);
arc(0,0,260,260,0,hrAngle);
  
  /*arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI)
  
  */
  

  drawSprites();
}