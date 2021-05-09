const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snows = [];
var maxSnows = 100;
var snowimg;

function preload() {
  snowimg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
   world = engine.world;
  //createSprite(400, 200, 50, 50);

  for(var i = 0; i < maxSnows; i++){
    snows.push(new createSnows(random(0,800), random(0,600)));
 }
}


function draw() {
  Engine.update(engine);
  background(snowimg);  

  for(var i = 0; i < maxSnows; i++){
    snows[i].display();
    snows[i].update();
}
  drawSprites();
}