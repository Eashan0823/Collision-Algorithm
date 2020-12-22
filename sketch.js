var fixedRect, movingRect;
var rect1,rect2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  //Displays the collider radius for fixedrect and movingrect in line 11
  fixedRect.debug = true;
  movingRect = createSprite(100,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  //Movingrect moves in the left direction and fixedrect moves in the right direction
  movingRect.velocityX=-5;
  fixedRect.velocityX=5;
  rect1=createSprite(400,100,50,80);
  rect2=createSprite(400,800,80,30);
  rect1.velocityY=5;
  rect2.velocityY=-5;
  rect1.shapeColor="red";
  rect2.shapeColor="green";
}

function draw() {
  background(0,0,0);
  bounceOff(rect1,rect2);  
 
  bounceOff(movingRect,fixedRect);
  
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
     return true;
    }
     else{
       return false;
     }
}
function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      //Increases the velocity for both the objects so that they move in the opposite direction
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }
    if(object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
        object1.velocityY=object1.velocityY*(-1);
        object2.velocityY=object2.velocityY*(-1);
      }
}