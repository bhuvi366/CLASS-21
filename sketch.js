var fObject,mObject;
function setup() {
  createCanvas(800,400);
  fObject=createSprite(400, 200, 50, 80);
  mObject=createSprite(400, 200, 80, 50);
  fObject.shapeColor="red";
  mObject.shapeColor="red";
  f1Object=createSprite(200, 200, 50, 80);
  f1Object.shapeColor="red";
}

function draw() {

  background(255,255,255);
  mObject.x=mouseX  
  mObject.y=mouseY 
  console.log("distance betweenCentre "+(fObject.width/2+mObject.width/2));
  console.log("distance betweenObject "+(fObject.x-mObject.x));
  
  
  if(isTouching(f1Object,mObject))
{
  f1Object.shapeColor="green";
    mObject.shapeColor="green";
    }
    else{
      f1Object.shapeColor="red";
    mObject.shapeColor="red";
}
  

  drawSprites();
}
