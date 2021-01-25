const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 var engine, world;
var Matter;
var bgImg;
 var balloon;
// var  bgImg=("Hot Air Balloon-01.png")
 var position;
 var database;
function preload(){
  bgImg=loadImage("Hot Air Ballon-01.png");
  balloonAnimation=loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")

}
function setup() {
  createCanvas(800,800);
    balloon=createSprite(400, 200, 50, 50);
    balloon.addAnimation("balloonImages", balloonAnimation)
  
    // var balloonPosition=database.ref("balloon/height")
    // balloonPosition.on("value",readPosition,showError)

    
  
}

function draw() {
  if(bgImg)
  {

  background(bgImg);
  }
   balloon.display();
  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10
  }
  if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10
  }
  if(keyDown(UP_ARROW)){
    balloon.y=balloon.y-10
  }
  if(keyDown(DOWN_ARROW)){
    balloon.y=balloon.y+10
  }
 
  
  drawSprites();
}
