
var fixedRect, movingRect;

var r1, r2
function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  r1=createSprite(500,300,50,50)
  r2=createSprite(400,100,80,80)
    r1.shapeColor= "purple"
    r2.shapeColor= "cyan"
}

function draw() {
  background(0,0,0);  
  r1.x = World.mouseX;
  r1.y = World.mouseY;

  if(collision(r1,r2)){
    r1.shapeColor= "indigo"
    r2.shapeColor= "indigo"
  }
 else{
  r1.shapeColor= "purple"
  r2.shapeColor= "cyan"
 }

//bounceOff(movingRect,fixedRect)
  drawSprites();
}


  


