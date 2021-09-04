const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine, world;
var flake, girl;
var bgImg , bg

function preload() {
bgImg = loadImage("snow1.jpg");
//flakeImg = loadImage("snow5.webp");
girlImg = loadImage("sngirl.png");
}

function setup() {
  createCanvas(1200,600);
  bg = createSprite(600, 300, 50, 50);
  bg.addImage(bgImg);
  bg.scale = 2;

  ground = createSprite(600,550,1200,20);
  ground.visible = false

  //flake.addImage(flakeImg);
  girl = createSprite(400,400,50,50);
  girl.scale = 0.75;
  girl.addImage(girlImg);
}

function draw() {
  //background(0);  
  if(keyDown("space")){
    girl.velocityY = -10
  }
  girl.velocityY = girl.velocityY+0.8
  
  girl.collide(ground);
  
  drawSprites();
}